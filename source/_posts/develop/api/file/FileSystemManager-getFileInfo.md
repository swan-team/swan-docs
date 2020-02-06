---
title: FileSystemManager.getFileInfo
header: develop
nav: api
sidebar: FileSystemManager-getFileInfo
---

 

**解释**：获取本地临时文件的相关信息， 并在 success 回调函数中返回该文件大小。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型|必填|默认值|说明|
|:----|:----|:----|:----|:----|
|filePath|String|是|-|读取的文件路径|
|success|Function|否|-|接口调用成功的回调函数|
|fail|Function|否|-|接口调用失败的回调函数|
|complete|Function|否|-|接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明**：

|参数|类型|说明|
|---- | ---- | ---- |
|size|Number|文件大小，以字节为单位|

###  代码示例 

* 在 js 文件中

```js
Page({
    onLoad() {
        const fs = swan.getFileSystemManager();
        this.fs = fs;
    },
    getFileInfo() {
        this.fs.getFileInfo({
            filePath: `${swan.env.USER_DATA_PATH}/demo.txt`,
            success: res => {
                console.log('getFileInfo success', res);
            },
            fail: err => {
                console.log('getFileInfo fail', err)
            }
        });
    }
});
```
