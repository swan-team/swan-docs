---
title: 下载
layout: gamedoc
topic: net
categoryName: api
priority: 06-02
---

### swan.downloadFile()

下载文件资源到本地，客户端直接发起一个 HTTP GET 请求，返回文件的本地临时路径。

```js
swan.downloadFile(opts)
```

**参数值：**

|属性|类型|是否必填|描述|
|-|-|-|-|
|url|string|是|下载资源的 url|
|header|Object|否|HTTP 请求的 Header，Header 中不能设置 Referer|
|filePath|string|否|指定文件下载后存储的路径|
|success|function|否|接口调用成功的回调函数|
|fail|function|否|接口调用失败的回调函数|
|complete|function|否|接口调用完成的回调函数（接口成功、失败都会执行）|

**返回值：**

`Object` 类型的对象：

|属性|类型|描述|
|-|-|-|
|downloadTask|Object|DownloadTask 实例对象|

`success` 回调函数：

形如 `function (res) {...}`，其中：

|属性|类型|描述|
|-|-|-|
|res.tempFilePath|string|临时文件路径。如果没传入 filePath 指定文件存储路径，则下载后的文件会存储到一个临时文件	|
|res.statusCode|number|开发者服务器返回的 HTTP 状态码|

### DownloadTask

一个可以监听下载进度变化事件，以及取消下载任务的对象。


### DownloadTask.abort

中断下载任务。


### DownloadTask.onProgressUpdate

监听下载进度变化事件。

```js
DownloadTask.onProgressUpdate(callback)
```

**返回值：**

`Object` 类型的数据：

|属性|类型|描述|
|-|-|-|
|progress|number|下载进度百分比|
|totalBytesWritten|number|已经下载的数据长度，单位 Bytes|
|totalBytesExpectedToWrite|number|预期需要下载的数据总长度，单位 Bytes|


### DownloadTask.onHeadersReceived
> 基础库 1.7.0 开始支持

监听 HTTP Response Header 事件，会比请求完成事件更早。接受一个回调函数作为参数。

**参数值：**

|属性 |类型 |说明|
|---|---|---|
|callback| function| HTTP Response Header 事件的回调函数|

**回调函数参数：**

|属性 |类型 |说明|
|---|---|---|
|res |Object | 开发者服务器返回的对象|
|res.header	|Object	|开发者服务器返回的 HTTP Response Header|


### DownloadTask.offHeadersReceived
> 基础库 1.7.0 开始支持

取消监听 HTTP Response Header 事件。可接受回调函数作为参数

**参数值：**

|属性 |类型 |是否必填| 说明|
|---|---|---|
|callback| function| 否| HTTP Response Header 事件的回调函数|


**示例：**

```js
const downloadUrl = 'https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/pdf_open_parameters.pdf';
const path = 'bdfile://usr/test.pdf';

const task = swan.downloadFile({
    header: {
        'Cache-Control': 'no-cache'
    },
    filePath: path,
    url: downloadUrl,
    success: res => console.log('downloadFile数据：', JSON.stringify(res))
});

downloadTask.onHeadersReceived((res)=>{
    console.log(res);
});

downloadTask.offHeadersReceived();

task.onProgressUpdate(({progress, totalBytesWritten, totalBytesExpectedToWrite}) => {
    task.abort();
    console.log(`downloadFile progress:${progress}%, ${totalBytesWritten}/${totalBytesExpectedToWrite}`);
});

```