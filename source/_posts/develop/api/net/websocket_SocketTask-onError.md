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

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/socketTaskonerror.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：

<a href="swanide://fragment/988ec5f9b41c4f603e4358ca69d54b041573407221622" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    socketTaskOnError() {
        const socketTask = swan.connectSocket({
            url: 'wss://xxx.websocket',
            header: {},
            success: function (res) {
                console.log('connectSocket success', res.socketTaskId);
            },
            fail: function (err) {
                console.log('connectSocket fail', err);
            }
        });
        socketTask.onError(function (res) {
            console.log('socketTask.onError success', res);
            swan.showModal({
                title: '监听错误发送事件成功',
                content: JSON.stringify(res);
            });
        }),
        this.socketTask = socketTask;
    }
});
```