---
title: ARCameraContext.stopRecord
header: develop
nav: api
sidebar: arcameracontext_ARCameraContext-stopRecord
---


 

**解释**：结束录像，成功则返回视频。

**方法参数**：Object object

**`object`参数说明**：

|参数 | 类型  |必填  |默认值|说明|
|---- | ---- | ---- |---|---- |
|success |Function   | 否  | |接口调用成功的回调函数|
|fail |   Function |   否  | |接口调用失败的回调函数|
|complete   | Function   | 否  || 接口调用结束的回调函数（调用成功、失败都会执行）|



**success 返回参数说明**：


|参数名 |类型  |说明|
|---- | ---- | ---- |
|tempVideoPath  | String | 视频的临时路径 |

**代码示例**：

参见[ARCameraContext.startRecord](https://smartprogram.baidu.com/docs/develop/api/media/arcameracontext_ARCameraContext-startRecord/)示例内容。