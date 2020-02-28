---
title: swan.connectSocket
header: develop
nav: api
sidebar: websocket
# webUrl: https://qft12m.smartapps.cn/api/webSocket/webSocket
---
请参考[使用注意事项](https://smartprogram.baidu.com/docs/develop/api/net/net_rule/)进行开发。




**解释**：创建一个 WebSocket 连接。

 

## 方法参数

Object object

### `object`参数说明  

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|url| String | 是 | | 开发者服务器接口地址，必须是 wss 协议，且域名必须是后台配置的合法域名。|
|header| Object | 否 | | HTTP Header，Header 中不能设置 Referer。|
|protocols| StringArray | 否 | |子协议数组|
|success| Function | 否 | |接口调用成功的回调函数|
|fail | Function | 否 | |接口调用失败的回调函数|
|complete| Function | 否 | | 接口调用结束的回调函数（调用成功、失败都会执行）|



## 示例

<a href="swanide://fragment/1241b261727079e050c52871830939491572951069253" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/connectSocket.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src=" https://b.bdstatic.com/miniapp/image/connect.gif ">
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
    connectSocket() {
        swan.connectSocket({
            url: 'wss://echo.websocket.org',
            success: res => {
                swan.showToast({
                    title: 'websocket 连接成功',
                    icon: 'none'
                });
                console.log('connectSocket success', res);
            },
            fail: err => {
                swan.showModal({
                    title: 'websocket 连接失败',
                    content: JSON.stringify(err)
                });
                console.log('connectSocket fail', err);
            }
        })
    } 
});
```

## 错误码

### Android  

|错误码|说明|
|:--|:--|
|302|找不到调起协议对应端能力方法|
|202|解析失败，请检查参数是否正确 |
|1001|执行失败|

### iOS 

|错误码|说明errMsg|
|:--|:--|
|4|参数有误 |
|7|安全校验失败|
|errorCode为1|超过设置的最大task数量|
|errorCode为2|url/subProtocals错误|
|errorCode为3|创建task实例失败|



## Bug & Tip 

* 基础库 1.9.4 之前，一个智能小程序同时只能有一个 WebSocket 连接，如果当前已存在一个 WebSocket 连接，会自动关闭该连接，并重新创建一个 WebSocket 连接。
* 基础库版本 1.9.4 及以后，支持存在多个 WebSokcet 连接，每次成功调用 swan.connectSocket 会返回一个新的 [SocketTask](https://smartprogram.baidu.com/docs/develop/api/net_websocket/#SocketTask) 。


















