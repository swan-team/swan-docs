---
title: DownloadTask.onProgressUpdate
header: develop
nav: api
sidebar: downloadTask-onProgressUpdate
---

 

**解释**：监听下载进度变化

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/downTaskOnProgressUpdate.png"  class="demo-qrcode-image" />

**方法参数**：Function callback

**返回参数说明**：

|参数 | 类型 | 说明|
|---- | ---- | ---- |
|progress   | Number  |下载进度百分比|
|totalBytesWritten   | Number  |已经下载的数据长度，单位 Bytes。|
|totalBytesExpectedToWrite   | Number  |预期需要下载的数据总长度，单位 Bytes。|

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/downloadProcess.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：
 

<a href="swanide://fragment/bdedce15a8381fc4d56574519696df951572948912995" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    data: { 
        alreadyData: 0,
        targetData: 0
    },
    downloadFile() {      
        const downloadTask = swan.downloadFile({
            url: 'https://smartprogram.baidu.com/docs/img/file-simple.pdf',
            header: {
                'content-type': 'application/json'
            },
            success: res => {
                console.log(res.tempFilePath);

            },
            fail: err => {
                console.log('错误码：' + err.errCode);
                console.log('错误信息：' + err.errMsg);
            },
            complete: () => {
            
            }
        });
        downloadTask.onProgressUpdate(res => {
            console.log('上传进度', res.progress);
            this.setData({
                'progress': res.progress,
                'alreadyData': res.totalBytesWritten,
                'targetData': res.totalBytesExpectedToWrite
            })
            console.log('已经上传的数据长度', res.totalBytesWritten);
            console.log('预期需要上传的数据总长度', res.totalBytesExpectedToWrite);
        });
    }  
});

```