---
title: 授权
header: develop
nav: api
sidebar: open_authorize
---

## 需授权接口列表


|接口|	描述|
|---|---|
|[swan.getUserInfo](http://smartprogram.baidu.com/docs/develop/api/open_userinfo/#swan-getUserInfo/)|	用户信息|
|[swan.getLocation](http://smartprogram.baidu.com/docs/develop/api/location_get/#swan-getLocation/), [swan.chooseLocation](http://smartprogram.baidu.com/docs/develop/api/location_get/#swan-chooseLocation/)|地理位置|
|[swan.saveImageToPhotosAlbum](http://smartprogram.baidu.com/docs/develop/api/media_image/#swan-saveImageToPhotosAlbum/)|保存到相册|
|	[swan.chooseAddress](http://smartprogram.baidu.com/docs/develop/api/open_chooseaddress/#swan-chooseAddress/)|	收货地址|
|[swan.chooseInvoiceTitle](http://smartprogram.baidu.com/docs/develop/api/open_chooseinvoicetitle/#swan-chooseInvoiceTitle/)	|发票抬头|
|	[swan.getRecorderManager](http://smartprogram.baidu.com/docs/develop/api/media_recorder/#swan-getRecorderManager/)|	录音功能|
|	[camera](/develop/component/media_camera/)|	摄像头|


**此类接口调用时需注意**：
* 如果用户未接受或拒绝过此权限，会弹窗询问用户，用户点击同意后方可调用接口；
* 如果用户之前已经同意授权，则不会出现弹窗，可直接调用接口；
* 如果用户之前已经拒绝，则再次调用也不会弹窗，会执行 fail 回调。请开发者兼容用户拒绝授权的场景。

## 获取用户授权设置

> 在真正需要使用授权接口时，才向用户发起授权申请，并需要在授权申请中说明清楚要使用该功能的理由。

1. 开发者可以使用 [swan.getSetting](https://smartprogram.baidu.com/docs/develop/api/open_setting/#swan-openSetting/) 获取用户的当前设置。
 
2. 打开设置界面

  * **用户打开设置界面方法**：
  可以在小程序设置界面（“右上角 -> 关于 -> 右上角 -> 权限管理”）中控制对该小程序的授权状态。

  * **开发者打开设置界面方法**：
  可以调用 [swan.openSetting](https://smartprogram.baidu.com/docs/develop/api/open_setting/#swan-openSetting/) 调起客户端智能小程序设置界面，返回用户设置的操作结果。

3. 开发者可以使用 [swan.authorize](http://smartprogram.baidu.com/docs/develop/api/open_authorize/#swan-authorize/) 提前向用户发起授权请求。

**授权有效期**
一旦用户明确同意或拒绝过授权，其授权关系会记录在后台，直到用户主动删除小程序。
 

## swan.authorize

**解释**： 提前向用户发起授权请求。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/authorize.png"  class="demo-qrcode-image" />


**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|scope  | String| 是  | -| 部分接口需要经过用户授权同意才能调用。将这些接口按使用范围分成多个 scope ，用户选择对 scope 来进行授权，当授权给一个 scope 之后，其对应的所有接口都可以直接使用，详见 scope 列表。|
|success |Function|    否  | -| 接口调用成功的回调函数|
|fail |   Function  |  否  |  -|接口调用失败的回调函数|
|complete  |  Function   | 否 |  -| 接口调用结束的回调函数（调用成功、失败都会执行）|

**scope 列表**：

|scope|	对应接口|	描述|
|---|---|---|
|scope.userInfo|[swan.getUserInfo](http://smartprogram.baidu.com/docs/develop/api/open_userinfo/#swan-getUserInfo/)|	用户信息|
|scope.userLocation|[swan.getLocation](http://smartprogram.baidu.com/docs/develop/api/location_get/#swan-getLocation/), [swan.chooseLocation](http://smartprogram.baidu.com/docs/develop/api/location_get/#swan-chooseLocation/)|地理位置|
|scope.writePhotosAlbum	|[swan.saveImageToPhotosAlbum](http://smartprogram.baidu.com/docs/develop/api/media_image/#swan-saveImageToPhotosAlbum/)|保存到相册|
|scope.address|	[swan.chooseAddress](http://smartprogram.baidu.com/docs/develop/api/open_chooseaddress/#swan-chooseAddress/)|	收货地址|
|scope.invoiceTitle|[swan.chooseInvoiceTitle](http://smartprogram.baidu.com/docs/develop/api/open_chooseinvoicetitle/#swan-chooseInvoiceTitle/)	|发票抬头|
|scope.record|	[swan.getRecorderManager](http://smartprogram.baidu.com/docs/develop/api/media_recorder/#swan-getRecorderManager/)|	录音功能|
|scope.camera|	[camera](/develop/component/media_camera/)|	摄像头|

**示例**：
<a href="swanide://fragment/b823c7245fc5009c0be0a45a060cb2891569552275612" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({

swan.authorize({
    scope: 'scope.userInfo',
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

