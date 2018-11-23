---
title: 网络
header: develop
nav: api
sidebar: net
---


网络 API 列表
---
|API | 说明 |
|---- | ---- |
|<a href="https://smartprogram.baidu.com/docs/develop/api/net_request/#request">request</a>  | 发起网络请求 |
|<a href="https://smartprogram.baidu.com/docs/develop/api/net_uploadfile/#uploadFile">uploadFile</a>| 上传 |
|<a href="https://smartprogram.baidu.com/docs/develop/api/net_uploadfile/#downloadFile">downloadFile</a> |下载  |  
|<a href="https://smartprogram.baidu.com/docs/develop/api/net_websocket/#connectSocket">connectSocket</a>|创建一个 WebSocket 连接|
|<a href="https://smartprogram.baidu.com/docs/develop/api/net_websocket/#onSocketOpen">onSocketOpen</a>|监听 WebSocket 连接打开事件|
|<a href="https://smartprogram.baidu.com/docs/develop/api/net_websocket/#onSocketError">onSocketError</a>|监听 WebSocket 错误|
|<a href="https://smartprogram.baidu.com/docs/develop/api/net_websocket/#sendSocketMessage">sendSocketMessage</a>|通过 WebSocket 连接发送数据，需要先调用 swan.connectSocket，并在 swan.onSocketOpen 回调之后才能发送。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/net_websocket/#onSocketMessage">onSocketMessage</a>|监听 WebSocket 接受到服务器的消息事件|
|<a href="https://smartprogram.baidu.com/docs/develop/api/net_websocket/#clouseSocketMessage">closeSocket</a>|关闭 WebSocket 连接。必须在 WebSocket 打开期间调用 swan.closeSocket 才能关闭。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/net_websocket/#onSocketClose">onSocketClose</a>|监听 WebSocket 关闭|
|<a href="https://smartprogram.baidu.com/docs/develop/api/net_websocket/#SocketTask">SocketTask</a>|WebSocket 任务，可通过 swan.connectSocket() 接口创建返回。|


## 网络 API 使用注意事项
### 服务器域名配置

每个智能小程序需要事先设置一个通讯域名，小程序可以跟指定的域名与进行网络通信。包括普通 HTTPS 请求（request）、上传文件（uploadFile）、下载文件（downloadFile) 和 WebSocket 通信（connectSocket）。
### 配置流程

服务器域名请在 “智能小程序后台->设置->开发设置-><a href="https://smartprogram.baidu.com/mappconsole/main/set?tabCur=1">服务器域名</a>” 中进行配置，配置时需要注意：
*    域名只支持 https (request、uploadFile、downloadFile) 和 wss (socket) 协议；
*    域名不能使用 IP 地址、localhost或端口号；
*    域名必须经过 ICP 备案；
*    出于安全考虑，openapi.baidu.com 不能被配置为服务器域名，相关API也不能在小程序内调用。开发者应将 App Secret 保存到自有后台服务器中，通过服务器使用App Secret获取 access_token，并调用相关 API；
*    对于每个接口，分别可以配置最多 20 个域名。


<!-- 请求
-----

### request

**解释：**发起网络请求

**方法参数：**Object

**Object参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|url |String | 是   ||    开发者服务器接口地址|
|data  |  Object/String  | 否  ||     请求的参数|
|header | Object | 否    ||   设置请求的 header，header 中不能设置 Referer|
|method | String | 否  | GET （需大写）|有效值：OPTIONS, GET, HEAD, POST, PUT, DELETE|
|dataType   | String | 否  | json  |  如果设为 json，会尝试对返回的数据做一次 JSON.parse|
|success |Function    |否 ||      收到开发者服务成功返回的回调函数|
|fail |   Function|    否  ||     接口调用失败的回调函数|
|complete  |  Function  |  否   ||    接口调用结束的回调函数（调用成功、失败都会执行）|


**success 返回参数说明：**

|参数 | 类型 | 说明  |
|---- | ---- | ---- |
|data  |  Object/String  | 开发者服务器返回的数据|
|statusCode | Number | 开发者服务器返回的 HTTP 状态码|
|header | Object | 开发者服务器返回的 HTTP Response Header|

**data 数据说明：**

最终发送给服务器的数据是 String 类型，如果传入的 data 不是 String 类型，会被转换成 String 。转换规则如下：

1、对于 GET 方法的数据，会将数据转换成 query string（encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...）
2、对于 POST 方法且 header['content-type'] 为 application/json 的数据，会对数据进行 JSON 序列化
3、对于 POST 方法且 header['content-type'] 为 application/x-www-form-urlencoded 的数据，会将数据转换成 query string （encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...）

**示例：**

```js
swan.request({
    url: 'https://smartprogram.baidu.com/xxx', //开发者服务器接口地址
    method: 'GET',
    dataType: 'json',
    data: {
        key: 'value'
    },
    header: {
        'content-type': 'application/json' // 默认值
    },
    success: function (res) {
        console.log(res.data);
    },
    fail: function (err) {
        console.log('错误码：' + err.errCode);
        console.log('错误信息：' + err.errMsg);
    }
});
```

**返回值：**

返回一个 requestTask 对象，通过 requestTask，可中断请求任务。

**requestTask 对象的方法列表：**

|方法 | 参数 | 说明  |
|---- | ---- | ---- |
|abort  |      | 中断请求任务 |

**示例：**

```js
const requestTask = swan.request({
    url: 'test.php', //仅为示例，并非真实的接口地址
    data: {
        x: '' ,
        y: ''
    },
    header: {
        'content-type': 'application/json'
    },
    success: function(res) {
        console.log(res.data)
    }
});
//取消请求任务
requestTask.abort();
```

**Bug & Tip**
1、tip: content-type 默认为 'application/json'。
2、tip: url 中不能有端口。

上传、下载
-----

### uploadFile

**解释：**将本地资源上传到开发者服务器，客户端发起一个 HTTPS POST 请求，其中 `content-type` 为 `multipart/form-data`
如页面通过 swan.chooseImage 等接口获取到一个本地资源的临时文件路径后，可通过此接口将本地资源上传到指定服务器。

**方法参数：**Object

**Object参数说明：**

|参数 | 类型 | 必填 | 说明|
|---- | ---- | ---- | ----|
|url |String | 是  | 开发者服务器 url|
|filePath  |  String | 是  | 要上传文件资源的路径|
|name  |  String | 是 |  文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容|
|header | Object  |否 |  HTTP 请求 Header, header 中不能设置 Referer|
|formData  |  Object  |否  | HTTP 请求中其他额外的 form data|
|success| Function |   否 |  接口调用成功的回调函数|
|fail   | Function |   否  | 接口调用失败的回调函数|
|complete  |  Function  |  否  | 接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明：**

|参数 | 类型 | 说明|
|---- | ---- | ---- |
|data   | String  |开发者服务器返回的数据|
|statusCode | Number | 开发者服务器返回的 HTTP 状态码|

**示例：**

```js
swan.chooseImage({
    success: function (res) {
        swan.uploadFile({
            url: 'https://smartprogram.baidu.com/xxx', // 开发者服务器 url
            filePath: res.tempFilePaths[0], // 要上传文件资源的路径
            name: 'myfile',
            success: function (res) {
                console.log(res.statusCode);
            },
            fail: function (err) {
                console.log('错误码：' + err.errCode);
                console.log('错误信息：' + err.errMsg);
            }
        });
    }
});
```

**返回值：**

返回一个`uploadTask`对象，通过`uploadTask`，可监听上传进度变化事件，以及取消上传任务。

**uploadTask 对象的方法列表：**

|方法 | 类型 | 说明|
|---- | ---- | ---- |
|onProgressUpdate   | callback  |监听上传进度变化|
|abort |  | 中断上传任务|

**onProgressUpdate 返回参数说明：**

|参数 | 类型 | 说明|
|---- | ---- | ---- |
|progress   | Number  |上传进度百分比|
|totalBytesSent   | Number  |已经上传的数据长度，单位 Bytes|
|totalBytesExpectedToSend   | Number  |预期需要上传的数据总长度，单位 Bytes|

**示例：**

```js
const uploadTask = swan.uploadFile({
    url: 'https://smartprogram.baidu.com/xxx', //开发者服务器 url
    filePath: res.tempFilePaths[0], // 要上传文件资源的路径
    name: 'myfile',
    success: function (res){
        console.log(res.statusCode);
    },
    fail: function (err) {
        console.log('错误码：' + err.errCode);
        console.log('错误信息：' + err.errMsg);
    }
});

uploadTask.onProgressUpdate(res => {
    console.log('上传进度', res.progress)
    console.log('已经上传的数据长度', res.totalBytesSent)
    console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
});

uploadTask.abort(); // 取消上传任务
```

### downloadFile

**解释：**下载文件资源到本地，客户端直接发起一个 HTTP GET 请求，返回文件的本地临时路径

**方法参数：**Object

**Object参数说明：**

|参数 | 类型 | 必填 | 说明|
|---- | ---- | ---- | ----|
|url |String | 是  | 下载资源的 url|
|header | Object  |否  | HTTP 请求 Header，header 中不能设置 Referer|
|success |Function |   否  | 下载成功后以 tempFilePath 的形式传给页面，res = {tempFilePath: '文件的临时路径'}|
|fail   | Function   | 否  | 接口调用失败的回调函数|
|complete  |  Function  |  否  | 接口调用结束的回调函数（调用成功、失败都会执行）|

**注意：文件的临时路径，在智能小程序本次启动期间可以正常使用，如需持久保存，需再主动调用 swan.saveFile，才能在智能小程序下次启动时访问得到。注：请在 header 中指定合理的 Content-Type 字段，以保证客户端正确处理文件类型**

**success返回参数说明：**

|参数 | 类型 | 说明|
|---- | ---- | ---- |
|tempFilePath  |  String  |临时文件路径，下载后的文件会存储到一个临时文件|
|statusCode | Number | 开发者服务器返回的 HTTP 状态码|

**示例：**

```js
swan.downloadFile({
    url: 'https://smartprogram.baidu.com/xxx', //仅为示例，并非真实的资源
    success: function (res) {
        //下载成功
        if (res.statusCode === 200) {
            console.log("临时文件路径" + res.tempFilePath);
        }
    },
    fail: function (err) {
        console.log('错误码：' + err.errCode);
        console.log('错误信息：' + err.errMsg);
    }
});
```

**返回值：**
返回一个 downloadTask 对象，通过 downloadTask ，可监听下载进度变化事件，以及取消下载任务。

**downloadTask 对象的方法列表：**

|方法 | 类型 | 说明|
|---- | ---- | ---- |
|onProgressUpdate   | callback  |监听上传进度变化|
|abort |  | 中断下载任务|

**onProgressUpdate 返回参数说明：**

|参数 | 类型 | 说明|
|---- | ---- | ---- |
|progress   | Number  |下载进度百分比|
|totalBytesWritten   | Number  |已经下载的数据长度，单位 Bytes|
|totalBytesExpectedToWrite   | Number  |预期需要下载的数据总长度，单位 Bytes|

**示例：**

```js
const downloadTask = swan.downloadFile({
    url: 'https://smartprogram.baidu.com/xxx', //开发者服务器 url
    success: function (res){
        console.log(res.tempFilePath);
    },
    fail: function (err) {
        console.log('错误码：' + err.errCode);
        console.log('错误信息：' + err.errMsg);
    }
});

downloadTask.onProgressUpdate(res => {
    console.log('下载进度', res.progress);
    console.log('已经下载的数据长度', res.totalBytesWritten);
    console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite);
});

downloadTask.abort(); // 取消下载任务
```

**Bug & Tip**

1、tip: uploadFile 上传文件大小限制为 25M。

WebSocket
-----

### connectSocket

**解释：**创建一个 WebSocket 连接。

**参数：**Object

**基础库 1.9.4 之前，一个智能小程序同时只能有一个 WebSocket 连接，如果当前已存在一个 WebSocket 连接，会自动关闭该连接，并重新创建一个 WebSocket 连接。基础库版本 1.9.4 及以后，支持存在多个 WebSokcet 连接，每次成功调用 swan.connectSocket 会返回一个新的 SocketTask。**

**Object参数说明：**

|属性名 |类型  |　是否必须|说明|
|---- | ---- |--- |---- |
|url| String | 是 | 开发者服务器接口地址，必须是 wss 协议，且域名必须是后台配置的合法域名|
|protocolsArray| StringArray | 否 | 子协议数组|
|success| Function | 否 |接口调用成功的回调函数|
|fail | Function | 否 |接口调用失败的回调函数|
|complete| Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

```js
swan.connectSocket({
    url: 'wss://example.baidu.com'
});
```

### onSocketOpen

**解释：**监听 WebSocket 连接打开事件。

**参数：**CALLBACK

**callback 回调结果说明：**

|属性名 |类型  |　说明|
|---- | ---- |--- |---- |
|header| object | 连接成功的 HTTP 响应 Header|

**示例：**

```js
swan.connectSocket({
    url: 'wss://example.baidu.com'
});
swan.onSocketOpen(function(res) {
    console.log('WebSocket连接已打开！', res.header);
});
```

### onSocketError

**解释：**监听 WebSocket 错误

**参数：**CALLBACK

**示例：**
```js
swan.connectSocket({
    url: 'wss://example.baidu.com'
});
swan.onSocketError(function (res) {
    console.log('WebSocket连接打开失败，请检查！');
});
```

### sendSocketMessage

**解释：**通过 WebSocket 连接发送数据，需要先调用 swan.connectSocket，并在 swan.onSocketOpen 回调之后才能发送。

**参数：**Object

**Object参数说明：**

|属性名 |类型  |　是否必须|说明|
|---- | ---- |--- |---- |
|data| String/ArrayBuffer | 是 | 需要发送的内容|
|success   |Function  |  否  | 接口调用成功的回调函数 |
|fail  |Function  |  否 |  接口调用失败的回调函数|
|complete   | Function   | 否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

```js
swan.connectSocket({
    url: 'wss://example.baidu.com'
});
swan.onSocketOpen(function() {
    swan.sendSocketMessage({
        data: 'baidu'
    });
});
```

### onSocketMessage

**解释：**监听 WebSocket 接受到服务器的消息事件

**参数：**CALLBACK

**callback 回调结果说明：**

|属性名 |类型  |　说明|
|---- | ---- |--- |---- |
|data| String/ArrayBuffer | 服务器返回的消息|

**示例：**

```js
swan.connectSocket({
    url: 'wss://example.baidu.com'
});
swan.onSocketOpen(function () {
    swan.sendSocketMessage({
        data: 'baidu'
    });
});
swan.onSocketMessage(function (res) {
    console.log('收到服务器内容：', res.data);
});
```

### closeSocket

**解释：**关闭 WebSocket 连接。
必须在 WebSocket 打开期间调用 swan.closeSocket 才能关闭。

**参数：**Object

**Object参数说明：**

|属性名 |类型  |　是否必须|说明|
|---- | ---- |--- |---- |
|code| Number | 否 | 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。如果这个参数没有被指定，默认的取值是1000 （表示正常连接关闭）|
|reason| String | 否 | 一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于123字节的 UTF-8 文本（不是字符）|
|success   |Function  |  否  | 接口调用成功的回调函数 |
|fail  |Function  |  否 |  接口调用失败的回调函数|
|complete   | Function   | 否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

```js
swan.connectSocket({
    url: 'wss://example.baidu.com',
    success: function (res) {
        swan.closeSocket();
    }
});
```

### onSocketClose

**解释：**监听 WebSocket 关闭。

**参数：**CALLBACK

**示例：**

```js
swan.connectSocket({
    url: 'wss://example.baidu.com'
});

swan.onSocketClose(function (res) {
    console.log('WebSocket 已关闭！');
})

swan.onSocketOpen(function () {
    swan.closeSocket();
});
```

### SocketTask

**解释：**WebSocket 任务，可通过 swan.connectSocket() 接口创建返回。

**方法**

#### SocketTask.send

通过 WebSocket 连接发送数据。

**Object参数说明：**

|属性名 |类型  |　是否必须|说明|
|---- | ---- |--- |---- |
|data| String/ArrayBuffer | 是 | 需要发送的内容|
|success   |Function  |  否  | 接口调用成功的回调函数 |
|fail  |Function  |  否 |  接口调用失败的回调函数|
|complete   | Function   | 否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

#### SocketTask.close

**Object参数说明：**

|属性名 |类型  |　是否必须|说明|
|---- | ---- |--- |---- |
|code| Number | 否 | 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。如果这个参数没有被指定，默认的取值是1000 （表示正常连接关闭）|
|reason| String | 否 | 一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于123字节的 UTF-8 文本（不是字符）|
|success   |Function  |  否  | 接口调用成功的回调函数 |
|fail  |Function  |  否 |  接口调用失败的回调函数|
|complete   | Function   | 否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

#### SocketTask.onOpen

监听 WebSocket 连接打开事件。

#### SocketTask.onClose

监听 WebSocket 连接关闭事件。

#### SocketTask.onError

监听 WebSocket 错误。

#### SocketTask.onMessage

监听 WebSocket 接受到服务器的消息事件。

**callback 回调结果说明：**

|属性名 |类型  |　说明|
|---- | ---- |--- |---- |
|data| String/ArrayBuffer | 服务器返回的消息| -->
