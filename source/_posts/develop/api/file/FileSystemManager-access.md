---
title: FileSystemManager.access
header: develop
nav: api
sidebar: FileSystemManager-access
---

**解释**：判断文件/目录是否存在。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型|必填|默认值|说明|
|:----|:----|:----|:----|:----|
|path|String|是|-|文件/目录路径|
|success|Function|否|-|接口调用成功的回调函数|
|fail|Function|否|-|接口调用失败的回调函数|
|complete|Function|否|-|接口调用结束的回调函数（调用成功、失败都会执行）|

