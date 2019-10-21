---
title: swan.uploadFile
header: develop
nav: api
sidebar: uploadfile
---
请参考[使用注意事项](http://smartprogram.baidu.com/docs/develop/api/net_rule/)进行开发。



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

**fail 返回值参数说明**：

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



**示例**：

<a href="swanide://fragment/839d1e92d253116528c330a82ec6124d1569413746044" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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


 








 




