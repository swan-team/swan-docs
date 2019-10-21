---
title: ARCameraContext.startRecord
header: develop
nav: api
sidebar:  arcameracontext_ARCameraContext-startRecord
---



 
**解释**：开始录像

**方法参数**：Object object

**`object`参数说明**：

|参数 | 类型 | 必填 |默认值| 说明|
|---- | ---- | ---- |---- |---|
|progress|Function|否||录制进度更新的回调函数，res = { progress }|
|timeout|Function|否||超过 10s 或页面 onHide 时会结束录像，res = { tempVideoPath }|
|success |Function  |  否 | | 接口调用成功的回调函数|
|fail  |  Function |   否  | |接口调用失败的回调函数|
|complete   | Function |   否  | |接口调用结束的回调函数（调用成功、失败都会执行）|

