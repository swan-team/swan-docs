---
title: FileSystemManager.rmdirSync
header: develop
nav: api
sidebar: FileSystemManager-rmdirSync
---


**解释**：删除目录的同步接口。

**方法参数**：String dirPath, Boolean recursive

**`dirPath`参数说明**：要删除的目录路径。

**`recursive`参数说明**：是否递归删除目录。如果为 true，则删除该目录和该目录下的所有子目录以及文件。

若接口调用失败，会抛出一个标准的`Error`对象

