---
title: 云函数使用常见问题
header: develop
nav: guide
sidebar: guide_function
---
 

## 编辑器中的云函数操作

### 配置云函数本地目录
在project.config.json文件中设置cloudfunctionRoot字段，即可指定云函数的本地目录，当通过创建云函数项目打开工程时，该字段自动生成。

### 云函数操作
在编辑器中可通过在云函数目录上点击鼠标右键来完成相应操作，目前包括以下功能：

- 查看当前环境
- 切换环境
- 新建 Node.js 云函数
- 下载线上环境的云函数列表并在本地生成空文件夹
- 下载线上环境的云函数代码并覆盖本地
- 上传并部署云函数到线上环境

### 查看和切换环境
在编辑器云函数根目录上右键，可查看当前的云环境，同时可在二级菜单切换环境，切换环境后会自动同步当前云环境列表（不会自动下载代码）。

### 新建 Node.js 云函数
在云函数根目录上点击右键，可以创建一个新的 Node.js 云函数，开发者工具在本地创建出以下目录和文件：

- 云函数目录：以云函数名字命名的目录，包含云函数的所有代码
- index.js：云函数入口文件，云函数被调用时会执行的入口文件中导出的 main 方法
- package.json：npm 包定义文件，默认定义了最新 swan-server-sdk 依赖

**注意：** 新建的云函数在右键上传前需要在本地用命令行 npm install 来安装依赖包

### 下载云函数列表
右键点击同步云函数列表，可以将当前云环境包含的所有云函数同步到本地，并以云函数名称新建相应的目录（如果该目录不存在）。
**注意：** 新建的目录中不包含任何文件，如果需要查看云函数的代码需要右键下载云函数

### 下载云函数
右键点击下载云函数，可以将线上云函数下载到本地硬盘目录中。

### 上传并部署
右键点击上传并部署，可以将选中的云函数目录上传并部署到线上环境中。



## 环境

环境是云开发各类资源的承载集合。环境与环境之间是完全隔离的，也就是说，不同环境下，所有云上托管资源（数据库、存储、函数等）均不互通。使用云开发服务必须至少创建一个环境，每个环境均有一个唯一的环境 ID，可以在云开发控制台的概览页面找到。

一个智能小程序最多可以创建 2 个环境，建议的实践为创建一个开发测试环境和一个线上生产环境。利用环境间数据隔离的特性，在日常开发时使用开发测试环境，正式发布的版本使用线上生产环境，这样可以在开发调试智能小程序的同时保证生产环境数据的稳定性。

初始化云开发 SDK 时，可以指定使用哪个环境，参见 [swan.cloud.init](/develop/cloud/cloud_init)。在云函数中初始化 SDK 时，如果没有指定环境 ID，则会默认使用该函数当前所处的环境。

## 云函数开发指南

### 云函数使用常见问题

#### 云函数使用什么语言开发和运行？
目前提供 Node.js 8.5 的运行时环境。

#### 同一个函数的数次调用之间能否共享数据？
使用云函数的最佳实践之一是尽量保持云函数的无状态性。也就是说，每次调用需要保证相互独立，重复执行结果应当保持一致。云函数的调度引擎会根据调用的频率自动伸缩计算资源，对于同一个云函数，在同一时间点可能有多个实例正在工作，当函数结果返回后，这些实例可能仍会存活一段时间，以供潜在的新一次调用。因此，在一定程度内，两次调用之间是有可能共享数据的（例如在临时目录内写入的数据）。但是开发者不应当依赖这一点，因为调度引擎的行为是不可预知的，两次调用不一定会使用同一个计算资源，而且计算资源会随时被销毁重建。总体而言，开发者需要遵循云函数的无状态性原则。

#### 函数运行资源有什么限制？
* 临时磁盘空间：用户函数只可读写 /tmp 这个临时目录
* 函数申请内存区间：参见配额限制
* 函数最大运行时间：参见配额限制
* 代码部署包大小(压缩为.zip文件)：50M
* 原始代码大小：250 MB
* 函数同步调用请求正文负载大小：6 MB

#### 如何编写有异步过程的云函数？
将入口函数标记为 `async` 即可，Node.js 8.5 的运行时环境支持 async/await 关键词。
```js
exports.main = async (event, context) => {
    const someAsyncData = await getAsyncData()
    return someAsyncData
}
```

#### 如何在函数中引用外部依赖包？
与一般的 Node.js 程序无异，编写 `package.json`文件，使用 npm 等工具将外部依赖安装至 `node_modules` 目录中，然后将这些文件一起打包上传部署即可。

#### 是否需要将 `node_modules` 一起上传部署？
需要。

#### 在云函数中访问云数据库和云存储，是否自带权限控制？
没有，可以任意读写数据。

#### 应该使用 swan-server-sdk 的什么版本？
随着云开发的功能迭代，SDK 也不会不断更新，建议使用保持使用最新版本。SDK 更新时会尽量兼容旧版，当必须做出不兼容变更时，会使用大版本号更新。

### 云函数使用示例：在智能小程序中调用云函数

在本例中，我们会创建一个名为 sum 的函数，他可以接收一系列数字作为输入，并且将他们的和返回。

我们先创建一个 sum 函数，并且修改其中的 index.js 文件。本例中无需使用云开发SDK，因此没有做初始化等工作。

```js
	exports.main = (event, context) => {
	    if (Array.isArray(event['numbers'])) {
	        let sum = 0;
	        for (let i = 0; i < event['numbers'].length; i++) {
	            let n = parseInt(event['numbers'][i], 10);
	            sum += n;
	        }
	        return sum
	    } else {
	        throw new Error('no numbers');
	    }
	};
```

这个函数在 `event` 中接收一个 `numbers` 数组，并且将它们的和返回。

上传部署函数后，我们可以在云开发控制台中测试这个函数，可以使用以下内容作为测试输入：

```json
{
    "numbers": [1, 2, 3, 4]
}
```

可以看到该云函数能够正确返回结果。

在智能小程序中，通过以下方式调用这个云函数获取结果：

```js
swan.cloud.callFunction({
    // 云函数名称
    name: 'sum',
    // 传给云函数的参数
    data: {
        numbers: [1, 2, 3, 4]
    },
    success: function(res) {
        console.log(res.result)
    },
    fail: console.error
})
```

### 云函数使用示例：在云函数中调用另一个云函数

在云函数中，可以使用 swan-server-sdk 来访问当前环境中的其他资源，包括调用另一个云函数。在本例中，你会创建两个函数：sum 和 call_sum，然后在智能小程序端调用 call_sum 函数，call_sum 函数会调用 sum 函数获取结果，最终返回给智能小程序端。

需要注意的是，这里的调用是同步调用。也就是说，第二个函数的执行时间会全部计算到第一个函数的执行时间内。实际使用时，需要注意设置合理的函数超时时间。

我们先创建一个 sum 函数。

```js
	exports.main = (event, context) => {
	    if (Array.isArray(event['numbers'])) {
	        let sum = 0;
	        for (let i = 0; i < event['numbers'].length; i++) {
	            let n = parseInt(event['numbers'][i], 10);
	            sum += n;
	        }
	        return sum
	    } else {
	        throw new Error('no numbers');
	    }
	};
```

这个函数在 `event` 中接收一个 `numbers` 数组，并且将它们的和返回。

我们再创建一个 call_sum 函数。

```js
	const cloud = require('swan-server-sdk');
	
	exports.main = async (event, context) => {
	    cloud.init(context);
	
	    let resp = await cloud.callFunction({
	        name: 'sum',
	        data: {
	            numbers: [1, 2, 3, 4]
	        }
	    });
	 
	    console.log(resp);
	 
	    return 'sum: ' + resp.result
	};
```

要注意 package.json 中要有 swan-server-sdk 的依赖。

```json
	"dependencies": {
	  "swan-server-sdk": "latest"
	}
```

手动安装依赖：

	npm install

将这两个函数都部署到云开发后，可以在智能小程序中调用 call_sum 函数，正常的话可以看到返回结果。

	sum: 10