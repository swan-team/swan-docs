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


**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/taskonopen.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>


**代码示例**：

<a href="swanide://fragment/c0971dfd26e12cd56876819535843b171573042484363" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    data: {
        
    },
    onOpen() {
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
        socketTask.onOpen(function (res) {
            console.log('socketTask.onOpen success', res);
            swan.showModal({
                title: 'title',
                content: '监听打开事件成功'
            });
        }),
        this.socketTask = socketTask
    }
});
```