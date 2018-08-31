---
title: 设置
header: develop
nav: api
sidebar: open_setting
---
openSetting
---
**解释：**调起客户端智能小程序设置界面，返回用户设置的操作结果。

**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success |Function  |  否 |  接口调用成功的回调函数|
|fail  |  Function |   否 |  接口调用失败的回调函数|
|complete |   Function |   否  | 接口调用结束的回调函数（调用成功、失败都会执行）|


**success返回参数说明：**

|参数  |类型|说明 |
|---- | ---- |---- |
|authSetting|Object|用户授权结果，其中 key 为 scope 值，value 为 Bool 值，表示用户是否允许授权|


****示例：****

```js
swan.openSetting({
    success: function (res) {
        console.log(res.authSetting['scope.userInfo']);
        console.log(res.authSetting['scope.userLocation']);
    }
});
```

getSetting
---
**解释：**获取用户的当前设置

**参数：**Object
**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success |Function  |  否 |  接口调用成功的回调函数|
|fail  |  Function |   否 |  接口调用失败的回调函数|
|complete |   Function |   否  | 接口调用结束的回调函数（调用成功、失败都会执行）|


**success返回参数说明：**

|参数  |类型|说明 |
|---- | ---- |---- |
|authSetting|Object|用户授权结果，其中 key 为 scope 值，value 为 Bool 值，表示用户是否允许授权|


****示例：****

```js
swan.getSetting({
    success: function (res) {
        console.log(res.authSetting['scope.userInfo']);
        console.log(res.authSetting['scope.userLocation']);
    }
});
```
