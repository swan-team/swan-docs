---
title: FileSystemManager.readdirSync
header: develop
nav: api
sidebar: FileSystemManager-readdirSync
---

 
**解释**：读取本地指定路径下的目录内文件列表的同步接口。

**方法参数**：String dirPath

**`dirPath`参数说明**：想要读取的文件所在的目录。

**同步返回参数说明**：

|参数 |类型|说明|
|:----|:----|:----|
|files|Array|指定目录下的文件列表|
|files[].fileItem|String|文件列表里的文件项，存储着路径|

若接口调用失败，会抛出一个标准的`Error`对象

