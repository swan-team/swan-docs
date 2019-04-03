---
title: 开放接口
header: develop
nav: api
sidebar: open
---
### 开放接口 API 列表

|API|说明|
|----|----|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open_login/#login">login</a>| 调用接口 swan.login 获取 临时登录凭证（code）。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open_login/#checkSession">checkSession</a>|通过上述接口获得的用户登录态拥有一定的时效性，用户越久未使用智能小程序，用户登录态越有可能失效；反之如果用户一直在使用智能小程序，则用户登录态一直保持有效。具体时效逻辑由百度 App 维护，对开发者透明。开发者可以调用 swan.checkSession 接口 检测当前用户登录态是否有效，登录态过期后开发者可以再调用 swan.login 获取新的用户登录态。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open_authorize/#authorize">authorize</a>|提前向用户发起授权请求。调用后会立刻弹窗询问用户是否同意授权智能小程序使用某项功能或获取用户的某些数据，但不会实际调用对应接口。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open_userinfo/#getSwanId">getSwanId</a>|获取 swanid。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open_userinfo/#getUserInfo">getUserInfo</a>|获取用户信息|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open_setting/#openSetting">openSetting</a>|调起客户端智能小程序设置界面，返回用户设置的操作结果。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open_setting/#getSetting">getSetting</a>|获取用户的当前设置|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open_share/#onShareAppMessage">onShareAppMessage</a>|在 Page 中定义 onShareAppMessage 函数，设置该页面的分享信息。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open_chooseaddress/#chooseAddress">chooseAddress</a>|调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open_payment/#requestPolymerPayment">requestPolymerPayment </a><br/>版本：swanjs 1.8.5 版本开始支持。|百度聚合收银台，聚合了主流的百度钱包、微信、支付宝、网银等多种支付方式，方便开发者一站式快速接入多种支付渠道，让百度用户能在智能小程序场景下，直接完成支付、交易闭环，提升用户支付体验的同时，提高智能小程序的订单转化率。了解更多信息，请查看 [百度电商开放平台：产品介绍](http://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_3_business/mini_program_cashier/product_intro.md)|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open_chooseinvoicetitle/#chooseInvoiceTitle">chooseInvoiceTitle</a>|选择用户的发票抬头。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open_smartprogram/#navigateToSmartProgram">navigateToSmartProgram</a>|打开另一个小程序。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open_smartprogram/#navigateBackSmartProgram">navigateBackSmartProgram</a>|返回到上一个小程序。|




