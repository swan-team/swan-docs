---
title: FileSystemManager.stat
header: develop
nav: api
sidebar: FileSystemManager-stat
---

 

**解释**：获取文件 Stats 对象。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型|必填|默认值|说明|
|:----|:----|:----|:----|:----|
|path|String|是|-|临时存储文件路径|
|success|Function|否|-|接口调用成功的回调函数|
|fail|Function|否|-|接口调用失败的回调函数|
|complete|Function|否|-|接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明**：

|参数|类型|说明|
|:----|:----|:----|
|stats|Stats|一个 Stats 类型的对象|

**stats 返回值说明**

|参数名|参数类型 |说明|
|:----|:----|:----|
|mode|String|文件的类型和存取的权限，对应 POSIX stat.st_mode|
|size|Number|文件大小，单位：B，对应 POSIX stat.st_size|
|lastAccessedTime|Number|文件最近一次被存取或被执行的时间，UNIX 时间戳，对应 POSIX stat.st_atime|
|lastModifiedTime|Number|文件最后一次被修改的时间，UNIX 时间戳，对应 POSIX stat.st_mtime|
|isDirectory|Function|判断当前文件是否一个目录，返回 boolean 值|
|isFile|Function|判断当前文件是否一个普通文件，返回 boolean 值|

###  代码示例 

* 在 js 文件中

```js
Page({
    onLoad() {
        const fs = swan.getFileSystemManager();
        this.fs = fs;
    },
    stat() {
        this.fs.stat({
            path: `${swan.env.USER_DATA_PATH}/demo.txt`,
            success: res => {
                console.log('stat success', res);
            },
            fail: err => {
                console.log('stat fail', err)
            }
        });
    }
});
```