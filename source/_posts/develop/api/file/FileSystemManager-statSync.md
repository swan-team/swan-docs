---
title: FileSystemManager.statSync
header: develop
nav: api
sidebar: FileSystemManager-statSync
---

 

**解释**：获取文件 Stats 对象的同步接口。

**返回参数**：String path

**`path`参数说明**：临时存储文件路径。

**返回值**：Stats stats

**stats 返回值说明**

|参数名|参数类型 |说明|
|:----|:----|:----|
|mode|String|文件的类型和存取的权限，对应 POSIX stat.st_mode|
|size|Number|文件大小，单位：B，对应 POSIX stat.st_size|
|lastAccessedTime|Number|文件最近一次被存取或被执行的时间，UNIX 时间戳，对应 POSIX stat.st_atime|
|lastModifiedTime|Number|文件最后一次被修改的时间，UNIX 时间戳，对应 POSIX stat.st_mtime|
|isDirectory|Function|判断当前文件是否一个目录，返回 boolean 值|
|isFile|Function|判断当前文件是否一个普通文件，返回 boolean 值|

若接口调用失败，会抛出一个标准的`Error`对象

