---
title: FileSystemManager.rmdir
header: develop
nav: api
sidebar: FileSystemManager-rmdir
---



**解释**：删除目录。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型|必填|默认值|说明|
|:----|:----|:----|:----|:----|
|dirPath|String|是|-|要删除的目录路径|
|recursive|Boolean|否|false|是否递归删除目录。如果为 true，则删除该目录和该目录下的所有子目录以及文件。|
|success|Function|否|-|接口调用成功的回调函数|
|fail|Function|否|-|接口调用失败的回调函数|
|complete|Function|否|-|接口调用结束的回调函数（调用成功、失败都会执行）|

