---
title: swan.onSocketClose
header: develop
nav: api
sidebar: websocket_swan-onSocketClose
---

 

**解释**：监听 WebSocket 关闭。

**方法参数**：Function callback

**示例**：

<a href="swanide://fragment/f13c9d8eb241c61a61c3a175111891d81559044298681" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 js 文件中

```js
Page({
    onSocketClose() {
        swan.onSocketOpen(function () {
            swan.closeSocket();
        });

        swan.onSocketClose(function (res) {
            console.log('WebSocket 已关闭！');
        })

        swan.connectSocket({
            url: 'wss://echo.websocket.org',
            header: {},
            protocols: [''],
            success: res => {
                console.log('connectSocket success', res);
            },
            fail: err => {
                console.log('connectSocket fail', err);
            }
        });
    }
});
```