---
title: WebSocket
header: develop
nav: api
sidebar: net_websocket
---

connectSocket
-----

**解释：**创建一个 WebSocket 连接。

**参数：**Object

**基础库 1.9.4 之前，一个智能小程序同时只能有一个 WebSocket 连接，如果当前已存在一个 WebSocket 连接，会自动关闭该连接，并重新创建一个 WebSocket 连接。基础库版本 1.9.4 及以后，支持存在多个 WebSokcet 连接，每次成功调用 swan.connectSocket 会返回一个新的 SocketTask。**

**Object参数说明：**

|属性名 |类型  |　是否必须|说明|
|---- | ---- |--- |---- |
|url| String | 是 | 开发者服务器接口地址，必须是 wss 协议，且域名必须是后台配置的合法域名|
|protocolsArray| StringArray | 否 | 子协议数组|
|success| Function | 否 |接口调用成功的回调函数|
|fail | Function | 否 |接口调用失败的回调函数|
|complete| Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

```js
swan.connectSocket({
    url: 'wss://example.baidu.com'
});
```

### onSocketOpen

**解释：**监听 WebSocket 连接打开事件。

**参数：**CALLBACK

**callback 回调结果说明：**

|属性名 |类型  |　说明|
|---- | ---- |--- |---- |
|header| object | 连接成功的 HTTP 响应 Header|

**示例：**

```js
swan.connectSocket({
    url: 'wss://example.baidu.com'
});
swan.onSocketOpen(function(res) {
    console.log('WebSocket连接已打开！', res.header);
});
```

### onSocketError

**解释：**监听 WebSocket 错误

**参数：**CALLBACK

**示例：**
```js
swan.connectSocket({
    url: 'wss://example.baidu.com'
});
swan.onSocketError(function (res) {
    console.log('WebSocket连接打开失败，请检查！');
});
```

### sendSocketMessage

**解释：**通过 WebSocket 连接发送数据，需要先调用 swan.connectSocket，并在 swan.onSocketOpen 回调之后才能发送。

**参数：**Object

**Object参数说明：**

|属性名 |类型  |　是否必须|说明|
|---- | ---- |--- |---- |
|data| String/ArrayBuffer | 是 | 需要发送的内容|
|success   |Function  |  否  | 接口调用成功的回调函数 |
|fail  |Function  |  否 |  接口调用失败的回调函数|
|complete   | Function   | 否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

```js
swan.connectSocket({
    url: 'wss://example.baidu.com'
});
swan.onSocketOpen(function() {
    swan.sendSocketMessage({
        data: 'baidu'
    });
});
```

### onSocketMessage

**解释：**监听 WebSocket 接受到服务器的消息事件

**参数：**CALLBACK

**callback 回调结果说明：**

|属性名 |类型  |　说明|
|---- | ---- |--- |---- |
|data| String/ArrayBuffer | 服务器返回的消息|

**示例：**

```js
swan.connectSocket({
    url: 'wss://example.baidu.com'
});
swan.onSocketOpen(function () {
    swan.sendSocketMessage({
        data: 'baidu'
    });
});
swan.onSocketMessage(function (res) {
    console.log('收到服务器内容：', res.data);
});
```

### closeSocket

**解释：**关闭 WebSocket 连接。
必须在 WebSocket 打开期间调用 swan.closeSocket 才能关闭。

**参数：**Object

**Object参数说明：**

|属性名 |类型  |　是否必须|说明|
|---- | ---- |--- |---- |
|code| Number | 否 | 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。如果这个参数没有被指定，默认的取值是1000 （表示正常连接关闭）|
|reason| String | 否 | 一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于123字节的 UTF-8 文本（不是字符）|
|success   |Function  |  否  | 接口调用成功的回调函数 |
|fail  |Function  |  否 |  接口调用失败的回调函数|
|complete   | Function   | 否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

```js
swan.connectSocket({
    url: 'wss://example.baidu.com',
    success: function (res) {
        swan.closeSocket();
    }
});
```

### onSocketClose

**解释：**监听 WebSocket 关闭。

**参数：**CALLBACK

**示例：**

```js
swan.connectSocket({
    url: 'wss://example.baidu.com'
});

swan.onSocketClose(function (res) {
    console.log('WebSocket 已关闭！');
})

swan.onSocketOpen(function () {
    swan.closeSocket();
});
```

### SocketTask

**解释：**WebSocket 任务，可通过 swan.connectSocket() 接口创建返回。

**方法**

#### SocketTask.send

通过 WebSocket 连接发送数据。

**Object参数说明：**

|属性名 |类型  |　是否必须|说明|
|---- | ---- |--- |---- |
|data| String/ArrayBuffer | 是 | 需要发送的内容|
|success   |Function  |  否  | 接口调用成功的回调函数 |
|fail  |Function  |  否 |  接口调用失败的回调函数|
|complete   | Function   | 否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

#### SocketTask.close

**Object参数说明：**

|属性名 |类型  |　是否必须|说明|
|---- | ---- |--- |---- |
|code| Number | 否 | 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。如果这个参数没有被指定，默认的取值是1000 （表示正常连接关闭）|
|reason| String | 否 | 一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于123字节的 UTF-8 文本（不是字符）|
|success   |Function  |  否  | 接口调用成功的回调函数 |
|fail  |Function  |  否 |  接口调用失败的回调函数|
|complete   | Function   | 否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

#### SocketTask.onOpen

监听 WebSocket 连接打开事件。

#### SocketTask.onClose

监听 WebSocket 连接关闭事件。

#### SocketTask.onError

监听 WebSocket 错误。

#### SocketTask.onMessage

监听 WebSocket 接受到服务器的消息事件。

**callback 回调结果说明：**

|属性名 |类型  |　说明|
|---- | ---- |--- |---- |
|data| String/ArrayBuffer | 服务器返回的消息|
