---
title: FileSystemManager.unzip
header: develop
nav: api
sidebar: FileSystemManager-unzip
---

 

**解释**：解压文件。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型|必填|默认值|说明|
|:----|:----|:----|:----|:----|
|zipFilePath|String|是|-|源文件路径，必须是 zip 压缩文件|
|targetPath|String|是|-|解压目标路径，目标目录必须位于用户目录下|
|success|Function|否|-|接口调用成功的回调函数|
|fail|Function|否|-|接口调用失败的回调函数|
|complete|Function|否|-|接口调用结束的回调函数（调用成功、失败都会执行）|

###  代码示例 

* 在 js 文件中

```js
Page({
    onLoad() {
        const fs = swan.getFileSystemManager();
        this.fs = fs;
    },
    unzip() {
        this.fs.unzip({
            zipFilePath: `${swan.env.USER_DATA_PATH}/demo/a.zip`,
            targetPath: `${swan.env.USER_DATA_PATH}/demo/b`,
            success: res => {
                console.log('unzip success', res);
            },
            fail: err => {
                console.log('unzip fail', err)
            }
        });
    }
});
```