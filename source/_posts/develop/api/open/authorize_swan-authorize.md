---
title: swan.authorize
header: develop
nav: api
sidebar: authorize_swan-authorize
---
 
 

**解释**： 提前向用户发起授权请求。

 
## 方法参数 

Object object

### `object`参数说明 

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|scope  | String| 是  | | 部分接口需要经过用户授权同意才能调用。将这些接口按使用范围分成多个 scope，用户选择对 scope 来进行授权，当授权给一个 scope 之后，其对应的所有接口都可以直接使用，详见 scope 列表。|
|success |Function|    否  | | 接口调用成功的回调函数|
|fail |   Function  |  否 || 接口调用失败的回调函数|
|complete  |  Function   | 否 || 接口调用结束的回调函数（调用成功、失败都会执行）|

### scope 有效值列表 

|scope|	对应接口|	描述|
|---|---|---|
|scope.userInfo|[swan.getUserInfo](https://smartprogram.baidu.com/docs/develop/api/open/userinfo_swan-getUserInfo/)|	用户信息|
|scope.userLocation|[swan.getLocation](https://smartprogram.baidu.com/docs/develop/api/location/swan-getLocation/), [swan.chooseLocation](httpssss://smartprogram.baidu.com/docs/develop/api/location/swan-chooseLocation/)|地理位置|
|scope.writePhotosAlbum	|[swan.saveImageToPhotosAlbum](https://smartprogram.baidu.com/docs/develop/api/media/image_swan-chooseImage/#swan-saveImageToPhotosAlbum/)|保存到相册|
|scope.address|	[swan.chooseAddress](https://smartprogram.baidu.com/docs/develop/api/open/chooseaddress_swan-chooseAddress/)|	收货地址|
|scope.invoiceTitle|[swan.chooseInvoiceTitle](https://smartprogram.baidu.com/docs/develop/api/open/swan-chooseInvoiceTitle/)	|发票抬头|
|scope.record|	[swan.getRecorderManager](https://smartprogram.baidu.com/docs/develop/api/media/recorder_swan-getRecorderManager/)|	录音功能|
|scope.camera|	[camera](/develop/component/media_camera/)|	摄像头|
## 示例

<a href="swanide://fragment/cb840e582c596d3af960596f7cd45fea1575143796711" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/authorize.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  


<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/authorize.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### 代码示例 



* 在 swan 文件中

```xml
<view class="container">
    <view class="card-area">
        <button s-for="item in items" id="{{item.id}}" bind:tap="btnClick" type="primary" hover-stop-propagation="true">{{item.name}}</button>
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
        }, {
            name: '授权保存到相册',
            id: 'scope.writePhotosAlbum'
        }, {
            name: '授权获取收货地址',
            id: 'scope.address'
        }, {
            name: '授权获取发票抬头',
            id: 'scope.invoiceTitle'
        }, {
            name: '授权获取录音功能',
            id: 'scope.record'
        }, {
            name: '授权使用摄像头',
            id: 'scope.camera'
        }]
    },
    btnClick(e) {
        let scope = e.currentTarget.id;
        console.log('scope', scope);
        swan.authorize({
            scope,
            success: res => {
                swan.showToast({
                    title: '授权成功'
                });
            },
            fail: err => {
                swan.openSetting({});
                swan.showToast({
                    title: '授权失败'
                });
                console.log('authorize fail', err);
            }
        });
    }
});
```


##  错误码

> 权限相关的错误码参见[授权接口通用错误码](https://smartprogram.baidu.com/docs/develop/api/open/authorize_list/)


###  Android

|错误码|说明|
|:--|:--|
|1001|执行失败   |
|10001|内部错误|
|11001|未知错误|
|11003|用户取消授权|

###  iOS

|错误码|说明|
|:--|:--|
|202|解析失败，请检查参数是否正确      |
|10001|内部错误   |
|10002|网络请求失败|
|10004|用户拒绝(user not login)|

## Bug & Tip 

tip：授权操作为异步操作，完成前请不要多次调用。

