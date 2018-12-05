---
title: 登录
layout: gamedoc
topic: openApi
categoryName: api
---

### swan.checkSession()

通过上述接口获得的用户登录态拥有一定的时效性，用户越久未使用小游戏，用户登录态越有可能失效；反之如果用户一直在使用小游戏，则用户登录态一直保持有效。具体时效逻辑由百度 App 维护，对开发者透明。开发者可以调用 `swan.checkSession()` 接口检测当前用户登录态是否有效，登录态过期后开发者可以再调用 [`swan.login()`](#swan-login) 获取新的用户登录态。

```js
swan.checkSession(opts)
```

**参数值：**

|属性|类型|是否必填|描述|
|-|-|-|-|-|
|success|function|否|成功回调函数|
|fail|function|否|失败回调函数|
|complete|function|否|接口调用完成的回调函数（接口成功、失败都会执行）|

**示例：**

```js
swan.checkSession({
    success: res => {
        console.log('登录态有效');
    },
    fail: () => {
        console.log('登录态无效');
    }
});
```

### swan.login()

调用接口获取登录凭证（code）进而换取用户登录态信息，包括用户的唯一标识（openid）及本次登录的 会话密钥（session_key）等。用户数据的加解密通讯需要依赖会话密钥完成。

```js
swan.login(opts)
```

**参数值：**

|属性|类型|是否必填|描述|
|-|-|-|-|-|
|success|function|否|成功回调函数|
|fail|function|否|失败回调函数|
|complete|function|否|接口调用完成的回调函数（接口成功、失败都会执行）|

`success` 回调函数：

形如 `function (res) {...}`，其中：

|属性|类型|描述|
|-|-|-|
|code|string|用户登录凭证（有效期五分钟）。开发者需要在开发者服务器后台调用 api，使用 code 换取 session_key 等信息|

**示例：**

```js
swan.login({
    success: res => {
        console.log('登录成功', res.code);
    },
    fail: () => {
        console.log('登录失败');
    }
});
```