---
title: 系统信息
header: develop
nav: api
sidebar: device_sys
---


## swan.getSystemInfo

**解释**：获取系统信息

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
|env |string|  智能小程序的版本；development 代表开发版本，trial 代表体验版本，production 代表线上版本  |

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

**解释**： 判断智能小程序的API，回调，参数，组件等是否在当前版本可用。暂无法校验宿主扩展的API。

**方法参数**： String schema

使用 `${API}.${method}.${param}.${options} `或者 `${component}.${attribute}.${option}` 方式来调用。

**`schema`参数说明**：

|参数  |说明 |
|---- | ---- |
|${API}  | API 名字 |
|${method} |  调用方式，有效值为return, success, object, callback   |
|${param} | 参数或者返回值  |
|${options} |参数的可选值   |
|${component} |   组件名字 |
|${attribute} | 组件属性 |
|${option}  |  组件属性的可选值 |


**示例**：

<a href="swanide://fragment/5c62655674387bd88ff338a9bb3f3f861557731053647" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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
        console.log('canIUse:view.hover-class', swan.canIUse('view.hover-class'));
        console.log('canIUse:scroll-view.scroll-x', swan.canIUse('scroll-view.scroll-x'));
        console.log('canIUse:cover-view', swan.canIUse('cover-view'));
        console.log('canIUse:button.size.default', swan.canIUse('view.button.size.default'));
        console.log('canIUse:request.object.success.data', swan.canIUse('request.object.success.data'));
        console.log('canIUse:getSavedFileList', swan.canIUse('getSavedFileList'));
        console.log('canIUse:getSavedFileList.object', swan.canIUse('getSavedFileList.object'));
        console.log('canIUse:getSavedFileList.object.success', swan.canIUse('getSavedFileList.object.success'));
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}
```
