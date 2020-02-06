---
title: FileSystemManager.removeSavedFile
header: develop
nav: api
sidebar: FileSystemManager-removeSavedFile
---

 

**解释**：删除该小程序下已保存的本地用户文件。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型|必填|默认值|说明|
|:----|:----|:----|:----|:----|
|filePath|String|是|-|需要删除的文件路径|
|success|Function|否|-|接口调用成功的回调函数|
|fail|Function|否|-|接口调用失败的回调函数|
|complete|Function|否|-|接口调用结束的回调函数（调用成功、失败都会执行）|

