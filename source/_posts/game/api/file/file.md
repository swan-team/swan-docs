---
title: 文件系统
layout: gamedoc
topic: file
level: root
categoryName: api
priority: 03-00
---


文件系统，提供手机本地文件读写管理功能。

例如：
```js
const fs = swan.getFileSystemManager();
// 文件系统的各个接口都在这个得到的 fs 对象上。例如：
fs.writeFileSync(`${swan.env.USER_DATA_PATH}/some.txt`, 'hello', 'utf8');
```

fs 对象上详细的各个 API，参见：[fileSystemManager](/api/file/fileSystemManager/)。

<br>

文件被分为这几类：`代码包文件`、`本地临时文件`、`本地用户文件`

### 代码包文件

+ 项目代码目录中的文件。
+ 读写权限：程序运行时只读，不可修改。
+ 路径：从项目根目录开始写文件路径，不支持相对路径。

例如：
```js
const fs = swan.getFileSystemManager();
// 路径：从项目根目录开始写文件路径，不支持相对路径
const imageData = fs.readFileSync('/image/bg.png');
```

### 本地临时文件

+ 使用 API 临时产生的文件（如使用 `swan.downloadFile(...)` 下载而来），游戏重启后就不再可访问。可以通过 `fs.saveFile(...)` 或 `fs.copyFile(...)` 来持久化成 `本地用户文件`。
+ 读写权限：可读，只能用 API 生成。
+ 隔离粒度：`用户Id` + `appId` 为粒度隔离。也就是说，不同用户或不同 appId 均不可互相访问。所有未登录用户算做同一匿名用户。
+ 路径：由 API 自动生成（也可在调用 API 时直接指定路径存为本地用户文件）。
+ 存储空间限制：不限制存储大小。

例如：
```js
const fs = swan.getFileSystemManager();
swan.downloadFile({
    url: 'https://www.baidu.com/img/bd_logo1.png',
    success: res => {
        resolve(res.tempFilePath);
        fs.saveFileSync(res.tempFilePath, `${swan.env.USER_DATA_PATH}/my.png`);
    }
});
```

### 本地用户文件

+ 持久性文件，不会自动被删除，除非用户主动删除小游戏。
+ 读写权限：可读可写，可建立目录。
+ 隔离粒度：
    + 登陆用户：`用户Id` + `appId` 为粒度隔离。也就是说，不同用户或不同 appId 均不可互相访问。
    + 未登陆用户：只以 appId 粒度隔离。
+ 路径：必须以内置变量 `swan.env.USER_DATA_PATH` 开头，如：`${swan.env.USER_DATA_PATH}/some/xxx.xxx`。不支持相对路径。
+ 存储空间限制：一个用户的一个 appId，最多可存储 50MB 文件。

例如：
```js
const fs = swan.getFileSystemManager();
fs.writeFileSync(`${swan.env.USER_DATA_PATH}/some.txt`, 'hello', 'utf8');
fs.mkdirSync(`${swan.env.USER_DATA_PATH}/my`);
```
