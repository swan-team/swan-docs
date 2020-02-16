---
title: FileSystemManager.accessSync
header: develop
nav: api
sidebar: FileSystemManager-accessSync
---



**解释**：判断文件/目录是否存在的同步接口。

**方法参数**：String path

**`path`参数说明**：文件/目录路径。

若接口调用失败，会抛出一个标准的`Error`对象

###  代码示例 

* 在 js 文件中

```js
Page({
    onLoad() {
        const fs = swan.getFileSystemManager();
        this.fs = fs;
    },
    accessSync() {
        try {
            let result = this.fs.accessSync(
                `${swan.env.USER_DATA_PATH}/demo.txt`
            );
            console.log('accessSync success', result);
        }
        catch (err) {
            console.log('accessSync fail', err);
        }
    }
});
```

