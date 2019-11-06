---
title: swan.closeSocket
header: develop
nav: api
sidebar: websocket_swan-closeSocket
---



**解释**：关闭 WebSocket 连接。必须在 WebSocket 打开期间调用 swan.closeSocket 才能关闭。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/closeSocket.png"  class="demo-qrcode-image" />

**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|code| Number | 否 | | 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。如果这个参数没有被指定，默认的取值是1000 （表示正常连接关闭）|
|reason| String | 否 | |一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于123字节的 UTF-8 文本（不是字符）|
|success   |Function  |  否  | | 接口调用成功的回调函数 |
|fail  |Function  |  否 接口调用失败的回调函数|
|complete   | Function   | 否 | |  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：

<a href="swanide://fragment/e12f46ff393bf12b2ceeb5118803725c1572996346704" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    onShow() {
        let that = this;
        swan.connectSocket({
            url: 'wss://echo.websocket.org',
            header: {},
            success: res => {
                console.log('connectSocket success', res);
                swan.showToast({
                    title: 'websocket已打开',
                    icon: 'none'
                });
            },
            fail: err => {
                console.log('connectSocket fail', err);
            }
        });
        swan.onSocketOpen(function () {
            that.setData({'openWebsocket': true})
        })
    },
    closeSocket() {
        //注意这里有时序问题，
        //如果 swan.connectSocket 还没回调 swan.onSocketOpen，而先调用 swan.closeSocket，那么就做不到关闭 WebSocket 的目的。
        //必须在 WebSocket 打开期间调用 swan.closeSocket 才能关闭。
        let openWebsocket = this.getData('openWebsocket')
        if (openWebsocket) {
            swan.closeSocket({
                code: '1001',
                reason: 'close reason',
                success: res => {
                    swan.showModal({
                        title: 'websocket已关闭',
                    });
                    console.log('WebSocket链接关闭成功', res);
                },
                fail: err => {
                    console.log('WebSocket链接关闭失败', err);
                }
            });
        }
    }
});
```

 
#### 错误码

* Andriod

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确  |
|302|找不到调起协议对应端能力方法|
|1001|执行失败|

* iOS

|错误码|说明|
|--|--|
|4|参数有误   |

