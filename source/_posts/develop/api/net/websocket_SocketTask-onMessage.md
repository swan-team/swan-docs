---
title: SocketTask.onMessage
header: develop
nav: api
sidebar: websocket_SocketTask-onMessage
---
 


**解释**：监听 WebSocket 接受到服务器的消息事件。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/socketTaskOnMessage.png"  class="demo-qrcode-image" />

**方法参数**：Function callback

**`callback`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|data| String/ArrayBuffer |是| | 服务器返回的消息|


**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/taskMessage.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>


**代码示例**：

<a href="swanide://fragment/8361e67ce6cbae996f9c2e393e28b9651573041915405" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js

Page({
    data: {
        disabled: true
    },
    onShow() {
        let that = this;
        const socketTask = swan.connectSocket({
            url: 'wss://echo.websocket.org',
            header: {},
            success: function (res) {
                swan.showToast({
                    title: 'websocket 已打开',
                    icon: 'none'
                });
                that.setData('disabled', false)
                console.log('connectSocket success', res.socketTaskId)
            },
            fail: function (err) {
                console.log('connectSocket fail', err);
            }
        });
        socketTask.onClose(function (res) {
            console.log('socketTask.onClose success', res);
            swan.showModal({
                title: 'title',
                content: '监听到关闭WebSocket事件成功'
            });
        }),
        this.socketTask = socketTask
    },
    socketTaskOnClose() {
        this.socketTask.close({
            success: res => {
                console.log('关闭WebSocket成功', res);
            },
            fail: err => {
                console.log('关闭WebSocket失败', err);
            }
        });
    }
});

```

### bug&tips:

iOS 系统中当 websocket 链接后，重新连接时，可能一直处于 connecting 状态，将在11.10版本修复。