---
title: FileSystemManager.readFile
header: develop
nav: api
sidebar: FileSystemManager-readFile
---



**解释**：读取本地文件内容。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型|必填|默认值|说明|
|:----|:----|:----|:----|:----|
|filePath|String|是|-|文件/目录路径。“本地用户文件”须以 swan.env.USER_DATA_PATH 开头（如 'swan.env.USER_DATA_PATH' + '/demo.txt'），否则认为是“代码包文件”（如 'asset/bg.jpg'）。不支持相对路径。|
|encoding|String|否|-|指定读文件的字符编码。如果不指定，则读出 ArrayBuffer；如果指定，则读出 string。|
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

**success 返回参数说明**：

|参数|类型|说明|
|:----|:----|:----|
|data|string/ArrayBuffer|读取结果|

