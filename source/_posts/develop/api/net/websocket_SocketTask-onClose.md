---
title: SocketTask.onClose
header: develop
nav: api
sidebar: websocket_SocketTask-onClose
---

 

**解释**：监听 WebSocket 连接关闭事件。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/socketTaskOnClose.png"  class="demo-qrcode-image" />

**方法参数**：Function callback

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/onClose.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：

<a href="swanide://fragment/3989e0fdcd4998b441d5e4656630fcc71572998953990" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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
                swan.showToast({
                    title: '监听到关闭WebSocket',
                    icon: 'none'
                });
                console.log('监听到关闭WebSocket', res);
            },
            fail: err => {
                console.log('监听WebSocket失败', err);
            }
        }),
        this.socketTask = socketTask
    },
    socketTaskOnClose() {
        this.socketTask.close({
            success: res => {
                console.log('关闭WebSocket成功', res);
            },
            fail: err => {
                console.log('关闭WebSocket失败', err);
            }
        });
    }
});
```