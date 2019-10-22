---
title: ARCameraContext.takePhoto
header: develop
nav: api
sidebar: arcameracontext_ARCameraContext-takePhoto
---



 

**解释**：拍照，成功则返回图片。


**方法参数**：Object object

**`object`参数说明**：

|参数  |类型 | 必填 | 默认值|说明|
|---- | ---- | ---- |---- |---|
|success| Function |   否  | |接口调用成功的回调函数，res = { tempImagePath }|
|fail  |  Function  |  否 |  |接口调用失败的回调函数|
|complete |   Function  |  否  | |接口调用结束的回调函数（调用成功、失败都会执行）|

