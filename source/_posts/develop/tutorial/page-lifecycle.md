---
title: 生命周期
header: develop
nav: framework
sidebar: page-lifecycle
---
生命周期可帮助您更好的了解页面工作原理：

 ![图片](../../../img/framwork/framwork-01.png)


 1、**notify**:当渲染线程初始化后，向APP服务线程派发消息，请求获取初始化渲染数据；
 2、**sendInitData**:APP服务线程将初始化渲染数据派发给渲染线程；
 3、**notify**:渲染线程渲染达到Ready状态后，派发消息通知APP服务线程；
 4、**SendData**:APP服务线程触发onReady事件，向渲染线程传送数据；

 **说明**
 每次前台切后台会触发Page的onHide生命周期函数，后台切前台触发Page的onShow。
