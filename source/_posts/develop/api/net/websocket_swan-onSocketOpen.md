---
title: swan.onSocketOpen
header: develop
nav: api
sidebar: websocket_swan-onSocketOpen
---

 
**解释**：监听 WebSocket 连接打开事件。

**方法参数**：Function callback

**`callback`参数说明**：WebSocket 连接打开事件的回调函数。

`callback`方法参数：Object res

`res`参数说明：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|header| Object | 是| |连接成功的 HTTP 响应 Header。|

**示例**：

<a href="swanide://fragment/a22e8de4dae980a6179ade70625f9fbf1569500084816" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    swan.onSocketOpen(function (res) {
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
});
```
