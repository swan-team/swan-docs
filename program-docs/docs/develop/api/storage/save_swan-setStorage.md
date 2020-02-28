---
title: swan.setStorage
header: develop
nav: api
sidebar:  save_swan-setStorage
# webUrl: https://qft12m.smartapps.cn/api/storage/storage
---



**解释**：将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容。主动删除历史小程序，卸载 百度 App，或在系统中清除百度app的缓存即可清除数据。目前单个 key 允许存储的最大数据长度无限制，没有自动清理存储机制。storage 上限 10MB，用户需主动清理，期间数据一直可用。

 
## 方法参数

Object object 

### `object`参数说明 ：

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|key|String|是||本地缓存中的指定的 key|
|data  |  Object/String/Number/Array  | 是  | | 需要存储的内容|
|success| Function |   否 | |  接口调用成功的回调函数|
|fail  |  Function |   否  | |接口调用失败的回调函数|
|complete   | Function   | 否 | |  接口调用结束的回调函数（调用成功、失败都会执行）|


## 示例

<a href="swanide://fragment/84384a223a90d8a24ee7754217b4130d1573632783248" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_setStorage.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/storage.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>
 

### 代码示例 1




* 在 swan 文件中

```html
<view class="container">
    <view class="card-area">
        <view class="list-area border-bottom">
            <label class="list-item-key-4">key</label>
            <input class="list-item-value" bindfocus="keyFocus" bindinput="keyInput" type="text" value="{{key}}" placeholder="请输入key"/>
        </view>
        <view class="list-area border-bottom">
            <label class="list-item-key-4">value</label>
            <input class="list-item-value" bindfocus="valueFocus" bindinput="valueInput" type="text" value="{{value}}" placeholder="请输入value"/>
        </view>
        <view>
            <button  bindtap="setStorage" type="primary" hover-stop-propagation="true">存储数据</button>
            <button  bindtap="getStorage" type="primary" hover-stop-propagation="true" disabled="{{disabled}}">读取数据</button>
        </view>
    </view>
</view>
```

* 在 js 文件中

```js
Page({
    data: {
        key: '示例Key',
        value: '示例Value',
        disabled: true
    },
    keyInput(e) {
        this.setData('key', e.detail.value);
    },
    valueInput(e) {
        this.setData('value', e.detail.value);
    },
    valueFocus() {
        this.setData('value', '');
    },
    keyFocus() {
        this.setData('key', '');
    },
    setStorage() {
        let key = this.hasKey();
        if (!key) {
            return;
        }
        swan.setStorage({
            key,
            data: this.getData('value'),
            success: res => {
                this.toast('存储成功', 'none');
                this.setData('disabled', false);
            },
            fail: err => {
                this.toast('存储数据失败');
            }
        });
    },
    getStorage() {
        let key = this.hasKey();
        if (!key) {
            return;
        }
        swan.getStorage({
            key,
            success: res => {
                const data = res.data;
                if (data) {
                    swan.showModal({
                        title: '数据信息',
                        content: `${key}: ${data}`,
                        showCancel: false
                    });
                } else {
                    this.toast('找不到key对应的值');
                }
            },
            fail: err => {
                this.toast('读取数据失败');
            }
        });
    },
    hasKey() {
        let key = this.getData('key');
        if (key) {
            return key;
        }
        this.toast('key不能为空');
    },
    toast(title, icon = 'none') {
        swan.showToast({title, icon});
    }
});

```

### 代码示例 2: 利用本地缓存提前渲染界面
> 业务场景：我们实现的小程序首页是展示一堆商品的列表。数据渲染的方式一般是在页面onLoad回调之后通过swan.request向服务器发起一个请求去拉取列表数据，在success回调中把数据通过setData渲染到界面上，如下代码所示。
* 在 js 文件中
```js
Page({
    onLoad: function() {
        var that = this
        swan.request({
            url: 'xxxx',
            success: function (res) {
                if (res.statusCode === 200) {
                    that.setData({
                        list: res.data.list
                    })
                }
            }
        })
    }
})
```
> 在请求到数据前，我们避免页面白屏的方式一般是把之前的请求成功请求存在本地缓存里，在onLoad发起请求前，先检查是否有缓存过列表，如果有的话直接渲染界面，然后等到swan.request的success回调之后再覆盖本地缓存重新渲染新的列表，如下代码所示。
* 在 js 文件中
```js
Page({
    onLoad: function() {
        var that = this
        var list =swan.getStorageSync("list")
        if (list) { // 本地如果有缓存列表，提前渲染
            that.setData({
                list: list
            })
        }
        swan.request({
            url: 'xxxx',
            success: function (res) {
                if (res.statusCode === 200) {
                    list = res.data.list
                    that.setData({ // 再次渲染列表
                        list: list
                    })
                    swan.setStorageSync("list",list) // 覆盖缓存数据
                }
            }
        })
    }
})
```

### 代码示例 3: Session Key在小程序中是有实效性的,可以利用本地缓存的能力来持久化存储Session Key。
* 在 js 文件中
```js
var app = getApp();
Page({
    onLoad: function() {
        // 调用 swan.login 获取 Authorization Code
        swan.login({
            success: function(res) {
                // 拿到Code后去自己服务器换取自己的登录凭证
                swan.request({
                    url: 'https://spapi.baidu.com/oauth/jscode2sessionkey',
                    data: { code: res.code },
                    success: function(res) {
                        var data = res.data;
                        // 把 SessionId 和过期时间放在内存中的全局对象和本地缓存里边
                        app.globalData.sessionKey =data.sessionKey;
                        swan.setStorageSync('SESSIONKEY', data.sessionKey);
                        // 假设登录态保持2天
                        var expiredTime = +new Date() + 2*24*60*60*1000;
                        app.globalData.expiredTime = expiredTime;
                        swan.setStorageSync('EXPIREDTIME', expiredTime);
                    }
                })
            }
        })
    }
})
```

###代码示例 4: 利用本地缓存恢复用户登录态Session Key
* 在 js 文件中
```js
// app.js
App({
    onLaunch: function(options) {
        var sessionKey = swan.getStorageSync('SESSIONKEY');
        var expiredTime = swan.getStorageSync('EXPIREDTIME');
        var now = +new Date();
        if (now - expiredTime <= 2*24*60*60*1000) {
            this.globalData.sessionKey = sessionKey;
            this.globalData.expiredTime = expiredTime;
        }
    },
    globalData: {
        sessionKey: null,
        expiredTime: 0
    }
})
```

##  错误码

### Android

|错误码|说明|
|:--|:--|
|201|解析失败，请检查调起协议是否合法|
|1001|执行失败|

### iOS

|错误码|说明|
|:--|:--|
|202|解析失败，请检查参数是否正确      |
|1003|超过最大存储文件大小| 

