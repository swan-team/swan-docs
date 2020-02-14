---
title: 代码包文件
header: develop
nav: function
sidebar: file_system_package
---

文件系统是小程序提供的一套以小程序和用户维度隔离的存储以及一套相应的管理接口，为开发者提供了更加完善的能力来支撑小程序中复杂的文件目录结构和文件读写操作。通过 [swan.getFileSystemManager](/develop/api/file/file_system/#FileSystemManager/)来获取全局全局唯一的文件系统管理器，所有文件系统的管理操作通过 [FileSystemManager](/develop/api/file/file_system/#FileSystemManager/) 来调用。



+ “代码包文件” 是项目代码目录中的文件。
+ 生命周期：
    + 下载小程序时被产生。
    + 小程序被删除时，会被清除。
+ 读写权限：只可读，不可写入。
+ 访问路径：从项目根目录开始写文件路径，不支持相对路径（即不支持 "./" 或 "../"），不需要带访问协议前缀。

例如：
```js
const fileSystemManager = swan.getFileSystemManager();
// 路径：从项目根目录开始写文件路径，不支持相对路径，不需要带访问协议前缀。
const imageData = fileSystemManager.readFileSync('loading/loading_barbg.png');
```

