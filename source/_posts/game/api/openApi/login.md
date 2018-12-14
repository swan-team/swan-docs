---
title: 登录
layout: gamedoc
topic: openApi
categoryName: api
---

### swan.login()

调用接口获取登录凭证（code）进而换取用户登录态信息，包括用户的唯一标识（openid）及本次登录的 会话密钥（session_key）等。用户数据的加解密通讯需要依赖会话密钥完成。

```js
swan.login(opts)
```
>更多登录授权的流程参见： [登录授权流程说明](/tutorials/open_api/open-log/)


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

**示例 1：**
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

**示例 2：**

**注意**：由于百度和微信的登录体系差异，建议对需要登录之后才可以玩的一些小游戏，采用**示例 2** 的编写方式强制登录。

```js
function baiduLogin() {
    swan.login({
        success: res => {
            // 登录成功后的业务逻辑
        },
        fail: res => {
            swan.showModal({
                title: "登录失败",
                content: "是否重新登录？",
                cancelText: "退出游戏",
                success: res => {
                    if (res.confirm) {
                        console.log("点击了确定");
                        baiduLogin();
                    }
                    else if (res.cancel) {
                        console.log("点击了取消");
                        swan.exit();
                    }
                }
            })
        }
    })
}
baiduLogin();
```


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

### Session Key

小游戏在其服务端中发送 POST 请求到百度 OAuth2.0 授权服务地址，并带上对应的参数，便可获取到 Session Key。

>更多登录授权的流程参见： [登录授权流程说明](/tutorials/open_api/open-log/)

**获取 Session Key 的URL地址：**
```js
 https://openapi.baidu.com/nalogin/getSessionKeyByCode
```
**获取Session Key需要的参数：**

| 属性 | 是否必填 | 描述 |
| ----- | ------ | --- |
| code | 是 | 通过上面第一步所获得的 Authorization Code |
| client_id | 是 | 小游戏的 App Key |
| sk | 是 | 小游戏的 App Secret |

若参数无误，服务器将返回一段 JSON 文本，包含以下数据：

| 属性 | 描述 |
| ------| --- |
| openid | 用户身份标识 |
| session_key | 用户的 Session Key |

若请求错误，服务器将返回一段 JSON 文本，包含以下参数：

| 属性 | 描述 |
| -| - |
| error | 错误码；关于错误码的详细信息请参考"错误码列表"一节。|
| error_description |错误描述信息，用来帮助理解和解决发生的错误。|

**请求示例：**

```
# curl -d "code=xxx&client_id=xxx&sk=xxx" https://openapi.baidu.com/nalogin/getSessionKeyByCode
{
    "openid": "ABCDEFG123",
    "session_key": "xxxxxx"
}
```


