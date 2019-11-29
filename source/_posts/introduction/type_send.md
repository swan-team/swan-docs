---
title: 消息推送
header: introduction
nav: book
sidebar: type_send
---



### 简要原理

 - 通过配置消息推送及调用发送客服消息接口进行消息上下行联通。

 - 当用户给小程序客服发消息，百度的服务器会将消息的数据包（JSON或者XML格式）POST到开发者填写的URL。开发者收到请求后可以调用接口进行异步回复。

 - 适用于使用自研IM工具或第三方IM厂商支持消息转发情况，可以通过配置服务器URL，将用户消息转发至相应的服务器。

### 消息推送配置流程

使用超级管理员或管理员权限登录开发者后台，点击“客服管理—消息推送-去配置”，按照页面提示进行配置。

![图片](https://smartprogram.baidu.com/docs/img/introduction/contact/3.jpg)

### **接口调用** 

小程序[客服消息](http://smartprogram.baidu.com/docs/develop/serverapi/contact_api/)API文档。





