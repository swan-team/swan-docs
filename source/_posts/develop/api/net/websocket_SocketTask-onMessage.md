---
title: SocketTask.onMessage
header: develop
nav: api
sidebar: websocket_SocketTask-onMessage
---
 


**解释**：监听 WebSocket 接受到服务器的消息事件。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/socketTaskOnMessage.png"  class="demo-qrcode-image" />

**方法参数**：Function callback

**`callback`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|data| String/ArrayBuffer |是| | 服务器返回的消息|

**示例**：

<a href="swanide://fragment/7542c489fd72f5e555f34aa2a8983b591572997750751" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    onShow() {
        const socketTask = swan.connectSocket({
            url: 'wss://echo.websocket.org',
            header: {},
            success: function (res) {
                console.log('connectSocket success', res.socketTaskId)
            },
            fail: function (err) {
                console.log('connectSocket fail', err);
            }
        });
        socketTask.onMessage({
            success: res => {
                swan.showModal({
                    title: '监听到WebSocket发送数据事件',
                    content: JSON.stringify(res)
                });
            },
            fail: err => {
                console.log('监听WebSocket发送数据事件失败', err);
            }
        }),
        this.socketTask = socketTask
    },
    socketTaskSend() {
        this.socketTask.send({
            data: 'baidu',
            success: res => {
                console.log('WebSocket发送数据成功', res);
            },
            fail: err => {
                console.log('WebSocket发送数据失败', err);
            }
        });
    }
});
```

### bug&tips:

iOS 系统中当 websocket 链接后，重新连接时，可能一直处于 connecting 状态，将在11.10版本修复。