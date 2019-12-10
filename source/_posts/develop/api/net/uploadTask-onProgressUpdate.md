---
title: UploadTask.onProgressUpdate
header: develop
nav: api
sidebar: uploadTask-onProgressUpdate
---



**解释**：监听上传进度变化

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/uploadTaskOnProgressUpdate.png"  class="demo-qrcode-image" />

**方法参数**：Function callback

**返回参数说明**：

|参数 | 类型 | 说明|
|---- | ---- | ---- |
|progress   | Number  |上传进度百分比|
|totalBytesSent   | Number  |已经上传的数据长度，单位 Bytes。|
|totalBytesExpectedToSend   | Number  |预期需要上传的数据总长度，单位 Bytes。|


**图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/upLoadProcess.gif ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**

<a href="swanide://fragment/8399420459bb1f1e3b7a53beb68290a11572945456510" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js

Page({
    data: { 
        alreadyData: 0,
        targetData: 0
    },
    uploadFile(){
        swan.chooseImage({
            success: res => {
                const uploadTask = swan.uploadFile({
                    url: 'https://smartprogram.baidu.com/xxx', //开发者服务器 url
                    filePath: res.tempFilePaths[0], // 要上传文件资源的路径
                    name: 'myfile',
                    header: {
                        'content-type': 'application/json'
                    },
                    formData: {
                        'user': 'swan'
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
                    this.setData({
                        'progress': res.progress,
                        'alreadyData': res.totalBytesSent,
                        'targetData': res.totalBytesExpectedToSend
                    })
                    console.log('已经上传的数据长度', res.totalBytesSent);
                    console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend);
                });
            }
        })
    }
});

```