---
title: FileSystemManager.writeFile
header: develop
nav: api
sidebar: FileSystemManager-writeFile
---

 

**解释**：写文件。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型|必填|默认值|说明|
|:----|:----|:----|:----|:----|
|filePath|String|是|-|文件/目录路径。须以 swan.env.USER_DATA_PATH 开头（如 'swan.env.USER_DATA_PATH' + '/demo.txt'）|
|data|String/ArrayBuffer|是|-|要写入的文本|
|encoding|String|否|utf8|指定写入文件的字符编码。|
|success|Function|否|-|接口调用成功的回调函数|
|fail|Function|否|-|接口调用失败的回调函数|
|complete|Function|否|-|接口调用结束的回调函数（调用成功、失败都会执行）|

**encoding 的合法值**

|值|说明|
|:----|:----|
|ascii| |
|base64|对输入的字符串进行 base64 解码再写入|
|hex|十六进制|
|ucs2/ucs-2/utf16le/utf-16le|以小端序读取|
|utf-8/utf8||
|latin1/binary|ISO-8859-1 的别名|

