---
title: FileSystemManager.saveFileSync
header: develop
nav: api
sidebar: FileSystemManager-saveFileSync
---

 
**解释**：保存临时文件到本地的同步接口。此接口会移动临时文件，因此调用成功后, tempFilePath 将不可用。

**方法参数**：String tempFilePath, String filePath

**`tempFilePath`参数说明**：临时存储文件路径。
**`filePath`参数说明**：要存储的文件路径。

**同步返回参数说明**：

|参数|类型|说明|
|:----|:----|:----|
|savedFilePath|String|存储后的文件路径|

若接口调用失败，会抛出一个标准的`Error`对象

