---
title: swan.onSocketMessage
header: develop
nav: api
sidebar: websocket_swan-onSocketMessage
---


 

**解释**：监听 WebSocket 接受到服务器的消息事件

**方法参数**：Function callback

**`callback`参数说明**：WebSocket 接受到服务器的消息事件的回调函数

`callback`方法参数：Object res

`res`参数说明：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|data| String/ArrayBuffer | 是| |服务器返回的消息|
|dataType|String|否| |data 类型|

**示例**：

<a href="swanide://fragment/14dda81c7200e78411c206f55fd52f171572952663404" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    onSocketMessage(e) {
        swan.onSocketOpen(function () {
            swan.sendSocketMessage({
                data: 'baidu'
            });
        });
        swan.onSocketMessage(function (res) {
            console.log('收到服务器内容：', res.data);
        });

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
    }
});
```