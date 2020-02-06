---
title: FileSystemManager.saveFile
header: develop
nav: api
sidebar: FileSystemManager-saveFile
---

 

**解释**：保存临时文件到本地。此接口会移动临时文件，因此调用成功后, tempFilePath 将不可用。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型|必填|默认值|说明|
|:----|:----|:----|:----|:----|
|tempFilePath|String|是|-|临时存储文件路径|
|filePath|String|否|-|要存储的文件路径|
|success|Function|否|-|接口调用成功的回调函数|
|fail|Function|否|-|接口调用失败的回调函数|
|complete|Function|否|-|接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明**：

|参数|类型|说明|
|:----|:----|:----|
|savedFilePath|String|存储后的文件路径|

