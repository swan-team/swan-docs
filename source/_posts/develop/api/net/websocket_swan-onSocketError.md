---
title: swan.onSocketError
header: develop
nav: api
sidebar: websocket_swan-onSocketError
---


 

**解释**：监听 WebSocket 错误

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/onSocketError.png"  class="demo-qrcode-image" />

**方法参数**：Function callback

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/onSocketError.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**示例**：

<a href="swanide://fragment/da307c17be7e754db3914cce326cdbc51572996762746" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    onSocketError() {
        swan.onSocketError(function (res) {
            swan.showModal({
                title: '监听到webSocket连接出错，请检查！',
                content: JSON.stringify(res)
            })
            console.log('WebSocket连接打开出错，请检查！', res);
        });

        swan.connectSocket({
            url: 'wss://xxx.websocket',
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


 
#### 错误码

* Andriod

|错误码|说明|
|--|--|
|0|error happen    |

* iOS

|错误码|说明|
|--|--|
||Status error,current + 当前状态|
||Excedding max concurrency + 设置的最大并发数|