---
title: Worker
layout: gamedoc
topic: worker
categoryName: api
priority: 18-02
---

 Worker 实例，主线程中可通过 [swan.createWorker()](/game/api/worker/createWorker/) 接口获取，worker 线程中可通过全局变量 worker 获取

 **方法**

 [Worker.onMessage(cb)](/game/api/worker/worker_obj/onMessage/)
监听主线程/Worker 线程向当前线程发送的消息的事件。

 [Worker.postMessage(opts)](/game/api/worker/worker_obj/postMessage/)
向主线程/Worker 线程发送的消息。

 [Worker.terminate()](/game/api/worker/worker_obj/terminate/)
结束当前 Worker 线程。仅限在主线程 worker 对象上调用。

 **示例**
运行以下代码需先进行基础配置，详细请查阅 [多线程 Worker](/game/tutorials/worker/worker/) 文档了解基础知识和配置方法

 ```js
// 文件名指定 worker 的入口文件路径，绝对路径
const worker = swan.createWorker('workers/index.js');
 worker.onMessage(res => {
  console.log(res)
})
 worker.postMessage({
  msg: 'msg from main'
})
 worker.terminate()
```


### onMessage()
监听主线程/Worker 线程向当前线程发送的消息的事件。

 ```js
Worker.onMessge(cb)
```

 **参数值：**

 |属性|类型|是否必填|描述|
|-|-|-|-|
|cb|function|是|主线程/Worker 线程向当前线程发送的消息的事件的回调函数|

 **回调函数参数值：**

 |属性|类型|描述|
|-|-|-|
|res|Object|主线程/Worker 线程向当前线程发送的消息|

 **示例**

 ```js
// worker线程中
worker.onMessage(res => {
    // 来自主线程的消息
    console.log(res.msg);
});
 // 主线程中
const worker = swan.createWorker('workers/index.js')
worker.onMessage(res => {
    // 来自Worker线程的消息
    console.log(res.msg);
});
```

### postMessage()
向主线程/Worker 线程发送的消息。

 ```js
Worker.onMessge(opts)
```

 **参数值：**

 |属性|类型|是否必填|描述|
|-|-|-|-|
|opts|Object|是|需要发送的消息|

 **示例**

 ```js
// worker线程中
worker.postMessage({
  msg: 'msg from worker'
});
 // 主线程中
const worker = swan.createWorker('workers/index.js')
worker.postMessage({
  msg: 'msg from main'
})
```

### terminate()
结束当前 Worker 线程。仅限在主线程 worker 对象上调用。

 ```js
Worker.terminate()
```