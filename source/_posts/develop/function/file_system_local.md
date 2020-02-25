---
title: 本地文件
header: develop
nav: function
sidebar: file_system_local
---


### 本地临时文件 

+ “本地临时文件” 是通过调用特定的接口临时产生的文件（如使用 `swan.downloadFile(...)` 下载而来）。这些特定的 API 会返回一个临时文件地址，该地址只能在当前小程序的生命周期内使用，在小程序重启后，该临时地址和 “本地临时文件” 会被清除。
+ “本地临时文件” 可以通过 `fs.saveFile(...)` 或 `fs.copyFile(...)` 来持久化成 “本地用户文件”。
+ 生命周期：
    + 通过调用特定的接口产生。
    + 当退出当前小程序时，或者后台运行小程序至 5 分钟后，或者杀死百度 App 进程时，或者小程序被删除时，会被清除。
+ 读写权限：只可读，不可写入，也不可在 “本地临时文件” 所在目录中创建其他文件。
+ 访问路径：由 API 自动生成（另外也可在调用 API 时直接指定路径存为 “本地用户文件”）。
+ 存储空间限制：一个用户的一个 appId，最大允许总共 10MB 的 “本地临时文件”。

例如：
```js
const fileSystemManager = swan.getFileSystemManager();
swan.downloadFile({
    url: 'https://smartprogram.baidu.com/docs/img/logo.png',
    success: res => {
        // 此为 “本地临时文件” 路径。
        resolve(res.tempFilePath);
        // 将 “本地临时文件” 持久化成 “本地用户文件”。
        fileSystemManager.saveFileSync(res.tempFilePath, `${swan.env.USER_DATA_PATH}/my.png`);
    }
});
```

### 本地用户文件 

+ “本地用户文件” 是从 3.130.1 版本开始新增的概念，持久性的文件，通过调用特定的接口操作产生，不会自动被删除，除非用户主动删除小程序。
+ 生命周期：
    + 通过调用特定的接口产生或者清除。
    + 小程序被删除时，会被清除。
+ 读写权限：可读可写，可创建文件，可建立目录。
+ 访问路径：必须以内置变量 `swan.env.USER_DATA_PATH` 开头，如：`${swan.env.USER_DATA_PATH}/some/xxx.xxx`。不支持相对路径（即不支持 "./" 或 "../"）。
+ 存储空间限制：与 “本地缓存文件” 共计，一个用户的一个 appId，最多可存储 10MB 的 “本地用户文件”。

例如：
```js
const fs = swan.getFileSystemManager();
fs.writeFileSync(`${swan.env.USER_DATA_PATH}/some.txt`, 'hello', 'utf8');
fs.mkdirSync(`${swan.env.USER_DATA_PATH}/my`);
```

### 本地缓存文件 

+ “本地缓存文件” 小程序通过接口把本地临时文件缓存后产生的文件，不能自定义目录和文件名。
+ 生命周期：
    + 通过调用特定的接口产生。
    + 小程序被重启后仍可用。
    + 小程序被删除时，会被清除。
+ 读写权限：只可读，不可写入，也不可在 “本地缓存文件” 所在目录中创建其他文件。
+ 访问路径：由 API 自动生成。
+ 存储空间限制：与 “本地用户文件” 共计，一个用户的一个 appId，最多可存储 10MB 的 “本地缓存文件”。
+ 注意：本地缓存文件是最初的设计，3.130.1 版本开始，提供了功能更完整的本地用户文件，可以完全覆盖本地缓存文件的功能，如果不需要兼容低于 3.130.1 版本，可以不使用本地缓存文件。

例如：
```js
const fs = swan.getFileSystemManager();
fs.saveFile({
  tempFilePath: '', // 本地临时文件路径
  success(res) {
    console.log(res.savedFilePath) // res.savedFilePath 为一个本地缓存文件路径
  }
})
```