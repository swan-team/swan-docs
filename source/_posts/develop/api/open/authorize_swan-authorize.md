---
title: swan.authorize
header: develop
nav: api
sidebar: authorize_swan-authorize
---
 
 

**解释**： 提前向用户发起授权请求。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/authorize.png"  class="demo-qrcode-image" />


**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|scope  | String| 是  | | 部分接口需要经过用户授权同意才能调用。将这些接口按使用范围分成多个 scope，用户选择对 scope 来进行授权，当授权给一个 scope 之后，其对应的所有接口都可以直接使用，详见 scope 列表。|
|success |Function|    否  | | 接口调用成功的回调函数|
|fail |   Function  |  否 || 接口调用失败的回调函数|
|complete  |  Function   | 否 || 接口调用结束的回调函数（调用成功、失败都会执行）|

**scope 列表**：

|scope|	对应接口|	描述|
|---|---|---|
|scope.userInfo|[swan.getUserInfo](http://smartprogram.baidu.com/docs/develop/api/open/userinfo_swan-getUserInfo/)|	用户信息|
|scope.userLocation|[swan.getLocation](http://smartprogram.baidu.com/docs/develop/api/location/swan-getLocation/), [swan.chooseLocation](http://smartprogram.baidu.com/docs/develop/api/location/swan-chooseLocation/)|地理位置|
|scope.writePhotosAlbum	|[swan.saveImageToPhotosAlbum](http://smartprogram.baidu.com/docs/develop/api/media_image/#swan-saveImageToPhotosAlbum/)|保存到相册|
|scope.address|	[swan.chooseAddress](http://smartprogram.baidu.com/docs/develop/api/open/chooseaddress_swan-chooseAddress/)|	收货地址|
|scope.invoiceTitle|[swan.chooseInvoiceTitle](http://smartprogram.baidu.com/docs/develop/api/open/swan-chooseInvoiceTitle/)	|发票抬头|
|scope.record|	[swan.getRecorderManager](http://smartprogram.baidu.com/docs/develop/api/media/recorder_swan-getRecorderManager/)|	录音功能|
|scope.camera|	[camera](/develop/component/media_camera/)|	摄像头|

**示例**：
<a href="swanide://fragment/a866a61034de7c92163fa56338f6258b1560169856336" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="container">
    <view class="page-body">
        <button s-for="item in items" id="{{item.id}}" bind:tap="btnClick" type="primary" hover-stop-propagation="true">{{item.name}}</button>
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
        title: 'authorize',
        items: [{
            name: '授权获取用户信息',
            id: 'scope.userInfo'
        }, {
            name: '授权获取位置信息',
            id: 'scope.userLocation'
        }]
    },

    btnClick(e) {
        let scope = e.currentTarget.id;
        swan.authorize({
            scope,
            success: res => {
                swan.showToast({
                    title: '授权成功'
                });
            },
            fail: err => {
                swan.showToast({
                    title: '授权失败'
                });
                console.log('authorize fail', err);
            }
        });
    }
});
```

**说明**：
授权操作为异步操作，完成前请不要多次调用。

#### 错误码

* Andriod

|错误码|说明|
|--|--|
|1001|执行失败   |
|10001|内部错误|
|11001|未知错误|
|11003|用户取消授权|

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |
|10001|内部错误   |
|10002|网络请求失败|
|10004|用户拒绝(user not login)|

