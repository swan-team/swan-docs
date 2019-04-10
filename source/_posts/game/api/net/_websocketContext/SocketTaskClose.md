### socketTask.close()

关闭 WebSocket 连接。注意需要在 webSocket.open 回调之后才能关闭 webSocket 连接。

```js
socketTask.close(opts)
```

**参数值：**

|属性|类型|是否必填|描述|
|-|-|-|-|
|code|number|否|一个数字值表示关闭连接的状态号，表示连接被关闭的原因。如果这个参数没有被指定，默认的取值是 1000（表示正常连接关闭）|
|reason|string|否|一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于 123 字节的 UTF-8 文本（不是字符）|
|success|function|否|接口调用成功的回调函数|
|fail|function|否|接口调用失败的回调函数|
|complete|function|否|接口调用完成的回调函数（接口成功、失败都会执行）|

**示例：**

```js
const task = swan.connectSocket({
    url: 'wss://example.baidu.com'
});

task.onOpen(() =>{
    task.close({
        code: 1001,
        reason: 'close reason',
        success: () => console.log('task 关闭成功')
    });
}
```