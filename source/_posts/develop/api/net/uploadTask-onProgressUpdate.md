---
title: UploadTask.onProgressUpdate
header: develop
nav: api
sidebar: uploadTask-onProgressUpdate
---



**解释**：监听上传进度变化

**方法参数**：Function callback

**返回参数说明**：

|参数 | 类型 | 说明|
|---- | ---- | ---- |
|progress   | Number  |上传进度百分比|
|totalBytesSent   | Number  |已经上传的数据长度，单位 Bytes。|
|totalBytesExpectedToSend   | Number  |预期需要上传的数据总长度，单位 Bytes。|