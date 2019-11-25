---
title: swan.onSocketOpen
header: develop
nav: api
sidebar: websocket_swan-onSocketOpen
---

 
**解释**：监听 WebSocket 连接打开事件。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/onSocketOpen.png"  class="demo-qrcode-image" />


**方法参数**：Function callback

**`callback`参数说明**：WebSocket 连接打开事件的回调函数。

`callback`方法参数：Object res

`res`参数说明：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|header| Object | 是| |连接成功的 HTTP 响应 Header。|


**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/onOpen.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：

<a href="swanide://fragment/f05c1cbaaa8d2bfc338ac531901064ee1572997062469" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    onSocketOpen(){
        swan.onSocketOpen(function (res) {
            swan.showToast({
                title: '监听到WebSocket连接已打开',
                content: JSON.stringify(res)
            })
            console.log('WebSocket连接已打开！', res);
        });

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
