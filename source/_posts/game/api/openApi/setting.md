---
title: 设置
layout: gamedoc
topic: openApi
categoryName: api
---

### swan.getSetting()

获取用户在该小游戏中已授权过的权限。

```js
swan.getSetting(opts)
```

**参数值**：

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|opts|Object|{}|是|调用该方法时，要传入的对象参数|
|opts.success|function| |否|成功回调函数|
|opts.fail|function| |否|失败回调函数|
|opts.complete|function| |否|接口调用完成的回调函数（接口成功、失败都会执行）|

`success` 回调函数：

形如 `function (res) {...}`, 其中:

|属性|类型|默认值|描述|
|-|-|-|-|
|res| Object | | success 回调返回对象|
|res.authSetting| [Object.<[AuthSetting](#AuthSetting)>] |{}|用户已经授权过的权限|
|res.errMsg| string | |调用结果|

**示例**：

```js
  swan.authorize({
    scope: 'scope.userLocation',
    success: (res) => {
      swan.getSetting({
        success: (res) => {
          console.log(res);
        },
        fail: (err) => {
          console.log(err);
        },
        complete: (res) => {}
      })
    }
  })
```

### swan.openSetting()

调起客户端智能小程序设置界面，返回用户设置的操作结果。

```js
swan.openSetting(opts)
```

**参数值**：

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|opts|Object|{}|是|调用该方法时，要传入的对象参数|
|opts.success|function| |否|成功回调函数|
|opts.fail|function| |否|失败回调函数|
|opts.complete|function| |否|接口调用完成的回调函数（接口成功、失败都会执行）|

`success` 回调函数：

形如 `function (res) {...}`, 其中:

|属性|类型|默认值|描述|
|-|-|-|-|
|res| Object | | success 回调返回对象|
|res.authSetting| [Object.<[AuthSetting](#AuthSetting)>] |{}|用户授权结果，其中 key 为 scope 值，value 为 Bool 值，表示用户是否允许授权。|

**示例**：

```js
    swan.openSetting({
        success: function (res) {
            console.log(res.authSetting['scope.userInfo']);
            console.log(res.authSetting['scope.userLocation']);
        }
    });
```

### AuthSetting

用户已经授权过的权限

|属性名|类型|对应调用的接口|描述|
|-|-|-|-|
|scope.userInfo|boolean|swan.getUserInfo|用户信息授权|
|scope.userLocation|boolean|swan.getLocation, swan.chooseLocation|地理位置授权|
|scope.writePhotosAlbum|boolean|swan.saveImageToPhotosAlbum|保存到相册授权|
|scope.address|boolean|swan.chooseAddress|收货地址授权|
|scope.invoiceTitle|boolean|swan.chooseInvoiceTitle|发票抬头授权|
|scope.record|boolean|swan.getRecorderManager|录音功能授权|
|scope.camera|boolean|<`camera/`>|摄像头授权|
