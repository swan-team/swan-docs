### socketTask.onOpen()

监听 WebSocket 连接打开事件。连接成功才可调用发送数据或者关闭连接。

```js
socketTask.onOpen(callback)
```

**参数值**：

|属性|类型|是否必填|描述|
|-|-|-|-|
|callback|function|是|监听事件的回调函数|

`callback` 回调函数：

形如 `function (res) {...}`, 其中：

|属性|类型|描述|
|-|-|-|
|res|Object|回调函数参数对象|
|res.header|Object|连接成功的 HTTP 响应 Header|

**示例**：

```js
const task = swan.connectSocket({
    url: 'wss://test.baidu.com' // 仅为示例，并非真实的接口地址
});

task.onOpen(res => console.log('连接成功：', res.header));
```