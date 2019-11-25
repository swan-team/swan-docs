---
title: 手工埋点统计
header: data
nav: book
sidebar: performance-point
---
智能小程序为您提供了自定义事件埋点方式之外，为满足您不同的需求，还为您提供了以下方法进行埋点。

## UV的统计逻辑

利用注册回调函数的方式，优先运行AppOnLaunch和AppOnshow的生命周期中的逻辑，再运行Page的生命周期的逻辑。
**优点**：
1、避免框架app级别的onShow和page级别onShow的不可控时序性问题（将在 10.13 修复）；
2、确保异步回调可控。

在app.js中，统计UV：

```js
App({
    onShow: function () {
        swan.request({
            url: 'test.php', //仅为示例，并非真实的接口地址。
            data: {
                uid: self.globalData.uuid
                  // that.globalData.uuid为用户的唯一标识，详见"uuid的统计逻辑"。
            },
            success: res => {
                self.globalData.data = res.data;
                // 此处为网络请求，加入 callback 确保在 Page.onLoad 之前返回。
                self.globalData.callBackArr.forEach(callBack => {
                    // 此处遍历执行Page级生命周期的注册的App回调函数。
                    callBack();
                });
            }
        })
    },
    onHide() {
        if (!that.globalData.uuid) {
            // app的onShow丢失（ios和安卓预计在10.13修复）,需重新执行一遍UV统计的逻辑。
        }
    }
    globalData: {
        data: ''，
        // 定义一个绑定回调函数队列。
        callBackArr: []
    }
});
```
在 index.js 中，获取应用实例：
```js
const app = getApp();
Page({
    data: {
        ...
    },
    onLoad: function () {
        app.onLoadCallback = data => {
           if (data != '') {
               that.setData({
                   ...
               });
           }
       }
       app.globalData.callBackArr.push(app.onLoadCallback);
    },
    onShow: function () {
        //判断是用户是否绑定。
        if (app.globalData.data && app.globalData.data != '') {
            that.setData({
                ...
            });
        } else {
            // getUserInfo 为网络请求，加入 callback，确保在 Page.onLoad 之前返回。
            app.swanCallback = data => {
                if (data != '') {
                    that.setData({
                        ...
                    });
                }
            }
            app.globalData.callBackArr.push(app.swanCallback);
        }
    }
})
```

## 用户唯一标识

uuid 是用户唯一标识，使用示例中提供的方法，生成uuid作为用户唯一标识的统一策略，每次进入到小程序后进行一次有效的存储，在统计中直接取出使用。
**代码示例**：
```js
App({
    onShow() {
        const uuid = that.getUUID();
        that.globalData.uuid = uuid;
    },
    getUUID() {
        let uuid = swan.getStorageSync('uuid');
        if (uuid && uuid.length === 36) {
            return uuid;
        }
        uuid = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ that.unit8() & 15 >> c / 4).toString(16)
        );
        swan.setStorageSync('uuid', uuid);
        return uuid;
    },
    // 兼容crypto.getRandomValues的callBack。
    unit8() {
        const unitCode = ((typeof crypto !== 'undefined') && crypto.getRandomValues)
                       ? crypto.getRandomValues(new Uint8Array(1))[0]
                       : Math.floor(Math.random() * 0xff);
        return unitCode;
    },
    globalData: {
        uuid: ''
    }
});
```
## PV的统计逻辑。

在Page的onShow生命周期中统计PV：
1.全局和统计相关的请求逻辑全部都放到队列的数据结构里；
2.利用队列的方式保证异步的执行顺序；
3.在相关Page页面的onShow里进行统计PV，每次onShow都做+1的操作。
```js
Page({
    onShow(options) {
        swan.request({
            url: 'https://host/path?query',
            data: {
                // 上报PV，做+1的操作
                ...
            }   
        });
    }
});
```
## 全局变量的统计逻辑

关于场景值、path、query 等不受前后台切换而改变逻辑的全局变量，统一借助 App 的 onShow 中 options 参数的 scene、path、query 等属性进行逻辑处理。
```js
/* globals Page */
App({
    onShow(options) {
        if (options.scene === that.globalData.scene) {
            return;
        }
        that.globalData.scene = options.scene;
    },
    globalData: {
        scene: ''
    }
});
```
options结构如下：
```js
options: {
    path: 'pages/index/index',
    query: {
        name: 'xx',
        sex: 'm'
    }，
    ...
}
```
Page级别的query在onLoad生命周期可以获取到query。
```js
// pages/index/index
Page({
    // 触发跳转事件
    redirect() {
        swan.redirectTo({
            url: '../logs/logs?tel=156xxxxx333&name=xx',
        })
    }
});
// pages/logs/logs
Page({
    // 触发跳转事件
    onLoad(options) {
        // options->{tel: '156xxxxx333', name: 'xx'}
    }
});

```
## 启动次数的统计逻辑

利用session机制来统计启动次数：
1.通过 App 的 onShow 获取 appKey；
2.生成一个 session，策略“appKey + uuid + timestamp”；
3.访问开始即启动小程序，访问结束结分为：进入后台超过5min、在前台无任何操作超过30min、在新的来源打开小程序；
4.访问结束时（在触发onHide生命周期，或者满足上述条件）上报一条数据。
```js
App({
    onShow(options) {
        that.globalData.appKey = options.referrerInfo.appId;
    },
    onHide(options) {
        // 访问结束，上报埋点。
        swan.request({
            url: 'https://host/path:port?query',
            data: {
                session: self.globalData.uuid + self.globalData.appKey + Date.now()
            }
        });
    },
    globalData: {
        // 此uuid是之前通过uuid方案生成的用户唯一标识。
        uuid: '',
        appKey: ''
    }
});
```
