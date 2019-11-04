---
title: SocketTask
header: develop
nav: api
sidebar: websocket_SocketTask
---




**解释**：WebSocket 任务，可通过 swan.connectSocket() 接口创建返回。
**示例**：

<a href="swanide://fragment/f13c9d8eb241c61a61c3a175111891d81559044298681" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="send">send</button>
    <button type="primary" bindtap="close">close</button>
</view>
```

* 在 js 文件中

```js
Page({
    onLoad() {
        const webSocket = swan.connectSocket({
            url: 'wss://echo.websocket.org'
        });

        webSocket.onOpen(function (res) {
            console.log('WebSocket连接已打开！', res);
        });

        webSocket.onError(function (err) {
            console.log('WebSocket连接错误！', err);
        });

        webSocket.onMessage(function (res) {
            console.log('WebSocket接受到服务器的消息', res);
        });

        webSocket.onClose(function (res) {
            console.log('WebSocket连接已关闭！', res);
        });

        this.webSocket = webSocket;
    },
    send() {
        this.webSocket.send({
            data: 'baidu',
            success: res => {
                console.log('WebSocket发送数据成功', res);
            },
            fail: err => {
                console.log('WebSocket发送数据失败', err);
            }
        });
    },
    close() {
        this.webSocket.close({
            code: '1001',
            reason: 'close reason',
            success: res => {
                console.log('WebSocket链接关闭成功', res);
            },
            fail: err => {
                console.log('WebSocket链接关闭失败', err);
            }
        });
    }
});
```

 
