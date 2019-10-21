---
title: SocketTask.close
header: develop
nav: api
sidebar: websocket_SocketTask-close
---



**解释**：关闭 WebSocket 连接

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|code| Number | 否 | 1000 （表示正常连接关闭）|一个数字值表示关闭连接的状态号，表示连接被关闭的原因。如果这个参数没有被指定。|
|reason| String | 否 | -|一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于123字节的 UTF-8 文本（不是字符）|
|success   |Function  |  否  |  -|接口调用成功的回调函数 |
|fail  |Function  |  否 |  -| 接口调用失败的回调函数|
|complete   | Function   | 否 |  -| 接口调用结束的回调函数（调用成功、失败都会执行）|

