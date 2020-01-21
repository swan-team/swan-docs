---
title: SocketTask.send
header: develop
nav: api
sidebar: websocket_SocketTask-send
---
  

**解释**：通过 WebSocket 连接发送数据。

 
## 方法参数 

Object object

### `object`参数说明  

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |: ---- | :---- |: ----|:----|
|data| String/ArrayBuffer | 是 | |需要发送的内容|
|success   |Function  |  否  | | 接口调用成功的回调函数 |
|fail  |Function  |  否 | | 接口调用失败的回调函数|
|complete   | Function   | 否 | | 接口调用结束的回调函数（调用成功、失败都会执行）|

## 示例

<a href="swanide://fragment/fcb725c6e572878cb2ed15780a5ded7e1573404090822" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/socketTaskSend.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/taskSend.gif">
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
    onShow() {
        const socketTask = new Promise((resolve, reject) => {
            const socketHandler = swan.connectSocket({
                url: 'wss://echo.websocket.org',
                header: {},
                success: function (res) {
                    console.log('connectSocket success', res.socketTaskId)
                },
                fail: function (err) {
                    reject(err);
                    console.log('connectSocket fail', err);
                }
            });
            socketHandler.onOpen(function () {
                resolve(socketHandler);
            });
        });
        this.socketTask = socketTask;
    },

    socketTaskSend() {
       this.socketTask.then(socketHandler => {
            socketHandler.send({
                data: 'baidu',
                success: res => {
                    swan.showToast({
                        title: '发送数据成功'
                    });
                    console.log('WebSocket发送数据成功', res);
                },
                fail: err => {
                    console.log('WebSocket发送数据失败', err);
                }
            });
       })
    }
});

```