---
title: DownloadTask.onProgressUpdate
header: develop
nav: api
sidebar: downloadTask-onProgressUpdate
---

 

**解释**：监听下载进度变化

**方法参数**：Function callback

**返回参数说明**：

|参数 | 类型 | 说明|
|---- | ---- | ---- |
|progress   | Number  |下载进度百分比|
|totalBytesWritten   | Number  |已经下载的数据长度，单位 Bytes。|
|totalBytesExpectedToWrite   | Number  |预期需要下载的数据总长度，单位 Bytes。|