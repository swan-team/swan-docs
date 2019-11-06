---
title: SocketTask.onOpen
header: develop
nav: api
sidebar: websocket_SocketTask-onOpen
---

 


**解释**：监听 WebSocket 连接打开事件。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/socketTaskOnOpen.png"  class="demo-qrcode-image" />

**方法参数**：Function callback

**示例**：

<a href="swanide://fragment/2eef4ce7dda672cc8789d10f6df0b2e61572997499124" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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
        socketTask.onOpen({
            success: res => {
                console.log('监听到开启WebSocket', res);
            },
            fail: err => {
                console.log('监听开启WebSocket失败', err);
            }
        }),
        this.socketTask = socketTask
    }
});
```