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


**代码示例**：

<a href="swanide://fragment/1432356a3b3212eefb114963ebd275e51573043371074" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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
        socketTask.onError(function (res) {
            console.log('socketTask.onError success', res);
            swan.showModal({
                title: '监听错误发送事件成功',
                content: JSON.stringify(res.reason)
            });
        }),
        this.socketTask = socketTask
    }
});
```