---
title: FileSystemManager.writeFileSync
header: develop
nav: api
sidebar: FileSystemManager-writeFileSync
---


**解释**：写文件的同步接口。

**方法参数**：String filePath, String/ArrayBuffer data, String encoding

**`filePath`参数说明**：文件/目录路径。须以 swan.env.USER_DATA_PATH 开头（如 'swan.env.USER_DATA_PATH' + '/demo.txt'）。

**`data`参数说明**：要写入的文本。

**`encoding`参数说明**：指定写入文件的字符编码，默认为 utf8。

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