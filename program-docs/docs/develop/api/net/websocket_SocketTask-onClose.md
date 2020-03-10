---
title: SocketTask.onClose
header: develop
nav: api
sidebar: websocket_SocketTask-onClose
---

 

**解释**：监听 WebSocket 连接关闭事件。

 
## 方法参数

Function callback

## 示例


<a href="swanide://fragment/3719998274e68270309d9331d12182261573408663337" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/socketTaskOnClose.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/taskonclose.gif">
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
    data: {
        disabled: false
    },
    onTap() {
        let that = this;
        that.setData('disabled', true);
        const socketTask = swan.connectSocket({
            url: 'wss://echo.websocket.org',
            header: {},
            success: function (res) {
                console.log('connectSocket success', res.socketTaskId);
            },
            fail: function (err) {
                console.log('connectSocket fail', err);
            }
        });
        
        socketTask.onOpen(function (res) {
            that.socketTaskClose();
        })
        socketTask.onClose(function (res) {
            console.log('socketTask.onClose success', res);
            swan.showModal({
                title: '监听关闭事件成功',
                content: JSON.stringify(res.reason)
            });
        }),
        this.socketTask = socketTask;
    },
    socketTaskClose() {
        let that = this
        this.socketTask.close({
            success: res => {
                that.setData('disabled', false);
                console.log('关闭WebSocket成功', res);
                swan.showToast({
                    title: '关闭WebSocket成功',
                    icon: 'none'
                });
            },
            fail: err => {
                console.log('关闭WebSocket失败', err);
            }
        });
    }
});
```