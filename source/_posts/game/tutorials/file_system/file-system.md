
---
title: 文件系统
layout: gamedoc
categoryName: tutorials
topic: file_system
priority: 03-01
---

小游戏应运而生的同时也增强了对文件系统能力扩展的需求，因此百度在小程序的文件能力基础上进行扩展，新增了**目录管理**、**文件操作**等接口，将这些能力封装成文件系统。文件系统为开发者提供了更加完善的能力来支撑小游戏中复杂的文件目录结构和文件读写操作，并且每个小游戏的**本地用户文件**存储容量提升到了 50M。与此同时，为保证用户之间和小游戏小程序之间的资源信息不被盗取或篡改，文件系统还提供了一套**用户资源隔离机制**，来避免登录用户之间的文件内容会互相影响，和保护信息资源的安全。

### 文件类型

![](/img/game/tutorials/file_class.png)

1. 本地临时文件
主要由 `swan.downloadFile()` 等特定 API 执行产生，这些特定的 API 会返回一个临时的文件地址，该地址只能在当前游戏的生命周期内使用，在游戏销毁后该临时地址和**本地临时文件**会被清除。用户只有**可读文件权限**，这类文件无法直接调用文件系统的 API 对**本地临时文件**执行写入操作，最大存储为 25M。

**示例：**

```js
swan.downloadFile({
    url: 'https://smartprogram.baidu.com/docs/img/logo.png',
    success: res => {
        console.log(res.tempFilePath);  // 返回本地临时文件路径 bdfile://tmp/1542099788398.png
    },
    fail: err => {
        console.log(err);
    }
})
```

2. 本地用户文件
主要由文件系统 API 操作产生，包括：文件夹操作、文件读写操作、**本地临时文件**的存储等，通过 `swan.env.USER_DATA_PATH` 可以获取到这个目录的路径。用户拥有**可读可写权限**。这类文件在退出游戏后数据不会被清除，可持久化保存文件，最大存储为 50M。

**示例：**

```js
fileSystemManager.writeFileSync(
    `${swan.env.USER_DATA_PATH}/demo.txt`,
    'hello',
    'utf8'
);
```

3. 代码包/本地包文件：
存在代码包中的文件。用户**只可读，不可写入**。
代码包文件的访问方式是从项目根目录开始写文件路径，不需要带访问协议前缀。
如： `loading/loading_barbg.png`

![](/img/game/tutorials/file_package.png)

**示例：**

```js
let data = fileSystemManager.readFileSync(
    `loading/loading_barbg.png`,
    'utf8'
);
```

本地文件的文件路径结构均为：`{协议名}://文件路径`
文件系统不支持相对路径 `./` 或 `../`
开发者不可访问**本地临时文件**、**代码包文件**、**本地用户文件**的**父级目录或更高层目录**，均会被拒绝。
与微信不同：设计中不支持**本地缓存文件**。

#### 生命周期：

当退出当前游戏、后台运行游戏至 5 分钟、杀死百度 App 进程时，会清除当前用户游戏的**本地临时文件**。

当游戏从列表中删除时，会清除当前用户被删除游戏的所有文件。（包含：**代码包文件**、**本地临时文件**和**本地用户文件**）。

### 文件管理接口
通过 `swan.getFileSystemManager()` 可以获取全局唯一的文件管理器对象: `fileSystemManager` ，调用 `fileSystemManager` 对象上的方法来实现对文件的操作。

```js
const fileSystemManager = swan.getFileSystemManager();
```

#### 场景示例：

1. 使用 `swan.downloadFile()` 和 `fileSystemManager.saveFile()` 方法，将下载的**本地临时文件**保存到**本地用户文件**。

```js
const fileSystemManager = swan.getFileSystemManager();
swan.downloadFile({
    url: 'https://smartprogram.baidu.com/docs/img/logo.png',
    success: res => {
        console.log(res.tempFilePath);  // 返回本地临时文件路径
        // bdfile://tmp/1542099788398.png
        fileSystemManager.saveFile({
            tempFilePath: res.tempFilePath, // 传入本地临时文件路径
            success: res => {
                // 存储后的文件路径
                console.log(res.savedFilePath);
                // bdfile://usr/1542099788398.png
            },
            fail: err => {
                console.log('接口执行失败', err.errMsg);
            },
            complete: res => {
				console.log('接口执行完成');
			}
        });
    },
    fail: err => {
        console.log(err);
    }
})
```

2. 将游戏关卡数据写入到**本地用户文件**中。

```js
const fileSystemManager = swan.getFileSystemManager();
fileSystemManager.writeFile({
    filePath: `${swan.env.USER_DATA_PATH}/gameLevel.txt`,   // 传入本地用户文件路径
    data: '{"level": 3}',
    success: res => {
        // 写入成功。
        console.log(res);
        fileSystemManager.readFile({
            filePath: `${swan.env.USER_DATA_PATH}/gameLevel.txt`,
            encoding: 'utf8',
            success: res => {
                console.log(JSON.parse(res.data));
                // res.data 中为 string，文件内容: {level: 3}
            },
            fail: res => {
                // res.errMsg 为失败信息。
            },
            complete: () => {
                // 接口执行完成
            }
        });
    },
    fail: res => {
        // res.errMsg 为失败信息。
        console.log(res)
    },
    complete: () => {
        // 接口执行完成
        console.log('接口执行完成')
    }
});
```
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
        console.log(res);
    },
    complete: () => {
        // 接口执行完成
    }
});
```

### 用户资源隔离
在百度 App 登录之后，访问小游戏或小程序时，不同用户的文件会被存储到本地，以**百度账号**将文件（包含：**代码包文件**、**本地临时文件**和**本地用户文件**）隔离。每个用户下的所有小程序或者小游戏都是相互隔离的。游戏之间和用户之间，游戏资源都不会被互相访问到。这样既保证了用户的信息不会被其他账号访问到，又保证了每个小游戏小程序的数据安全性。

![](/img/game/tutorials/file_user.png)

由于百度 App 和微信的登录体系不同，百度在不登录情况下也是可以正常使用，也可以正常打开小程序和小游戏。如果需要用户登录才可以使用的小程序或小游戏，一定要注意用户资源隔离系统。在未登录前下载的游戏资源会和登录之后的资源隔离。所以保证用户等登录状态很有必要。
