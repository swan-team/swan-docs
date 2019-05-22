---
title: 授权
layout: gamedoc
topic: openApi
categoryName: api
---


### swan.authorize()

提前向用户发起授权请求。调用后会立刻弹窗询问用户是否同意授权小游戏使用某项功能或获取用户的某些数据，但不会实际调用对应接口。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功。

```js
swan.authorize(opts)
```

**参数值**：

|属性|类型|是否必填|描述|
|-|-|-|-|-|-|
|scope|string|是|需要获取权限的 scope，详见 scope 列表|
|success|function|否|成功回调函数|
|fail|function|否|失败回调函数|
|complete|function|否|接口调用完成的回调函数（接口成功、失败都会执行）|

scope 列表：

|scope|对应接口|描述|
|-|-|-|
|scope.userInfo|swan.getUserInfo|用户信息|
|scope.userLocation|swan.getLocation, swan.chooseLocation|地理位置|
|scope.writePhotosAlbum|swan.saveImageToPhotosAlbum|保存到相册|
|scope.address|swan.chooseAddress|收货地址|
|scope.invoiceTitle|swan.chooseInvoiceTitle|发票抬头|
|scope.record|swan.getRecorderManager|录音功能|
|scope.camera|<camera/>|摄像头|

**示例**：

```js
swan.authorize({
    scope: 'scope.userLocation',
    success: res => {
        console.log('授权请求成功，可进行地理位置获取操作', res);
    }
});
```