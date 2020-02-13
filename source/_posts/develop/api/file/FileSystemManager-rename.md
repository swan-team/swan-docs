---
title: FileSystemManager.rename
header: develop
nav: api
sidebar: FileSystemManager-rename
---

 

**解释**：重命名文件，可以把文件从 oldPath 移动到 newPath。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型|必填|默认值|说明|
|:----|:----|:----|:----|:----|
|oldPath|String|是|-|源文件/源目录路径|
|newPath|String|是|-|目标路径|
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
    rename() {
        this.fs.rename({
            oldPath: `${swan.env.USER_DATA_PATH}/demo.txt`,
            newPath: `${swan.env.USER_DATA_PATH}/rename/demo.txt`,
            encoding: 'utf8',
            success: res => {
                console.log('rename success', res);
            },
            fail: err => {
                console.log('rename fail', err)
            }
        });
    }
});
```