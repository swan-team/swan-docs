---
title: Worker 介绍
layout: gamedoc
categoryName: tutorials
topic: 多线程 Worker
priority: 12-01
---

 > 从 [基础库 1.6.1](/game/tutorials/version/releaseLog) 开始支持

 [Worker](/game/api/worker/workerObj/) 代表一个后台任务，它可以在主线程被创建并与主线程进行信息交互。对于游戏, 可以将异步处理的任务放入 [Worker](/game/api/worker/workerObj/) 中执行, 并将执行结果返回主线程。

 [Worker](/game/api/worker/workerObj/) 运行于一个单独的全局上下文与线程中，不能直接调用主线程的方法，[Worker](/game/api/worker/workerObj/) 也不具备渲染的能力。 [Worker](/game/api/worker/workerObj/) 与主线程之间的数据传输，双方使用 [Worker.postMessage()](/game/api/worker/workerObj/#postMessage) 来发送数据，[Worker.onMessage()](/game/api/worker/workerObj/#onMessage) 来接收数据，传输的数据并不是直接共享，而是被复制的。

 ### 配置 Worker 信息

 在 game.json 中配置 Worker 文件的相关信息, `workers` 是一个数组, 每一个元素都是一个 Worker 入口文件. 具体配置如下所示:

 ```json
{
  ...
  "workers": [
    "workers/worker1.js",
    "worker2.js"
  ]
  ...
}
```
**注意**
1. Worker 的入口文件不必在特定目录(如 workers)下, 只要是配在 game.json 里 `workers` 字段里的文件都可以当做创建 Worker 的入口文件


 ### 添加 Worker 文件
根据 1 中的配置，在代码目录下新建以下两个入口文件：

 ```
workers/worker1.js
worker2.js
```

 新建后的项目目录形如：

 ```
├── game.js
├── game.json
├── images
│   ├── a.png
│   ├── b.png
├── workers
│   └── worker1.js
└── worker2.js
```

 ### 编写 Worker 代码
在主线程的代码 game.js 中初始化 Worker, 入口文件文件路径选择 workers/worker1.js
```javascript
// 文件名指定 Worker 的入口文件路径
const worker1 = swan.createWorker('workers/worker1.js');
// 向 worker 线程发送消息
worker1.postMessage({
    msg: 'msg from main'
})
```
在 workers/worker1.js 中添加 Worker 响应代码
```
worker.onMessage(res => {
  console.log(res.msg)
})
```

**注意**
1. game.js 中 [swan.createWorker](/game/api/worker/createWorker/) 的入口文件如果不存在会报错
2. Worker 的入口文件由 [swan.createWorker](/game/api/worker/createWorker/) 时指定，开发者可动态指定 Worker 入口文件
3. 在 Worker 线程执行上下文会全局暴露一个 `worker` 对象，直接调用 worker.onMessage/postMessage 即可
4. Worker 线程内不支持 swan 系列的 API

 ### 在 Worker 中引用文件
在目录下新建两个引用文件
```
workers/a.js
util.js
```

 新建后的项目目录形如：

 ```
├── game.js
├── game.json
├── images
│   ├── a.png
│   ├── b.png
├── workers
│   ├── a.js
│   └── worker1.js
├── util.js
└── worker2.js
```

 下面示例为, 在 workers/worker1.js 中引用其他文件
```javascript
const utils = require('../util.js');
const a = require('./a.js');
```
**注意**
1. workers 目录下可以互相引用
2. workers 目录下可以引用其它目录下的文件

 ### 多个 Worker
Worker 最大并发数量限制为 1 个，创建下一个前请用 [Worker.terminate()](/game/api/worker/workerObj/#terminate) 结束当前 Worker

 在主线程的代码 game.js 中新增 Worker, 入口文件文件路径选择 worker2.js

```javascript
// 文件名指定 worker 的入口文件路径
const worker1 = swan.createWorker('workers/worker1.js');
// 向 worker 线程发送消息
worker1.postMessage({
    msg: 'msg from main'
})
// 创建下一个 Worker 前, 结束当前 Worker
worker1.terminate();
 // 创建下一个 Worker
const worker2 = swan.createWorker('worker2.js');
// 向 worker 线程发送消息
worker2.postMessage({
    msg: 'msg from main'
})
```

在 worker2.js 中添加 Worker 响应代码

```javascript
// 仍然使用 Worker 线程执行上下文在全局暴露的 `worker` 对象
worker.onMessage(function (res) {
  console.log(res.msg)
})
```

**注意**
- Workers 之间不支持发送消息