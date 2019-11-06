---
title: SocketTask.onError
header: develop
nav: api
sidebar: websocket_SocketTask-onError
---

 

**解释**：监听 WebSocket 错误。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/socketTaskOnError.png"  class="demo-qrcode-image" />

**方法参数**：Function callback

**示例**：

<a href="swanide://fragment/33f5346f3be5b653f3a36962a62622821572997904644" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
     socketTaskError() {
        const socketTask = swan.connectSocket({
            url: 'wss://xxx.websocket',
            header: {},
            success: function (res) {
                console.log('connectSocket success', res.socketTaskId)
            },
            fail: function (err) {
                console.log('connectSocket fail', err);
            }
        });
        socketTask.onError({
            success: res => {
                swan.showModal({
                    title: '监听到WebSocket报错',
                    content: JSON.stringify(res)
                });
            },
            fail: err => {
                console.log('监听到WebSocket报错失败', err);
            }
        }),
        this.socketTask = socketTask
    }
});
```