---
title: FileSystemManager.readdir
header: develop
nav: api
sidebar: FileSystemManager-readdir
---
   

**解释**：读取本地指定路径下的目录内文件列表。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型|必填|默认值|说明|
|:----|:----|:----|:----|:----|
|dirPath|String|是|-|想要读取的文件所在的目录|
|success|Function|否|-|接口调用成功的回调函数|
|fail|Function|否|-|接口调用失败的回调函数|
|complete|Function|否|-|接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明**：

|参数|类型|说明|
|:----|:----|:----|
|files|Array|指定目录下的文件列表|
|files[].fileItem|String|文件列表里的文件项，存储着路径|

