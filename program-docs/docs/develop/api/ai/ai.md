---
title: 接入说明
header: develop
nav: api
sidebar: ai
---

> **AI 接口目前只针对百度 APP 开放使用。**

在使用 AI 接口前，请使用有管理员权限的帐号，进行如下操作：


1. 进入<a href="https://smartprogram.baidu.com/mappconsole/main/apps">智能小程序平台</a>，进入小程序首页，在左导航栏单击“百度AI能力”。
2. 在“AI能力”页面，单击“编辑接口”。
![图片](../../../../img/api/ai/ai01.png)
3. 勾选您需要使用的接口，单击提交。
![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/ai2020.png)


 ## 错误码



###  Android

|错误码|说明|
|:--|:--|
|201|解析失败，请检查调起协议是否合法|
|202|解析失败，请检查参数是否正确|
|1001|执行失败|

###  iOS

|错误码|说明|
|:--|:--|
|202|解析失败，请检查参数是否正确 |
|1001|请求失败|

## Bug&Tip

* 目前AI能力只能在百度宿主中使用，且暂时无法用caniuse来判断可用性，建议开发者使用getSystemInfoSync获取宿主名称作为临时方案来判断，在每个AI示例中包含了这种判断方式。长期来讲，所有宿主都会支持AI能力，也应该用caniuse判断，以上为临时折中方案。