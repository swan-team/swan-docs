---
title: 系统信息
header: develop
nav: api
sidebar: device_sys
---


## swan.getSystemInfo

>  基础库 1.10.8 版本开始支持。

**解释**：获取系统信息

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/getSystemInfo.png"  class="demo-qrcode-image" />


**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success |Function  |  否 |  -|接口调用成功的回调|
|fail   | Function |   否  | -|接口调用失败的回调函数|
|complete  |  Function |   否 | -| 接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明**：

|参数  |说明 |最低版本|
|---- | ---- |
|brand  | 手机品牌 |-|
|model |  手机型号   |-|
|pixelRatio | 设备像素比  |-|
|screenWidth |屏幕宽度   |-|
|screenHeight |   屏幕高度 |-|
|windowWidth |可使用窗口宽度 |-|
|windowHeight  |  可使用窗口高度 |-|
|statusBarHeight| 状态栏的高度 |-|
|navigationBarHeight| 导航栏的高度|3.0.17|
|language |宿主 App 设置的语言 |-|
|version |宿主 App 版本号|-|
|system  |操作系统版本  |-|
|platform |客户端平台，如：ios。|-|
|fontSizeSetting |用户字体大小设置 |-|
|SDKVersion |客户端基础库版本 |-|
|host|宿主平台，如：baiduboxapp 。|3.30.2|
|cacheLocation |上一次缓存的位置信息|安卓端最低swanjs版本3.40.4；ios最低支持版本3.70.2|
|swanNativeVersion|宿主平台版本号|最低支持版本1.13.18|
|devicePixelRatio|屏幕密度|安卓最低支持swanjs版本3.0.39； ios最低支持版本3.0.39 |

**示例**：
<a href="swanide://fragment/76507c0039b267dcb3cace3613a972f71560168111650" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果 </a>

* 在 swan 文件中

```xml
<view class="container">
    <view class="page-body">
        <view class="info-ctn">
            <view class="info-item" s-for="item in infoList">
                <text class="info-label">{{item.label}}：</text>
                <text class="info-value">{{item.value}}</text>
            </view>
        </view>
        <view class="btn-ctn">
            <button bind:tap="getSystemInfo" type="primary" hover-stop-propagation="true">点击获取系统信息</button>
            <button bind:tap="clearClick" hover-stop-propagation="true">清空</button>
        </view>
    </view>
    <view class="page-title">
        <view class="page-title-line"></view>
        <view class="page-title-text">{{title}}</view>
    </view>
</view>
```

* 在 js 文件中

```js
Page({
    data: {
        title: 'getSystemInfo',
        infoList: [{
            label: '手机品牌',
            key: 'brand',
            value: ''
        }, {
            label: '手机型号',
            key: 'model',
            value: ''
        }, {
            label: '当前版本',
            key: 'version',
            value: ''
        }, {
            label: '屏幕宽度',
            key: 'screenWidth',
            value: ''
        }, {
            label: '屏幕高度',
            key: 'screenHeight',
            value: ''
        }, {
            label: 'DPI',
            key: 'pixelRatio',
            value: ''
        }, {
            label: '语言',
            key: 'language',
            value: ''
        }]
    },

    getSystemInfo(e) {
        swan.getSystemInfo({
            success: res => {
                // 更新数据
                this.updateInfoList(res);
            },
            fail: err => {
                swan.showToast({
                    title: '获取失败'
                });
            }
        });
    },

    clearClick() {
        this.updateInfoList({});
    },

    updateInfoList(res) {
        let infoList = this.getData('infoList');
        for (let i = 0; i < infoList.length; ++i) {
            infoList[i].value = res[infoList[i].key];
        }
        this.setData('infoList', infoList);
    }
});
```
#### 错误码
Andriod

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法|
|202|解析失败，请检查参数是否正确|
|402|安全性检查：访问控制校验失败|
                                

## swan.getSystemInfoSync

**解释**：获取系统信息同步接口

**方法参数**：无

**同步返回参数说明**：

|参数  |说明 |最低版本|
|---- | ---- |----|
|brand  | 手机品牌 |-|
|model |  手机型号   |-|
|pixelRatio | 设备像素比  |-|
|screenWidth |屏幕宽度   |-|
|screenHeight |   屏幕高度 |-|
|windowWidth |可使用窗口宽度 |-|
|windowHeight  |  可使用窗口高度 |-|
|statusBarHeight| 状态栏的高度 |-|
|navigationBarHeight| 导航栏的高度|3.0.17|
|language |宿主 App 设置的语言 |-|
|version |宿主 App 版本号|-|
|system  |操作系统版本  |-|
|platform |客户端平台，如：ios。|-|
|fontSizeSetting |用户字体大小设置 |-|
|SDKVersion |客户端基础库版本 |-|
|host|宿主平台，如：baiduboxapp 。|3.30.2|
|cacheLocation |上一次缓存的位置信息|安卓端最低swanjs版本3.40.4；ios最低支持版本3.70.2|
|swanNativeVersion|宿主平台版本号|最低支持版本1.13.18|
|devicePixelRatio|屏幕密度|安卓最低支持swanjs版本3.0.39； ios最低支持版本3.0.39 |


**示例**：

<a href="swanide://fragment/e351abc548d711c90b08dbf1dd6546a21557730715787" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="getSystemInfoSync">getSystemInfoSync</button>
</view>
```

* 在 js 文件中

```js

Page({
    getSystemInfoSync() {
        try {
            const result = swan.getSystemInfoSync();
            console.log('getSystemInfoSync success', result);
        } catch (e) {
            console.log('getSystemInfoSync fail', e);
        }
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}
```

#### 错误码

Andriod

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |

## swan.getEnvInfoSync

> 基础库 2.0.28 版本开始支持。

**解释**：获取运行环境信息同步接口

**方法参数**：无


**同步返回参数说明**：

|参数  |类型|说明 |
|---- | ---- |---|---|
|appKey  |string| 智能小程序 App Key |
|appName |string|  智能小程序名称   |
|lastAppURL |string|  智能小程序最近一次打开的调起协议  |
|sdkVersion |string|  基础库版本   |
|scheme |string|  调起协议的协议头   |
|env |string|  智能小程序的版本（基础库 3.90.12 开始支持）；development 代表开发版本，trial 代表体验版本，production 代表线上版本  |

**示例**：

<a href="swanide://fragment/d00d4cb044b83f2cb975a1b8041c66ee1557730799522" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="getEnvInfoSync">getEnvInfoSync</button>
</view>
```

* 在 js 文件中

```js
Page({
    getEnvInfoSync() {
        try {
            const result = swan.getEnvInfoSync();
            console.log('getEnvInfoSync success', result);
        } catch (e) {
            console.log('getEnvInfoSync fail', e);
        }
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}
```

## swan.canIUse

**解释**： 判断智能小程序的API，回调，参数，组件等是否在当前版本可用。

**方法参数**： String schema
schema 的表达形式如下：
`${API}.${method}.${param}.${option}`
`${class}.${method}.${param}.${option}`
`${component}.${attribute}.${option}`

**返回值**：Boolean 当前版本是否可用



**`schema`参数说明**：

|参数  |说明 |
|---- | ---- |
|${API}  | API 名字 |
|${class}  | 类名 |
|${method} |  调用方式，有效值为return, object, 回调函数的名称（多数为success和callback）|
|${param} | 参数或者返回值  |
|${option} |参数的有效值或者返回值的属性或者组件属性的有效值  |
|${component} |   组件名字 |
|${attribute} | 组件属性 |

**说明**：
1. 回调函数的名称以文档为准；
2. 不支持 fail 和 complete 回调函数的判断；
3. 纯 number 类型的属性不做支持；
4. 带有`.`或空格的属性不做支持；
5. 如果参数是 Array.<Object\> 或 Array.<string\> 类型，校验方式举例如下：
```js
// swan.ai.textReview   Array.<Object>
swan.canIUse('ai.textReview.success.result.reject.label');

// swan.chooseImage  Array.<string>
swan.canIUse('chooseVideo.object.sourceType.album');
```

**示例**：

<a href="swanide://fragment/2d9c4a9cd34aac2e3f951cecc6b1fe0e1569499882524" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="canIUse">canIUse</button>
</view>
```

* 在 js 文件中

```js
Page({
    canIUse() {
        // 组件
        console.log('canIUse:view.hover-class', swan.canIUse('view.hover-class'));
        console.log('canIUse:scroll-view.scroll-x', swan.canIUse('scroll-view.scroll-x'));
        console.log('canIUse:cover-view', swan.canIUse('cover-view'));
        console.log('canIUse:button.size.default', swan.canIUse('button.size.default'));

        // API: ${method} 为 object
        console.log('canIUse:request.object.method.OPTIONS', swan.canIUse('request.object.method.OPTIONS'));

        // API: ${method} 为 success
        console.log('canIUse:ai.imageAudit.success.conclusionType.data.stars.name', swan.canIUse('ai.imageAudit.success.conclusionType.data.stars.name'));

        // API: ${method} 为 callback
        console.log('canIUse:onAppShow.callback.entryType.user', swan.canIUse('onAppShow.callback.entryType.user'));

        // API: ${method} 为 return
        console.log('canIUse:getEnvInfoSync.return.env.trial', swan.canIUse('getEnvInfoSync.return.env.trial'));

        // API: 类
        console.log('canIUse:VideoContext.requestFullScreen.object.direction', swan.canIUse('VideoContext.requestFullScreen.object.direction'));
        console.log('canIUse:CanvasContext.fill', swan.canIUse('CanvasContext.fill'));
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}
```
                     

