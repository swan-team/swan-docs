### swan.connectSocket()

创建一个 WebSocket 连接，最多同时存在 5 个 WebSocket 连接。

```js
swan.connectSocket(opts)
```

**参数值**：

|属性|类型|是否必填|描述|
|-|-|-|-|
|url|string|是|开发者服务器接口地址，必须是 wss 协议，且域名必须是后台配置的合法域名|
|protocols|Array.<`string`>|否|子协议数组|
|header|Object|否| HTTP 消息头，注意 header 中不能设置 referer|
|success|function|否|接口调用成功的回调函数|
|fail|function|否|接口调用失败的回调函数|
|complete|function|否|接口调用完成的回调函数（接口成功、失败都会执行）|

**返回值**：

`Object` 类型的对象：

|属性|类型|描述|
|-|-|-|
|socketTask|Object|SocketTask 实例对象|

**并发数**：

+ 最多可以同时存在 5（小游戏）/ 2（小程序）个 WebSocket 连接。

**示例**：

```js
const task = swan.connectSocket({
    url: 'wss://example.baidu.com',
    header: {
        'content-type': 'application/json'
    },
    protocols: ['protocol0']
});
task.onOpen(() => {
    console.log('socket连接成功');
});
```