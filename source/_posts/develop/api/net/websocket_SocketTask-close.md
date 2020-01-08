---
title: SocketTask.close
header: develop
nav: api
sidebar: websocket_SocketTask-close
---



**解释**：关闭 WebSocket 连接

 
## 方法参数

Object object

### `object`参数说明  

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|code| Number | 否 | 1000 （表示正常连接关闭）|一个数字值表示关闭连接的状态号，表示连接被关闭的原因。如果这个参数没有被指定。|
|reason| String | 否 | |一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于123字节的 UTF-8 文本（不是字符）|
|success   |Function  |  否 || 接口调用成功的回调函数 |
|fail  |Function  |  否 || 接口调用失败的回调函数|
|complete   | Function   | 否 || 接口调用结束的回调函数（调用成功、失败都会执行）|

## 示例

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/socketTaskClose.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/taskclose.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### 代码示例1 

<a href="swanide://fragment/d1d8bd733fb20844c847e4494e6aeb1a1573406116849" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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
        this.socketTask = socketTask;

    },
    socketTaskClose() {
        let that = this;
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

### 代码示例2 - 参数全集 

<a href="swanide://fragment/f0c512ef4c7915ac9e7be017b03c75641575448859220" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
this.socketTask.close({
    code: 1000,
    reason: '正常关闭',
    success: res => {
        that.setData('disabled', false)
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
```

