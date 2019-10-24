---
title: CameraContext.stopRecord
header: develop
nav: api
sidebar: cameracontext_CameraContext-stopRecord
---

 

**解释**：结束录像，成功则返回封面与视频。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型 | 必填 | 默认值|说明|
|---- | ---- | ---- |---- |---|
|success |Function   | 否  || 接口调用成功的回调函数 ，res = { tempThumbPath, tempVideoPath }。|
|fail |   Function |   否  | |接口调用失败的回调函数|
|complete   | Function   | 否  || 接口调用结束的回调函数（调用成功、失败都会执行）|

