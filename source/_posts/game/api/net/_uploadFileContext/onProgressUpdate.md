### UploadTask.onProgressUpdate

监听上传进度变化事件。

```js
UploadTask.onProgressUpdate(callback)
```

**返回值：**

`Object` 类型的数据：

|属性|类型|描述|
|-|-|-|
|progress|number|上传进度百分比|
|totalBytesSent|number|已经上传的数据长度，单位 Bytes|
|totalBytesExpectedToSend|number|预期需要上传的数据总长度，单位 Bytes|