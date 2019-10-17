---
title: SocketTask.send
header: develop
nav: api
sidebar: websocket_SocketTask-send
---
  

**解释**：通过 WebSocket 连接发送数据。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|data| String/ArrayBuffer | 是 | -|需要发送的内容|
|success   |Function  |  否  |-| 接口调用成功的回调函数 |
|fail  |Function  |  否 | -| 接口调用失败的回调函数|
|complete   | Function   | 否 | -| 接口调用结束的回调函数（调用成功、失败都会执行）|