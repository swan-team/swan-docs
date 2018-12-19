
---
title: 登录授权流程说明
layout: gamedoc
categoryName: tutorials
topic: open_api
priority: 04-02
---


智能小程序可以通过百度官方提供的登录能力方便地获取百度提供的用户身份标识，快速建立智能小程序内的用户体系。

### 授权流程
1. 调用 [`swan.login()`](/game/api/openApi/login/#swan-login) 获取 **临时登录凭证 code** ，并回传到开发者服务器；
2. 开发者服务器以 code 换取 **session_key**；
3. 调用 [`getUserInfo()`](/game/api/openApi/openData/#swan-getUserInfo) 获取用户信息。

**使用百度授权前准备**：
您需要创建一个智能小程序以获取 client\_id（AppKey）和 client\_secret（AppSecret），以上两者均从智能小程序开发者后台查看。

### 流程示意图
**概念介绍**：
* OAuth 2.0（开放授权）：一个开放登录授权标准。用户授权后，第三方智能小程序无需获取用户的用户名和密码就可以访问该用户。
* Session Key：用户对智能小程序的授权会话的密钥。用户授权后，开发者可以通过百度开放平台获取授权会话的 Session Key，此后便可在智能小程序中获取用户信息。
* Code：用户授权的标识。在用户完成对应用的授权后，会生成一个很短时间（十分钟）内有效的授权标识，开发者通过服务端请求，将 code 以及智能小程序的 client\_id 和 secret\_key 传到开放平台接口，可以获取到 SessionKey。

以下是智能小程序使用 OAuth 2.0 进行授权及获取用户信息的示意图：
![](/images/tutorial/oauth.png)

1. 智能小程序在 App 内部运行时使用 [`swan.login()`](/game/api/openApi/login/#swan-login) 接口获取 Authorization Code;
2. 通过 Authorization Code 获取 [`Session Key`](/game/api/openApi/login/#Session-Key);
3. 调用 [`getUserInfo()`](/game/api/openApi/openData/#swan-getUserInfo) 获取用户信息;
4. 当用户完成了授权，且授权会话仍处于有效期时，智能小程序不需要每次都进行前两步，而是可以直接进行第三步获取用户信息。
要判断当前用户的授权会话是否仍处于有效期，可调用 [`checkSession()`](/game/api/openApi/login/#swan-checkSession) 方法进行判断。