---
title: swan.onSocketClose
header: develop
nav: api
sidebar: websocket_swan-onSocketClose
---

 

**解释**：监听 WebSocket 关闭。

## 方法参数

Function callback

## 示例

<a href="swanide://fragment/84ceaad32308575a769b2475b7594b691573403059070" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/onSocketClose.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  

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

### 代码示例 




* 在 js 文件中

```js
Page({
    onSocketClose() {
        this.setData('disabled', true)
        swan.onSocketOpen(function () {
            swan.closeSocket();
        });
        let that = this;
        swan.onSocketClose(function (res) {
            that.setData('disabled', false);
            swan.showToast({
                title: '监听到WebSocket已关闭',
                icon: 'none'
            });
            console.log('监听到WebSocket已关闭');
        });

        swan.connectSocket({
            url: 'wss://echo.websocket.org',
            header: {},
            success: function (res) {
                console.log('connectSocket success', res);
            },
            fail: function (err) {
                console.log('connectSocket fail', err);
            }
        });
    }
});
```