---
title: swan.onSocketMessage
header: develop
nav: api
sidebar: websocket_swan-onSocketMessage
---


 

**解释**：监听 WebSocket 接受到服务器的消息事件

 
## 方法参数

Function callback

 `callback`参数说明  WebSocket 接受到服务器的消息事件的回调函数

`callback`方法参数：Object res

###  `res`参数说明：

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |: ---- | :---- |: ----|:----|
|data| String/ArrayBuffer | 是| |服务器返回的消息|
|dataType|String|否| |data 类型|


## 示例

<a href="swanide://fragment/d9b624d38bb041e59e309ca867a10d141572996994020" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/onSocketMessage.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/onMessage.gif">
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
    onSocketMessage(e) {
        swan.onSocketOpen(function () {
            swan.sendSocketMessage({
                data: 'baidu'
            });
        });
        swan.onSocketMessage(function (res) {
            swan.showModal({
                title: '监听到收到服务器内容',
                content: res.data
            });
        });

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
    }
});
```