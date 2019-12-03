---
title: 授权流程说明
header: develop
nav: api
sidebar:  log
---


智能小程序可以通过百度官方提供的登录能力方便地获取百度提供的用户身份标识，快速建立智能小程序内的用户体系。

 
1、 调用 swan.login() 获取 **临时登录凭证code**，并回传到开发者服务器；
2、 开发者服务器以 code 换取 **session_key**；
3、 调用 swan.getUserInfo() 获取用户信息。

**使用百度授权前准备**：
您需要创建一个智能小程序以获取client\_id（AppKey）和client\_secret（AppSecret），以上两者均从智能小程序开发者后台查看。

### 流程示意图
**概念介绍**：
* OAuth 2.0（开放授权）：一个开放登录授权标准。用户授权后，第三方智能小程序无需获取用户的用户名和密码就可以访问该用户。
* Session Key：用户对智能小程序的授权会话的密钥。用户授权后，开发者可以通过百度开放平台获取授权会话的Session Key，此后便可在智能小程序中获取用户信息。为了应用自身的数据安全，开发者服务器不应该把会话密钥下发到小程序，也不应该对外提供这个密钥。
* Code：用户授权的标识。在用户完成对应用的授权后，会生成一个很短时间（十分钟）内有效的授权标识，开发者通过服务端请求，将code以及智能小程序的client\_id和secret\_key传到开放平台接口，可以获取到SessionKey。

以下是智能小程序使用OAuth 2.0进行授权及获取用户信息的示意图：

![图片](../../../../img/oauth.png)

1、 智能小程序在App内部运行时使用<a href="http://smartprogram.baidu.com/docs/develop/api/open_log/#login/">`swan.login()`</a>接口获取Authorization Code;
2、 通过 Authorization Code 获取 <a href="http://smartprogram.baidu.com/docs/develop/api/open/log_Session-Key/">Session Key</a>;
3、 调用<a href="http://smartprogram.baidu.com/docs/develop/api/open_userinfo/#getUserInfo/">getUserInfo</a>获取用户信息;
4、 当用户完成了授权，且授权会话仍处于有效期时，智能小程序不需要每次都进行前两步，而是可以直接进行第三步获取用户信息。
要判断当前用户的授权会话是否仍处于有效期，可调用<a href="http://smartprogram.baidu.com/docs/develop/api/open_log/#checkSession/">`checkSession()`</a>方法进行判断，详见[下载小程序支付demo](https://github.com/baidu-smart-app)。

### 会话密钥Session Key有效性说明
开发者基于Session Key 进行信息解密过程中，如果突然开始出现解密失败情况，请关注下面几个与 Session Key有关的注意事项。

1、 Session key是具有时效性的，过期的Session Key将无法使用。开发者在 Session Key 失效时，需要通过重新执行登录流程获取有效的Session Key。
2、 使用<a href="http://smartprogram.baidu.com/docs/develop/api/open_log/#checkSession/">`checkSession()`</a>可以校验 Session Key 是否有效，从而避免小程序反复执行登录流程，参考<a href="http://smartprogram.baidu.com/docs /develop/api/open/log/">授权流程图</a>中checkSession()使用。
3、 智能小程序不会把 Session Key 的有效期告知开发者。我们会根据用户使用小程序的行为对 Session Key 进行续期。用户越频繁使用小程序， Session key 有效期越长。

