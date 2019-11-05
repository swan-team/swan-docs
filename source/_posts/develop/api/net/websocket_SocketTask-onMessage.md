---
title: SocketTask.onMessage
header: develop
nav: api
sidebar: websocket_SocketTask-onMessage
---
 


**解释**：监听 WebSocket 接受到服务器的消息事件。


**方法参数**：Function callback

**`callback`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|data| String/ArrayBuffer |是| | 服务器返回的消息|

### bug&tips:

iOS 系统中当 websocket 链接后，重新连接时，可能一直处于 connecting 状态，将在11.10版本修复。