---
title: LoadSubpackageTask
layout: gamedoc
topic: subpackages
categoryName: api
priority: 03-02
---

加载分包的任务，用于获取分包加载状态。

### onProgressUpdate()

监听分包加载进度变化。

```js
loadSubpackageTask.onProgressUpdate(callback)
```

**参数值：**

|参数|类型|是否必填|描述|
|-|-|-|-|-|-|
|callback|function|是|进度变化的回调函数。|

**回调函数参数值：**

|属性|类型|描述|
|-|-|-|-|-|-|
|res|Object|回调函数的参数|
|res.progress|number|分包下载进度百分比|
|res.totalBytesWritten|number|已经下载的数据长度，单位 Bytes|
|res.totalBytesExpectedToWrite|number|数据总长度，单位 Bytes|
