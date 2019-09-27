---
title: 上传、下载
header: develop
nav: api
sidebar: net_uploadfile
---
请参考[使用注意事项](http://smartprogram.baidu.com/docs/develop/api/net_rule/)进行开发。

## swan.uploadFile

**解释**：将本地资源上传到开发者服务器，客户端发起一个 HTTPS POST 请求，其中 `content-type` 为 `multipart/form-data`
如页面通过 swan.chooseImage 等接口获取到一个本地资源的临时文件路径后，可通过此接口将本地资源上传到指定服务器。


**百度APP中扫码体验：**

<img src="	https://b.bdstatic.com/miniapp/assets/images/doc_demo/uploadFile.png"  class="demo-qrcode-image" />

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|url |String | 是  | -|开发者服务器 url|
|filePath  |  String | 是  |  -|要上传文件资源的路径|
|name  |  String | 是 | -| 文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容。|
|header | Object  |否 | -|HTTP 请求 Header, header 中不能设置 Referer 。|
|formData  |  Object  |否  | -| HTTP 请求中其他额外的 form data|
|success| Function |   否 |  -| 接口调用成功的回调函数|
|fail   | Function |   否  |  -|接口调用失败的回调函数|
|complete  |  Function  |  否  |  -|接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明**：

|参数 | 类型 | 说明|
|---- | ---- | ---- |
|data   | String  |开发者服务器返回的数据。|
|statusCode | Number | 开发者服务器返回的 HTTP 状态码。|

<a href="swanide://fragment/75303bc805bf42f2075a9e92b01b71131569499818191" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

**示例**

```js
swan.chooseImage({
    success: res => {
        swan.uploadFile({
            url: 'https://smartprogram.baidu.com/xxx', // 仅为示例，并非真实的接口地址
            filePath: res.tempFilePaths[0], // 要上传文件资源的路径
            name: 'myfile',
            header: {
                'content-type': 'application/json'
            },
            formData: {
                'user': 'test'
            },
            success: res => {
                console.log(res.statusCode);
            },
            fail: err => {
                console.log('错误码：' + err.errCode);
                console.log('错误信息：' + err.errMsg);
            }
        });
    }
});
```

**返回值**：

返回一个`uploadTask`对象，通过`uploadTask`，可监听上传进度变化事件，以及取消上传任务。

## UploadTask

**解释**：上传任务对象

**示例**

```js
const uploadTask = swan.uploadFile({
    url: 'https://smartprogram.baidu.com/xxx', //开发者服务器 url
    filePath: res.tempFilePaths[0], // 要上传文件资源的路径
    name: 'myfile',
    header: {
        'content-type': 'application/json'
    },
    formData: {
        'user': 'test'
    },
    success: res =>{
        console.log(res.statusCode);
    },
    fail: err => {
        console.log('错误码：' + err.errCode);
        console.log('错误信息：' + err.errMsg);
    }
});

uploadTask.onProgressUpdate(res => {
    console.log('上传进度', res.progress);
    console.log('已经上传的数据长度', res.totalBytesSent);
    console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend);
});

uploadTask.abort(); // 取消上传任务
```
 
#### 错误码

* Andriod

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法   |
|202|解析失败，请检查参数是否正确|
|1001|执行失败|

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确  |
|1|解析失败，请检查参数是否正确|

## UploadTask.onProgressUpdate

**解释**：监听上传进度变化

**方法参数**：Function callback

**返回参数说明**：

|参数 | 类型 | 说明|
|---- | ---- | ---- |
|progress   | Number  |上传进度百分比|
|totalBytesSent   | Number  |已经上传的数据长度，单位 Bytes。|
|totalBytesExpectedToSend   | Number  |预期需要上传的数据总长度，单位 Bytes。|

## UploadTask.abort

**解释**：中断上传任务

**方法参数**：无

## swan.downloadFile

**解释**：下载文件资源到本地，客户端直接发起一个 HTTP GET 请求，返回文件的本地临时路径。


**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/downloadFile.png"  class="demo-qrcode-image" />

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|url |String | 是  |  -|下载资源的 url|
|header | Object  |否  |  -|HTTP 请求 Header，header 中不能设置 Referer|
|success |Function |   否  | -| 下载成功后以 tempFilePath 的形式传给页面，res = {tempFilePath: '文件的临时路径'}|
|fail   | Function   | 否  |  -|接口调用失败的回调函数|
|complete  |  Function  |  否  |  -|接口调用结束的回调函数（调用成功、失败都会执行）|

**说明**：
* 文件的临时路径，在智能小程序本次启动期间可以正常使用，如需持久保存，需再主动调用 swan.saveFile，才能在智能小程序下次启动时访问得到；
* 请在 header 中指定合理的 Content-Type 字段，以保证客户端正确处理文件类型。
* 下载最大限制10MB。

**success返回参数说明**：

|参数 | 类型 | 说明|
|---- | ---- | ---- |
|tempFilePath  |  String  |临时文件路径，下载后的文件会存储到一个临时文件|
|statusCode | Number | 开发者服务器返回的 HTTP 状态码|


<a href="swanide://fragment/f4bec567044c2a9803528de722c7cc3e1569499921724" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

**示例**



* 在 js 文件中

```js
swan.downloadFile({
    url: 'https://smartprogram.baidu.com/xxx', //仅为示例，并非真实的资源
    header: {
        'content-type': 'application/json'
    },
    success: res => {
        //下载成功
        if (res.statusCode === 200) {
            console.log("临时文件路径" + res.tempFilePath);
        }
    },
    fail: err => {
        console.log('错误码：' + err.errCode);
        console.log('错误信息：' + err.errMsg);
    }
});
```

**返回值**：

返回一个 downloadTask 对象，通过 downloadTask ，可监听下载进度变化事件，以及取消下载任务。

## DownloadTask 


**解释**：下载任务对象

**示例**

* 在 js 文件中

```js
const downloadTask = swan.downloadFile({
    url: 'https://smartprogram.baidu.com/xxx', // 仅为示例，并非真实的资源
    header: {
        'content-type': 'application/json'
    },
    success: res =>{
        console.log(res.tempFilePath);
    },
    fail: err => {
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

**说明**：

uploadFile 上传文件大小限制为 25M。


 
## DownloadTask.onProgressUpdate

**解释**：监听下载进度变化

**方法参数**：Function callback

**返回参数说明**：

|参数 | 类型 | 说明|
|---- | ---- | ---- |
|progress   | Number  |下载进度百分比|
|totalBytesWritten   | Number  |已经下载的数据长度，单位 Bytes。|
|totalBytesExpectedToWrite   | Number  |预期需要下载的数据总长度，单位 Bytes。|

## DownloadTask.abort

**解释**：中断下载任务

**方法参数**：无

#### 错误码

* Andriod

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确  |
|1001|执行错误|

* iOS

|错误码|说明errMsg|
|--|--|
|202|解析失败，请检查参数是否正确  |
|1001|请求文件超过10M|
|1002|无法确定下载文件大小|