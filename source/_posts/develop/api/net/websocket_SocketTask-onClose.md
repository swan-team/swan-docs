---
title: SocketTask.onClose
header: develop
nav: api
sidebar: websocket_SocketTask-onClose
---

 

**解释**：监听 WebSocket 连接关闭事件。

**方法参数**：Function callback

**示例**：

<a href="swanide://fragment/4e697ae8243a0dc5267b9d32d26ee7961572998042629" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    data: {
        disabled: true
    },
    onShow() {
        let that = this;
        const socketTask = swan.connectSocket({
            url: 'wss://echo.websocket.org',
            header: {},
            success: function (res) {
                swan.showToast({
                    title: 'websocket 已打开',
                    icon: 'none'
                });
                that.setData('disabled', false)
                console.log('connectSocket success', res.socketTaskId)
            },
            fail: function (err) {
                console.log('connectSocket fail', err);
            }
        });
        socketTask.onClose({
            success: res => {
                console.log('监听到关闭WebSocket', res);
            },
            fail: err => {
                console.log('监听WebSocket失败', err);
            }
        }),
        this.socketTask = socketTask
    },
    socketTaskClose() {
        this.socketTask.close({
            success: res => {
                swan.showToast({
                    title: '关闭WebSocket成功',
                    icon: 'none'
                });
                console.log('关闭WebSocket成功', res);
            },
            fail: err => {
                console.log('关闭WebSocket失败', err);
            }
        });
    }
});
```