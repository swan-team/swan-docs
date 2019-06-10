---
title: 授权
header: develop
nav: api
sidebar: open_authorize
---
## swan.authorize

**解释**： 提前向用户发起授权请求。调用后会立刻弹出窗口，询问用户是否同意授权智能小程序使用某项功能或获取用户的某些数据，但不会实际调用对应接口。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功。如果用户之前已经拒绝，则再次调用也不会弹窗，会执行 fail 回调，此时，可以通过 [openSetting](https://smartprogram.baidu.com/docs/develop/api/open_setting/#swan-openSetting/)  引导用户打开授权。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|scope  | String| 是  | -| 需要获取权限的 scope，详见 scope 列表。|
|success |Function|    否  | -| 接口调用成功的回调函数|
|fail |   Function  |  否  |  -|接口调用失败的回调函数|
|complete  |  Function   | 否 |  -| 接口调用结束的回调函数（调用成功、失败都会执行）|

**scope 列表**

|scope  | 对应接口  |  描述|
|---- | ---- | ---- |
|scope.userInfo | swan.getUserInfo | 用户信息 |
|scope.userLocation | swan.getLocation, swan.chooseLocation  | 地理位置 |
|scope.writePhotosAlbum  |swan.saveImageToPhotosAlbum  | 保存到相册 |
|scope.address | swan.chooseAddress | 收货地址 |
|scope.invoiceTitle | swan.chooseInvoiceTitle | 发票抬头 |
|scope.record | swan.getRecorderManager | 录音功能 |
|scope.camera  | `<camera/>` | 摄像头|

<!-- **success返回参数说明**：

|参数名  |类型 | 说明|
|---- | ---- | ---- |
|errMsg | String | 调用结果| -->

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
