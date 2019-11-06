---
title: swan.onSocketClose
header: develop
nav: api
sidebar: websocket_swan-onSocketClose
---

 

**解释**：监听 WebSocket 关闭。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/onSocketClose.png"  class="demo-qrcode-image" />

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

**示例**：

<a href="swanide://fragment/19f83edf472078bc9a5d645bd506b93b1572996481834" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 js 文件中

```js
Page({
    onShow() {
        swan.connectSocket({
            url: 'wss://echo.websocket.org',
            header: {},
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