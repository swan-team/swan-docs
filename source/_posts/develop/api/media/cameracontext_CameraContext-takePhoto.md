---
title: CameraContext.takePhoto
header: develop
nav: api
sidebar: cameracontext_CameraContext-takePhoto
---



**解释**：拍照，可指定质量，成功则返回图片。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型 | 必填 | 默认值|说明|
|---- | ---- | ---- |---- |---|
|quality |String  |否  | normal|成像质量，值为high, normal, low。|
|success| Function |   否  | |接口调用成功的回调函数，res = { tempImagePath }。|
|fail  |  Function  |  否 |  |接口调用失败的回调函数|
|complete |   Function  |  否  | |接口调用结束的回调函数（调用成功、失败都会执行）|

