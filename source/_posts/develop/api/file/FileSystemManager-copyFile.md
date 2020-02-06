---
title: FileSystemManager.copyFile
header: develop
nav: api
sidebar: FileSystemManager-copyFile
---



**解释**：用于实现文件拷贝。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型|必填|默认值|说明|
|:----|:----|:----|:----|:----|
|srcPath|String|是|-|要被拷贝的源文件名称|
|destPath|String|是|-|拷贝操作的目标文件名|
|success|Function|否|-|接口调用成功的回调函数|
|fail|Function|否|-|接口调用失败的回调函数|
|complete|Function|否|-|接口调用结束的回调函数（调用成功、失败都会执行）|

