---
title: swan.onSocketClose
header: develop
nav: api
sidebar: websocket_swan-onSocketClose
---

 

**解释**：监听 WebSocket 关闭。

**方法参数**：Function callback

**示例**：

<a href="swanide://fragment/1d09352a3e3691f94d12209039e669f01572953946905" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 js 文件中

```js
Page({
    onShow() {
        swan.connectSocket({
            url: 'wss://echo.websocket.org',
            header: {},
            protocols: ['name'],
            success: res => {
                console.log('connectSocket success', res);
            },
            fail: err => {
                console.log('connectSocket fail', err);
            }
        });
    },
    onSocketClose() {
        swan.closeSocket({
            code: '1001',
            reason: 'close reason',
            success: res => {
                console.log('WebSocket链接关闭成功', res);
            },
            fail: err => {
                console.log('WebSocket链接关闭失败', err);
            }
        });
        swan.onSocketClose(function (res) {
            swan.showModal({
                title: '',
                content: '监听到WebSocket已关闭'
            });
            console.log('WebSocket 已关闭！');
        })
    } 
});
```