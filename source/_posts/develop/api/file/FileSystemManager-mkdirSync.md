---
title: FileSystemManager.mkdirSync
header: develop
nav: api
sidebar: FileSystemManager-mkdirSync
---

 

**解释**：创建目录的同步接口。

**方法参数**：String dirPath, Boolean recursive

**`dirPath`参数说明**：创建的目录路径。

**`recursive`参数说明**：是否在递归创建该目录的上级目录后再创建该目录。如果对应的上级目录已经存在，则不创建该上级目录。如 dirPath 为 a/b/c/d 且 recursive 为 true，将创建 a 目录，再在 a 目录下创建 b 目录，以此类推直至创建 a/b/c 目录下的 d 目录。。

若接口调用失败，会抛出一个标准的`Error`对象

###  代码示例 

* 在 js 文件中

```js
Page({
    onLoad() {
        const fs = swan.getFileSystemManager();
        this.fs = fs;
    },
    mkdirSync() {
        try {
            let result = this.fs.mkdirSync(
                `${swan.env.USER_DATA_PATH}/mkdirSyc`
            );
            console.log('mkdirSync success', result);
        }
        catch (err) {
            console.log('mkdirSync fail', err);
        }
    }
});
```