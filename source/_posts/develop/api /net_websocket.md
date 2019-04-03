---
title: WebSocket
header: develop
nav: api
sidebar: net_websocket
---

## swan.connectSocket

**解释：**创建一个 WebSocket 连接。

**参数：**Object

**说明**：
* 基础库 1.9.4 之前，一个智能小程序同时只能有一个 WebSocket 连接，如果当前已存在一个 WebSocket 连接，会自动关闭该连接，并重新创建一个 WebSocket 连接。
* 基础库版本 1.9.4 及以后，支持存在多个 WebSokcet 连接，每次成功调用 swan.connectSocket 会返回一个新的 [SocketTask](https://smartprogram.baidu.com/docs/develop/api/net_websocket/#SocketTask) 。

**Object参数说明：**

|属性名 |类型  |　是否必须|说明|
|---- | ---- |--- |---- |
|url| String | 是 | 开发者服务器接口地址，必须是 wss 协议，且域名必须是后台配置的合法域名。|
|header| Object | 否 | HTTP Header，Header 中不能设置 Referer。|
|protocols| StringArray | 否 | 子协议数组|
|success| Function | 否 |接口调用成功的回调函数|
|fail | Function | 否 |接口调用失败的回调函数|
|complete| Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**


```js
swan.connectSocket({
    url: 'wss://example.baidu.com'
});
```

<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|302|找不到调起协议对应端能力方法|
|202|解析失败，请检查参数是否正确 |
|1001|执行失败|

**iOS**

|错误码|说明errMsg|
|--|--|
|4|参数有误 |
|7|安全校验失败|
|errorCode为1|超过设置的最大task数量|
|errorCode为2|url/subProtocals错误|
|errorCode为3|创建task实例失败| -->

## swan.onSocketOpen

**解释：**监听 WebSocket 连接打开事件。

**参数：**CALLBACK

**callback 回调结果说明：**

|属性名 |类型  |　说明|
|---- | ---- |--- |---- |
|header| object | 连接成功的 HTTP 响应 Header。|

**示例：**

```js
swan.connectSocket({
    url: 'wss://example.baidu.com'
});
swan.onSocketOpen(function(res) {
    console.log('WebSocket连接已打开！', res.header);
});
```

## swan.onSocketError

**解释：**监听 WebSocket 错误

**参数：**CALLBACK

**示例： **
```js
swan.connectSocket({
    url: 'wss://example.baidu.com' // 仅为示例，并非真实的服务地址
});
swan.onSocketError(function (res) {
    console.log('WebSocket连接打开失败，请检查！');
});
```

<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|0|error happen|

**iOS**

|错误码|说明|
|--|--|
||Status error,current + 当前状态|
||Excedding max concurrency + 设置的最大并发数| -->

## swan.sendSocketMessage

**解释：**通过 WebSocket 连接发送数据，需要先调用 swan.connectSocket，并在 swan.onSocketOpen 回调之后才能发送。

**参数：**Object

**Object参数说明：**

|属性名 |类型  |　是否必须|说明|
|---- | ---- |--- |---- |
|data| String/ArrayBuffer | 是 | 需要发送的内容|
|success   |Function  |  否  | 接口调用成功的回调函数 |
|fail  |Function  |  否 |  接口调用失败的回调函数|
|complete   | Function   | 否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例： **

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
<!-- #### 错误码

**Andriod**
 
|错误码|说明|
|--|--|
|302|找不到调起协议对应端能力方法|
|202|解析失败，请检查参数是否正确 |
|1001|执行失败|

**iOS**

|错误码|说明|
|--|--|
|4|参数有误 | -->

## onSocketMessage

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
<!-- #### 错误码

**iOS**

|错误码|说明|
|--|--|
|4|参数有误 | -->

## swan.closeSocket

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
    url: 'wss://example.baidu.com'
});

swan.onSocketOpen(function () {
    swan.closeSocket();
});
```
<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|302|找不到调起协议对应端能力方法|
|202|解析失败，请检查参数是否正确 |
|1001|执行失败| -->


## swan.onSocketClose

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

## swan.SocketTask

**解释：**WebSocket 任务，可通过 swan.connectSocket() 接口创建返回。

**方法**

1、 SocketTask.send

通过 WebSocket 连接发送数据。

**Object参数说明：**

|属性名 |类型  |　是否必须|说明|
|---- | ---- |--- |---- |
|data| String/ArrayBuffer | 是 | 需要发送的内容|
|success   |Function  |  否  | 接口调用成功的回调函数 |
|fail  |Function  |  否 |  接口调用失败的回调函数|
|complete   | Function   | 否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

2、 SocketTask.close

**Object参数说明：**

|属性名 |类型  |　是否必须|说明|
|---- | ---- |--- |---- |
|code| Number | 否 | 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。如果这个参数没有被指定，默认的取值是1000 （表示正常连接关闭）|
|reason| String | 否 | 一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于123字节的 UTF-8 文本（不是字符）|
|success   |Function  |  否  | 接口调用成功的回调函数 |
|fail  |Function  |  否 |  接口调用失败的回调函数|
|complete   | Function   | 否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

3、 SocketTask.onOpen

监听 WebSocket 连接打开事件。

4、 SocketTask.onClose

监听 WebSocket 连接关闭事件。

5、 SocketTask.onError

监听 WebSocket 错误。

6、 SocketTask.onMessage

监听 WebSocket 接受到服务器的消息事件。

**callback 回调结果说明：**

|属性名 |类型  |　说明|
|---- | ---- |--- |---- |
|data| String/ArrayBuffer | 服务器返回的消息|
