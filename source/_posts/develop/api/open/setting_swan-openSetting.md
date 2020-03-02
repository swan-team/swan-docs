---
title: swan.openSetting
header: develop
nav: api
sidebar: setting_swan-openSetting
---
 

**解释**： 调起客户端智能小程序设置界面，返回用户设置的操作结果。swan.openSetting 可打开的控制面板权限详见[需授权接口列表](https://smartprogram.baidu.com/docs/develop/api/open/authorize_list/)。

**Web 态说明**：由于目前 Web 态还暂不支持发票抬头收货地址相关功能并且地理位置、录音功能和摄像头等使用权限三方浏览器会做相关的权限信息校验，框架无法在用户无感知的情况下改变地理位置、录音功能和摄像头的使用权限，所以目前 Web 态暂不支持 openSetting 的功能，开发者调用此方法 Web 态会调用开发者配置的 fail 回调并注入 {errCode: 1001, errMsg: "web化API不支持openSetting"} 参数。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/openSetting.png"  class="demo-qrcode-image" />


**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success |Function  |  否||  接口调用成功的回调函数|
|fail  |  Function |   否 || 接口调用失败的回调函数|
|complete |   Function |   否  | | 接口调用结束的回调函数（调用成功、失败都会执行）|


**success返回参数说明**：

|参数  |类型|说明 |
|---- | ---- |---- |
|authSetting|Object|用户授权结果，其中 key 为 scope 值，value 为 Bool 值，表示用户是否允许授权。|



**图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/openSetting.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例1 - API打开授权设置页**：

<a href="swanide://fragment/1b12263b2caf52db8d7fce9f5420bf121560170167235" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="container">
    <view class="page-body">
        <button bind:tap="openSetting" type="primary" hover-stop-propagation="true">打开设置</button>
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
        title: 'openSetting'
    },

    openSetting() {
        swan.openSetting({});
    }
});
```

**代码示例2 - button组件打开授权设置页**：

<a href="swanide://fragment/499a6f3b829cf541f1188ed5962e660d1575205877194" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="container">
    <view class="page-body">
        <button bindopensetting="openSetting" type="primary" open-type="openSetting">打开设置</button>
    </view>
</view>
```

* 在 js 文件中

```js
Page({
    openSetting(){
        swan.showToast({
            title: '打开回调',
            icon: 'none'
        });
    }
});
```

#### 错误码
* Andriod

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法|
|1001|执行失败|

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |


