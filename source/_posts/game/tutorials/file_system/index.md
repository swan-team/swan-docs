
---
title: 文件系统介绍
layout: gamedoc
categoryName: tutorials
topic: file_system
priority: 06-01
---

小游戏应运而生的同时也增强了对文件系统能力扩展的需求，因此百度在小程序的文件能力基础上进行扩展，新增了**目录管理**、**文件操作**等接口，将这些能力封装成文件系统。文件系统为开发者提供了更加完善的能力来支撑小游戏中复杂的文件目录结构和文件读写操作，并且每个小游戏的 `本地用户文件` 存储容量提升到了 50M。与此同时，为保证用户之间、用户与小游戏|小程序之间的资源信息不被盗取或篡改，文件系统提供了一套**用户资源继承与清理机制**，来避免登录用户之间的文件内容互相影响，并且保护用户信息资源的安全。


<br>

### 文件类型

文件被分为这几类：

![](/img/game/tutorials/file_class.png)

<br>

**（一）代码包文件**

+ `代码包文件` 是项目代码目录中的文件。
+ 生命周期：
    + 下载游戏时被产生。
    + 游戏被删除时，会被清除。
+ 读写权限：只可读，不可写入。
+ 访问路径：从项目根目录开始写文件路径，不支持相对路径（即不支持 "./" 或 "../"），不需要带访问协议前缀。

例如：
```js
const fileSystemManager = swan.getFileSystemManager();
// 路径：从项目根目录开始写文件路径，不支持相对路径，不需要带访问协议前缀。
const imageData = fileSystemManager.readFileSync('loading/loading_barbg.png');
```

![](/img/game/tutorials/file_package.png)


<br>

**（二）本地临时文件**

+ `本地临时文件` 是由特定 [FileSystemManager API](/game/api/file/fileSystemManager/) 临时产生的文件（如使用 `swan.downloadFile(...)` 下载而来）。这些特定的 API 会返回一个临时文件地址，该地址只能在当前游戏的生命周期内使用，在游戏重启后，该临时地址和**本地临时文件**会被清除。
+ `本地临时文件` 可以通过 `fs.saveFile(...)` 或 `fs.copyFile(...)` 来持久化成 `本地用户文件`。
+ 生命周期：
    + 由特定的 [FileSystemManager API](/game/api/file/fileSystemManager/) 产生。
    + 当退出当前游戏时，或者后台运行游戏至 5 分钟后，或者杀死百度 App 进程时，或者游戏被删除时，会被清除。
+ 读写权限：只可读，不可写入，也不可在 `本地临时文件` 所在目录中创建其他文件。
+ 访问路径：由 API 自动生成（另外也可在调用 API 时直接指定路径存为 `本地用户文件`）。
+ 存储空间限制：一个用户的一个 appId，最大允许总共 50MB 的 `本地临时文件`。

例如：
```js
const fileSystemManager = swan.getFileSystemManager();
swan.downloadFile({
    url: 'https://smartprogram.baidu.com/docs/img/logo.png',
    success: res => {
        // 此为 `本地临时文件` 路径。
        resolve(res.tempFilePath);
        // 将 `本地临时文件` 持久化成 `本地用户文件`。
        fileSystemManager.saveFileSync(res.tempFilePath, `${swan.env.USER_DATA_PATH}/my.png`);
    }
});
```

<br>

**（三）本地用户文件**

+ `本地用户文件` 是持久性文件，由 [FileSystemManager API](/game/api/file/fileSystemManager/) 操作产生，不会自动被删除，除非用户主动删除小游戏。
+ 生命周期：
    + 由 [FileSystemManager API](/game/api/file/fileSystemManager/) 产生或者清除。
    + 游戏被删除时，会被清除。
+ 读写权限：可读可写，可创建文件，可建立目录。
+ 访问路径：必须以内置变量 `swan.env.USER_DATA_PATH` 开头，如：`${swan.env.USER_DATA_PATH}/some/xxx.xxx`。不支持相对路径（即不支持 "./" 或 "../"）。
+ 存储空间限制：一个用户的一个 appId，最多可存储 50MB 的 `本地用户文件`。

例如：
```js
const fs = swan.getFileSystemManager();
fs.writeFileSync(`${swan.env.USER_DATA_PATH}/some.txt`, 'hello', 'utf8');
fs.mkdirSync(`${swan.env.USER_DATA_PATH}/my`);
```

<br>

**总结**

+ 关于文件路径：
    + `本地临时文件`、`本地用户文件` 的文件路径结构均为：`{协议名}://文件路径`。
    但是不要硬编码写协议名，而是应该如上所说使用 `swan.env.USER_DATA_PATH` 变量（内含协议名）。
    + 文件系统不支持相对路径 `./` 或 `../`。
    + 开发者不可访问 `本地临时文件`、`代码包文件`、`本地用户文件` 的 **父级目录或更高层目录**，如果访问均会被拒绝。
+ 关于文件生命周期：
    + 当游戏从列表中删除时，会清除当前用户被删除游戏的所有文件。（包含：**代码包文件**、**本地临时文件**和**本地用户文件**）。
+ **与微信小游戏不同**：
    + 百度小游戏中 **不支持** `本地缓存文件`。

<br>

### 文件管理接口
通过 `swan.getFileSystemManager()` 可以获取全局唯一的文件管理器对象: `fileSystemManager` ，调用 `fileSystemManager` 对象上的方法来实现对文件的操作。

```js
const fileSystemManager = swan.getFileSystemManager();
```

fileSystemManager 对象上详细的各个 API，参见：[FileSystemManager](/game/api/file/fileSystemManager/)。

<br>

**场景示例：**

1. 使用 `swan.downloadFile()` 和 `fileSystemManager.saveFile()` 方法，将下载的 `本地临时文件` 保存到 `本地用户文件`。

```js
const fileSystemManager = swan.getFileSystemManager();
swan.downloadFile({
    url: 'https://smartprogram.baidu.com/docs/img/logo.png',
    success: res => {
        // 返回本地临时文件路径
        console.log(res.tempFilePath);
        fileSystemManager.saveFile({
            // 传入本地临时文件路径
            tempFilePath: res.tempFilePath,
            success: res => {
                // 存储后的文件路径
                console.log(res.savedFilePath);
            },
            fail: res => {
                console.log('接口执行失败', res.errMsg);
            },
            complete: res => {
                console.log('接口执行完成');
            }
        });
    },
    fail: res => {
        console.log('接口执行失败', res.errMsg);
    }
})
```

<br>

2. 将游戏关卡数据写入到 `本地用户文件` 中。

```js
let levelData = {level: 3};
const fileSystemManager = swan.getFileSystemManager();

fileSystemManager.writeFile({
    // 传入本地用户文件路径
    filePath: `${swan.env.USER_DATA_PATH}/gameLevel.txt`,
    data: JSON.stringify(levelData),
    success: res => {
        console.log(res);
        fileSystemManager.readFile({
            filePath: `${swan.env.USER_DATA_PATH}/gameLevel.txt`,
            encoding: 'utf8',
            success: res => {
                console.log(JSON.parse(res.data));
                // res.data 中为 string，文件内容: {level: 3}
            },
            fail: res => {
                console.log('接口执行失败', res.errMsg);
            },
            complete: () => {
                console.log('接口执行完成');
            }
        });
    },
    fail: res => {
        console.log('接口执行失败', res.errMsg);
    },
    complete: () => {
        console.log('接口执行完成');
    }
});
```

<br>

3. 读取代码包文件。

```js
const fileSystemManager = swan.getFileSystemManager();
fileSystemManager.readFile({
    filePath: 'game.json',
    encoding: 'utf8',
    success: res => {
        console.log(res);
    },
    fail: res => {
        console.log('接口执行失败', res.errMsg);
    },
    complete: () => {
        console.log('接口执行完成');
    }
});
```

<br>

### 用户资源继承与清理策略

对于同一个小游戏，本地文件系统存在用户登录资源继承与用户退登资源清理策略。当使用 [FileSystemManager API](/api/file/fileSystemManager/) 读写文件时：

+ 在未登录状态，若在文件系统存储了文件，则在用户登录时，文件将被继承到该账户。
+ 在用户退出登录时，将清理运行中的小游戏进程，同时清空文件系统全部数据。

百度 App 与微信的登录体系不同的是，百度 APP 在不登录情况下也是可以正常打开并使用小游戏的。如果是需要用户登录才可以使用的小游戏，一定要注意用户资源继承与清理策略。
