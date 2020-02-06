---
title: FileSystemManager.appendFileSync
header: develop
nav: api
sidebar: FileSystemManager-appendFileSync
---


**解释**：在文件结尾追加内容的同步接口。

**方法参数**：String filePath, String/ArrayBuffer data, String encoding

**`filePath`参数说明**：文件路径。

**`data`参数说明**：要追加的文本。

**`encoding`参数说明**：指定写入文件的字符编码。

**encoding 的合法值**

|值|说明|
|:----|:----|
|ascii| |
|base64|对输入的字符串进行 base64 解码再写入|
|hex|十六进制|
|ucs2/ucs-2/utf16le/utf-16le|以小端序读取|
|utf-8/utf8||
|latin1/binary|ISO-8859-1 的别名|

若接口调用失败，会抛出一个标准的`Error`对象

