---
title: SocketTask
header: develop
nav: api
sidebar: websocket_SocketTask
---




**解释**：WebSocket 任务，可通过 swan.connectSocket() 接口创建返回。

**方法参数**：无


**示例**：

<a href="swanide://fragment/6d4912bc70732735e223a5a4998582e81572975999449" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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

 
