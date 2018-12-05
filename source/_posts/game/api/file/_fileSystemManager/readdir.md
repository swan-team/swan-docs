---
title: fileSystemManager.readdir()
layout: doc
topic: file
---

`readdir()` 是 fileSystemManager 对象的方法，该方法可读取本地指定路径下的目录。

```js
fileSystemManager.readdir(opts)
```

**参数值：**

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|opts|Object||是|调用该方法时，要传入的对象参数|
|opts.dirPath|string||是|想要读取的文件所在的目录|
|opts.success|function| |否|成功回调函数|
|opts.fail|function| |否|失败回调函数|
|opts.complete|function| |否|接口调用完成的回调函数（接口成功、失败都会执行）|

`success` 回调函数：
形如 `function (res) {...}`，其中：

|属性|类型|描述|
|-|-|-|
|res.files|Array|指定目录下的文件列表|
|files[].fileItem|string|文件列表里的文件项，存储着路径|

`fail` 回调函数：
形如 `function (res) {...}`，其中：

|属性|类型|描述|
|-|-|-|
|res.errMsg|string|fail no such file or directory ${dirPath} 指定的路径下目录不存在，或读取的是文件非目录|
|||fail permission denied, open ${dirPath} 指定目录不在本地路径下，没有读权限|

**示例：**

```js
const fileSystemManager = swan.getFileSystemManager();
fileSystemManager.readdir({
    dirPath: swan.env.USER_DATA_PATH + '/demo',
    success: res => console.log('接口执行成功，返回文件的files数组', res.files),
    fail: res => console.log('接口执行失败', res.errMsg),
    complete: res => console.log('接口执行完成', res);
});
```