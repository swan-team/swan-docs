### onMessge()
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