### DownloadTask.onProgressUpdate

监听下载进度变化事件。

```js
DownloadTask.onProgressUpdate(callback)
```

**返回值：**

`Object` 类型的数据：

|属性|类型|描述|
|-|-|-|
|progress|number|下载进度百分比|
|totalBytesWritten|number|已经下载的数据长度，单位 Bytes|
|totalBytesExpectedToWrite|number|预期需要下载的数据总长度，单位 Bytes|