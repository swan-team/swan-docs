---
title: 删除文件
header: develop
nav: api
sidebar: file_remove
---

removeSavedFile
-----

**解释：**删除本地存储的文件

**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|filePath   |String  |  是  | 需要删除的文件路径|
|success   |Function  |  否  | 接口调用成功的回调函数|
|fail  |Function  |  否 |  接口调用失败的回调函数|
|complete   | Function   | 否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

```js
swan.getSavedFileList({
    success: function (res) {
        if (res.fileList.length > 0){
            swan.removeSavedFile({
                filePath: res.fileList[0].filePath,
                success: function (res) {
                    console.log(res.filePath);
                }
            });
        };
    }
});
```
