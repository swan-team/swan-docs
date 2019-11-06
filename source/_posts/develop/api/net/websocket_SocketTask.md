---
title: SocketTask
header: develop
nav: api
sidebar: websocket_SocketTask
---




**解释**：WebSocket 任务，可通过 swan.connectSocket() 接口创建返回。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/socketTask.png"  class="demo-qrcode-image" />

**方法参数**：无


**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/socketTask.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：

<a href="swanide://fragment/34c47f3104b2a70210d786e5bb9ce3731572997244307" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    socketTask() {
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
        console.log('res', socketTask);
        swan.showModal({
            title: 'socketTask',
            content: JSON.stringify(socketTask)
        });
    }
});
```

 
