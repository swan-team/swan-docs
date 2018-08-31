---
title: 打开新的文件页面
header: develop
nav: api
sidebar: file_open
---
openDocument
-----

**解释：**新开页面打开文档，支持格式：doc, xls, ppt, pdf, docx, xlsx, pptx。

**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|filePath   |String  |  是  | 文件路径，可通过 downloadFile 获得|
|fileType   |String  |  否  | 文件类型，指定文件类型打开文件，有效值 doc, xls, ppt, pdf, docx, xlsx, pptx|
|success   |Function  |  否  | 接口调用成功的回调函数|
|fail  |Function  |  否 |  接口调用失败的回调函数|
|complete   | Function   | 否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

```js
swan.downloadFile({
    url: 'https://smartprogram.baidu.com/xxx.pdf',
    success: function (res) {
        var filePath = res.tempFilePath;
        swan.openDocument({
            filePath: filePath,
            success: function (res) {
                console.log('打开文档成功');
            }
        });
    }
});
```
