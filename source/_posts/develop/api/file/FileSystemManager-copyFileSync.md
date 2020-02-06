---
title: FileSystemManager.copyFileSync
header: develop
nav: api
sidebar: FileSystemManager-copyFileSync
---

 
**解释**：用于实现文件拷贝的同步接口。

**方法参数**：String srcPath, String destPath

**`srcPath`参数说明**：文件/目录路径。

**`destPath`参数说明**：拷贝操作的目标文件名。

若接口调用失败，会抛出一个标准的`Error`对象

###  代码示例 

* 在 js 文件中

```js
Page({
    onLoad() {
        const fs = swan.getFileSystemManager();
        this.fs = fs;
    },
    copyFileSync() {
        try {
            let result = this.fs.copyFileSync(
                `${swan.env.USER_DATA_PATH}/demo.txt`,
                `${swan.env.USER_DATA_PATH}/copyFileSync.txt`
            );
            console.log('copyFileSync success', result);
        }
        catch (err) {
            console.log('copyFileSync fail', err);
        }
    }
});
```

