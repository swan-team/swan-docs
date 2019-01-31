### socketTask.onMessage()

监听 WebSocket 接受到服务器的消息事件。

```js
socketTask.onMessage(callback)
```

**参数值：**

|属性|类型|是否必填|描述|
|-|-|-|-|
|callback|function|是|监听事件的回调函数|

`callback` 回调函数：

形如 `function (res) {...}`, 其中：

|属性|类型|描述|
|-|-|-|
|res|Object|回调函数参数对象|
|res.data|ArrayBuffer<span class="vsplit"></span>string|服务器返回的消息|

**示例：**

```js
const task = swan.connectSocket({
    url: 'wss://test.baidu.com'
});

task.onOpen(() => {
    task.send({
        data: 'test onMessage'
    });
});

task.onMessage(res => console.log('tast 信息：', res.data));
```