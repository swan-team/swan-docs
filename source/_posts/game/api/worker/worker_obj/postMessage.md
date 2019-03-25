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