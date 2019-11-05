---
title: UploadTask
header: develop
nav: api
sidebar: uploadTask
---


**解释**：上传任务对象

**方法参数**：无

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