---
title: FileSystemManager.unlinkSync
header: develop
nav: api
sidebar: FileSystemManager-unlinkSync
---
  

**解释**：删除文件的同步接口。

**方法参数**：String filePath

**`filePath`参数说明**：要删除的文件路径。

若接口调用失败，会抛出一个标准的`Error`对象

###  代码示例 

* 在 js 文件中

```js
Page({
    onLoad() {
        const fs = swan.getFileSystemManager();
        this.fs = fs;
    },
    unlinkSync() {
        try {
            let result = this.fs.unlinkSync(
                `${swan.env.USER_DATA_PATH}/demo.txt`
            );
            console.log('unlinkSync success', result);
        }
        catch (err) {
            console.log('unlinkSync fail', err);
        }
    }
});
```