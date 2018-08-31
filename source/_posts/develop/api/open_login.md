---
title: 登录
header: develop
nav: api
sidebar: open_login
---


智能小程序可以通过百度官方提供的登录能力方便地获取百度提供的用户身份标识，快速建立智能小程序内的用户体系。

**流程说明**
1、调用 swan.login() 获取 **临时登录凭证code** ，并回传到开发者服务器。
2、开发者服务器以 code 换取 **session_key**。
3、调用 swan.getUserInfo() 获取用户信息。
4、[点击查看详细流程](https://smartprogram.baidu.com/docs/develop/server/oauth/)。

### login

**解释：** 调用接口 swan.login 获取 **临时登录凭证（code）**

**参数：** Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success |Function  |  否 |  接口调用成功的回调函数|
|fail  |  Function |   否 |  接口调用失败的回调函数|
|complete |   Function |   否  | 接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明：**

|参数  |类型|说明 |
|---- | ---- |---- |
|code|String|用户登录凭证（有效期五分钟）。开发者需要在开发者服务器后台调用 api，使用 code 换取 session_key 等信息|

**示例：**
```js
swan.login({
    success: function (res) {
        swan.request({
            url: 'https://xxx/xxx', // 开发者服务器地址
            data: {
                code: res.code
            }
        });
    },
    fail: function (err) {
        console.log('login fail', err);
    }
});
```

#### 登录凭证校验

临时登录凭证校验接口是一个 HTTPS 接口，开发者服务器使用 **临时登录凭证(code)** 获取 session_key。
**注意：**

1、会话密钥 session_key 是对用户数据进行加密签名的密钥。为了应用自身的数据安全，开发者服务器**不应该把会话密钥下发到智能小程序，也不应该对外提供这个密钥**。
2、临时登录凭证 code 只能使用一次。

**接口地址：**

`https://openapi.baidu.com/nalogin/getSessionKeyByCode`

**请求参数**

|参数|说明|
| ---- | ---- |
|client_id| 开放平台申请的 App Key|
|sk| 开放平台申请的 App Secret|
|code | swan.login 返回的临时登录凭证|

**Bug & Tip**
1、tip: 调用 login 会引起登录态的刷新，之前的 session_key 可能会失效。

### checkSession


**解释：**通过上述接口获得的用户登录态拥有一定的时效性，用户越久未使用智能小程序，用户登录态越有可能失效；反之如果用户一直在使用智能小程序，则用户登录态一直保持有效。具体时效逻辑由百度 App 维护，对开发者透明。开发者可以调用 swan.checkSession 接口 **检测当前用户登录态是否有效**，登录态过期后开发者可以再调用 swan.login 获取新的用户登录态。

**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success |Function  |  否 |  接口调用成功的回调函数|
|fail  |  Function |   否 |  接口调用失败的回调函数|
|complete |   Function |   否  | 接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

```js
swan.checkSession({
    success: function (res) {
        console.log('登录态有效');
    },
    fail: function (err) {
        console.log('登录态无效');
    }
});
```

#### 用户数据的签名验证和加解密


智能小程序可以通过各种前端接口获取百度提供的开放数据。考虑到开发者服务器也需要获取这些开放数据，百度会对这些数据做签名和加密处理。开发者后台拿到开放数据后可以对数据进行校验签名和解密，来保证数据不被篡改。

**加密数据解密算法**

接口如果涉及敏感数据，接口的明文内容将不包含这些敏感数据。开发者如需要获取敏感数据，需要对接口返回的加密数据（data）进行对称解密。

解密过程：开发者智能小程序（通过 swan.request）将加密数据发送至自身 Server 进行解密后返回智能小程序。

**解密算法如下：**

1、对称解密使用的算法为 AES-128-CBC，数据采用PKCS#7填充。
2、对称解密的目标密文为 Base64_Decode(data)。
3、对称解密秘钥 AESKey = Base64_Decode(session_key), AESKey 是24字节。
4、对称解密算法初始向量 为Base64_Decode(iv)，其中iv由数据接口返回。
