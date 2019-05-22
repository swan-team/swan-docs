### socketTask.send()

通过 WebSocket 连接发送数据。注意需要在 webSocket.open 回调之后才能发送数据。


```js
socketTask.send(opts)
```

**参数值**：

|属性|类型|是否必填|描述|
|-|-|-|-|
|data|ArrayBuffer<span class="vsplit"></span>string|是|需要发送的内容|
|success|function|否|接口调用成功的回调函数|
|fail|function|否|接口调用失败的回调函数|
|complete|function|否|接口调用完成的回调函数（接口成功、失败都会执行）|

**示例**：

```js
const task = swan.connectSocket({
    url: 'wss://test.baidu.com' // 仅为示例，并非真实的接口地址
});

task.onOpen(() => {
	task.send({
		data: 'test task send',
		success: () => console.log('send success')
	});
});
```