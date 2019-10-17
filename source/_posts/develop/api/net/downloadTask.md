---
title: DownloadTask 
header: develop
nav: api
sidebar: downloadTask 
---

 


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

