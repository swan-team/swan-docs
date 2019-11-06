---
title: swan.downloadFile
header: develop
nav: api
sidebar: downloadFile
---



**解释**：下载文件资源到本地，客户端直接发起一个 HTTP GET 请求，返回文件的本地临时路径。


**百度APP中扫码体验：**

<img src="	https://b.bdstatic.com/miniapp/assets/images/doc_demo/downloadFile.png"  class="demo-qrcode-image" />

**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|url |String | 是 || 下载资源的 url|
|header | Object  |否 || HTTP 请求 Header，header 中不能设置 Referer|
|success |Function |   否  | | 下载成功后以 tempFilePath 的形式传给页面，res = {tempFilePath: '文件的临时路径'}|
|fail   | Function   | 否||  接口调用失败的回调函数|
|complete  |  Function  |  否 || 接口调用结束的回调函数（调用成功、失败都会执行）|

**说明**：
* 文件的临时路径，在智能小程序本次启动期间可以正常使用，如需持久保存，需再主动调用 swan.saveFile，才能在智能小程序下次启动时访问得到；
* 请在 header 中指定合理的 Content-Type 字段，以保证客户端正确处理文件类型。
* 下载最大限制10MB。

**success 返回参数说明**：

|参数 | 类型 | 说明|
|---- | ---- | ---- |
|tempFilePath  |  String  |临时文件路径，下载后的文件会存储到一个临时文件|
|statusCode | Number | 开发者服务器返回的 HTTP 状态码|

**fail 返回参数说明**：


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



**示例**

<a href="swanide://fragment/0bac1c0d10ee17ce6be023aac81a8c381572945831796" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
swan.downloadFile({
    url: 'https://smartprogram.baidu.com/docs/img/file-simple.pdf',
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

返回一个 downloadTask 对象，通过 downloadTask，可监听下载进度变化事件，以及取消下载任务。
