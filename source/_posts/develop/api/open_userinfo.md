---
title: 用户信息
header: develop
nav: api
sidebar: open_userinfo
---


### swanid 机制说明

swanid 是用户使用智能小程序时的标识符，开发者可以通过 swanid 来区分用户的唯一性。

1、用户在非登陆情况下使用智能小程序时，在同一台设备上使用同一个开发者所开发的不同智能小程序，得到的是相同的 swanid。
2、用户在登陆情况下使用智能小程序时，在多台不同设备上使用同一个开发者所开发的不同智能小程序，得到的是相同的 swanid。
3、用户使用同一台设备时，在非登陆情况下与登陆情况下使用同一个智能小程序，得到的 swanid 是不同的。

### getSwanId

**解释：**获取 swanid。

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
|errno  | String  |errno|
|data  | Object  |{swanid}|
|errmsg  | String  |errmsg|

**示例：**

```js
swan.getSwanId({
    success: function (res) {
        console.log(res.data.swanid);
    }
});
```

### getUserInfo

**解释：**获取用户信息

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
|userInfo  | Object  |用户信息对象|
|data  | String  |包括敏感数据在内的完整用户信息的加密数据，加解密逻辑参考[用户数据的签名验证和加解密](https://smartprogram.baidu.com/docs/develop/api/open/#%E7%94%A8%E6%88%B7%E6%95%B0%E6%8D%AE%E7%9A%84%E7%AD%BE%E5%90%8D%E9%AA%8C%E8%AF%81%E5%92%8C%E5%8A%A0%E8%A7%A3%E5%AF%86)|
|iv | String | 加密算法的初始向量|


**userInfo参数说明：**

|参数  |类型|说明 |
|---- | ---- |---- |
|nickName  | String  |用户名|
|avatarUrl  | String  |用户头像|
|gender | String | 性别:值为1时是男性，值为2时是女性。|

**示例：**
```js
swan.getUserInfo({
    success: function (res) {
        console.log('用户名', res.userInfo.nickName);
    }
});
```
