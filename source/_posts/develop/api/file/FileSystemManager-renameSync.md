---
title: FileSystemManager.renameSync
header: develop
nav: api
sidebar: FileSystemManager-renameSync
---

 
**解释**：重命名文件的同步接口，可以把文件从 oldPath 移动到 newPath。

**方法参数**：String oldPath, String newPath

**`oldPath`参数说明**：源文件/源目录路径。
**`newPath`参数说明**：目标路径。

若接口调用失败，会抛出一个标准的`Error`对象

