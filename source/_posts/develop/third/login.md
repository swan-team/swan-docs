---
title: 授权小程序登录
header: develop
nav: third
sidebar: login
---

    
## 登录接口

第三方平台代替小程序实现登录功能请参考<a href="https://smartprogram.baidu.com/docs/develop/api/open_log/#swan-login"> 小程序登陆 </a> 。除了下述部分以外，其他接口的功能与小程序实现方式一致。

code换取session_key

第三方平台开发者的服务器使用登录凭证 code 以及授权小程序 access_token 获取 session_key 和 openid。其中session_key 是对用户数据进行加密签名的密钥。

**接口说明**:

```
GET https://openapi.baidu.com/rest/2.0/oauth/getsessionkeybycode

```

**请求参数**：


参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| -----
access\_token|string | 是 | 授权小程序的接口调用凭据 
code | string | 是| 调用swan.login后获取的code
grant_type | string | 是| 授权类型，固定字符串："authorization_code"

   

**响应数据**:

```
{
    openid: "l214zFqNrEuIEnp6m7Y01sw8yj",
    session_key: "981ce8b151c0599acf7ad1a673c6ff5e"
}
```
#### 错误情况下:
字段名   | 类型 | 描述
------ | -----| ----
error | string | 错误码；关于错误码的详细信息请参考 http://developer.baidu.com/wiki/index.php?title=docs/oauth/error
error\_description | string | 错误描述信息，用来帮助理解和解决发生的错误