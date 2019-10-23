---
title: LivePlayerContext.requestFullScreen
header: develop
nav: api
sidebar: liveplayercontext_LivePlayerContext-requestFullScreen
---


**解释**：进入全屏

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填  |默认值|说明|
|---- | ---- | ---- |---- |--|
|direction |Number  |  是  | |有效值为 0（正常竖向）, 90（屏幕逆时针90度）, -90（屏幕顺时针90度）。|
|success   |Function  |  否  | |接口调用成功的回调函数。|
|fail  |Function  |  否 |  |接口调用失败的回调函数。|
|complete   | Function   | 否 |  |接口调用结束的回调函数（调用成功、失败都会执行）。|

