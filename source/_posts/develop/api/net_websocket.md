---
title: WebSocket
header: develop
nav: api
sidebar: net_websocket
---
请参考[使用注意事项](http://smartprogram.baidu.com/docs/develop/api/net_rule/)进行开发。


**百度APP中扫码体验：**

<img src="	https://b.bdstatic.com/miniapp/assets/images/doc_demo/webSocket.png"  class="demo-qrcode-image" />

## swan.connectSocket

**解释**：创建一个 WebSocket 连接。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|url| String | 是 |-| 开发者服务器接口地址，必须是 wss 协议，且域名必须是后台配置的合法域名。|
|header| Object | 否 |-| HTTP Header，Header 中不能设置 Referer。|
|protocols| StringArray | 否 | -|子协议数组|
|success| Function | 否 |-|接口调用成功的回调函数|
|fail | Function | 否 |-|接口调用失败的回调函数|
|complete| Function | 否 |-| 接口调用结束的回调函数（调用成功、失败都会执行）|

**说明**：
* 基础库 1.9.4 之前，一个智能小程序同时只能有一个 WebSocket 连接，如果当前已存在一个 WebSocket 连接，会自动关闭该连接，并重新创建一个 WebSocket 连接。
* 基础库版本 1.9.4 及以后，支持存在多个 WebSokcet 连接，每次成功调用 swan.connectSocket 会返回一个新的 [SocketTask](https://smartprogram.baidu.com/docs/develop/api/net_websocket/#SocketTask) 。

**示例**：

<a href="swanide://fragment/a22e8de4dae980a6179ade70625f9fbf1569500084816" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
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

#### 错误码

* Andriod *

|错误码|说明|
|--|--|
|302|找不到调起协议对应端能力方法|
|202|解析失败，请检查参数是否正确 |
|1001|执行失败|

* iOS 

|错误码|说明errMsg|
|--|--|
|4|参数有误 |
|7|安全校验失败|
|errorCode为1|超过设置的最大task数量|
|errorCode为2|url/subProtocals错误|
|errorCode为3|创建task实例失败|

## swan.onSocketOpen

**解释**：监听 WebSocket 连接打开事件。

**方法参数**：Function callback

**`callback`参数说明**：WebSocket 连接打开事件的回调函数。

`callback`方法参数：Object res

`res`参数说明：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|header| Object | 是|-|连接成功的 HTTP 响应 Header。|

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

## swan.onSocketError

**解释**：监听 WebSocket 错误

**方法参数**：Function callback


**示例**：

<a href="swanide://fragment/a22e8de4dae980a6179ade70625f9fbf1569500084816" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    swan.onSocketError(function (res) {
        console.log('WebSocket连接打开出错，请检查！', res);
    });

    swan.connectSocket({
        url: 'wss://xxx.websocket.org',
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

## swan.sendSocketMessage

**解释**：通过 WebSocket 连接发送数据，需要先调用 swan.connectSocket，并在 swan.onSocketOpen 回调之后才能发送。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|data| String | 是 |-| 需要发送的内容|
|success   |Function  |  否  | -|接口调用成功的回调函数 |
|fail  |Function  |  否 | -| 接口调用失败的回调函数|
|complete   | Function   | 否 |-|  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：

<a href="swanide://fragment/a22e8de4dae980a6179ade70625f9fbf1569500084816" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    sendSocketMessage() {
        swan.onSocketOpen(function () {
            swan.sendSocketMessage({
                data: 'baidu',
                success: res => {
                    console.log('WebSocket发送数据成功', res);
                },
                fail: err => {
                    console.log('WebSocket发送数据失败', err);
                }
            });
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
    }
});
```

#### 错误码

* Andriod 
 
|错误码|说明|
|--|--|
|302|找不到调起协议对应端能力方法|
|202|解析失败，请检查参数是否正确 |
|1001|执行失败|

* iOS 

|错误码|说明|
|--|--|
|4|参数有误 |

## swan.onSocketMessage

**解释**：监听 WebSocket 接受到服务器的消息事件

**方法参数**：Function callback

**`callback`参数说明**：WebSocket 接受到服务器的消息事件的回调函数

`callback`方法参数：Object res

`res`参数说明：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|data| String/ArrayBuffer | 是|-|服务器返回的消息|
|dataType|String|否|-|data 类型|

**示例**：

<a href="swanide://fragment/a22e8de4dae980a6179ade70625f9fbf1569500084816" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    onSocketMessage() {
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
            protocols: [''],
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
<!-- #### 错误码

**iOS**

|错误码|说明|
|--|--|
|4|参数有误 | -->

## swan.closeSocket

**解释**：关闭 WebSocket 连接。
必须在 WebSocket 打开期间调用 swan.closeSocket 才能关闭。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|code| Number | 否 |-| 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。如果这个参数没有被指定，默认的取值是1000 （表示正常连接关闭）|
|reason| String | 否 | -|一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于123字节的 UTF-8 文本（不是字符）|
|success   |Function  |  否  |-| 接口调用成功的回调函数 |
|fail  |Function  |  否 |  -|接口调用失败的回调函数|
|complete   | Function   | 否 |-|  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：

<a href="swanide://fragment/a22e8de4dae980a6179ade70625f9fbf1569500084816" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    closeSocket() {
        //注意这里有时序问题，
        //如果 swan.connectSocket 还没回调 swan.onSocketOpen，而先调用 swan.closeSocket，那么就做不到关闭 WebSocket 的目的。
        //必须在 WebSocket 打开期间调用 swan.closeSocket 才能关闭。
        swan.onSocketOpen(function () {
            swan.closeSocket({
                code: '1001',
                reason: 'close reason',
                success: res => {
                    console.log('WebSocket链接关闭成功', res);
                },
                fail: err => {
                    console.log('WebSocket链接关闭失败', err);
                }
            });
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


## swan.onSocketClose

**解释**：监听 WebSocket 关闭。

**方法参数**：Function callback

**示例**：

<a href="swanide://fragment/a22e8de4dae980a6179ade70625f9fbf1569500084816" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 js 文件中

```js
Page({
    onSocketClose() {
        swan.onSocketOpen(function () {
            swan.closeSocket();
        });

        swan.onSocketClose(function (res) {
            console.log('WebSocket 已关闭！');
        })

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
    }
});
```

##  SocketTask

**解释**：WebSocket 任务，可通过 swan.connectSocket() 接口创建返回。
**示例**：

<a href="swanide://fragment/f13c9d8eb241c61a61c3a175111891d81559044298681" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view>
    <button type="primary" bindtap="send">send</button>
    <button type="primary" bindtap="close">close</button>
</view>
```

* 在 js 文件中

```js
Page({
    onLoad() {
        const webSocket = swan.connectSocket({
            url: 'wss://echo.websocket.org'
        });

        webSocket.onOpen(function (res) {
            console.log('WebSocket连接已打开！', res);
        });

        webSocket.onError(function (err) {
            console.log('WebSocket连接错误！', err);
        });

        webSocket.onMessage(function (res) {
            console.log('WebSocket接受到服务器的消息', res);
        });

        webSocket.onClose(function (res) {
            console.log('WebSocket连接已关闭！', res);
        });

        this.webSocket = webSocket;
    },
    send() {
        this.webSocket.send({
            data: 'baidu',
            success: res => {
                console.log('WebSocket发送数据成功', res);
            },
            fail: err => {
                console.log('WebSocket发送数据失败', err);
            }
        });
    },
    close() {
        this.webSocket.close({
            code: '1001',
            reason: 'close reason',
            success: res => {
                console.log('WebSocket链接关闭成功', res);
            },
            fail: err => {
                console.log('WebSocket链接关闭失败', err);
            }
        });
    }
});
```

 

## SocketTask.send

**解释**：通过 WebSocket 连接发送数据。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|data| String/ArrayBuffer | 是 | -|需要发送的内容|
|success   |Function  |  否  |-| 接口调用成功的回调函数 |
|fail  |Function  |  否 | -| 接口调用失败的回调函数|
|complete   | Function   | 否 | -| 接口调用结束的回调函数（调用成功、失败都会执行）|

## SocketTask.close

**解释**：关闭 WebSocket 连接

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|code| Number | 否 | 1000 （表示正常连接关闭）|一个数字值表示关闭连接的状态号，表示连接被关闭的原因。如果这个参数没有被指定。|
|reason| String | 否 | -|一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于123字节的 UTF-8 文本（不是字符）|
|success   |Function  |  否  |  -|接口调用成功的回调函数 |
|fail  |Function  |  否 |  -| 接口调用失败的回调函数|
|complete   | Function   | 否 |  -| 接口调用结束的回调函数（调用成功、失败都会执行）|


## SocketTask.onOpen


**解释**：监听 WebSocket 连接打开事件。

**方法参数**：Function callback

## SocketTask.onClose

**解释**：监听 WebSocket 连接关闭事件。

**方法参数**：Function callback

## SocketTask.onError

**解释**：监听 WebSocket 错误。

**方法参数**：Function callback


## SocketTask.onMessage


**解释**：监听 WebSocket 接受到服务器的消息事件。


**方法参数**：Function callback

**`callback`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|data| String/ArrayBuffer |是| -| 服务器返回的消息|

### bug&tips:

iOS 系统中当 websocket 链接后，重新连接时，可能一直处于 connecting 状态，将在11.10版本修复。