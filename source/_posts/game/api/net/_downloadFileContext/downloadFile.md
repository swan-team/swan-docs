### swan.downloadFile()

下载文件资源到本地，客户端直接发起一个 HTTP GET 请求，返回文件的本地临时路径。

```js
swan.downloadFile(opts)
```

**参数值**：

|属性|类型|是否必填|描述|
|-|-|-|-|
|url|string|是|下载资源的 url|
|header|Object|否|HTTP 请求的 Header，Header 中不能设置 Referer|
|filePath|string|否|指定文件下载后存储的路径|
|success|function|否|接口调用成功的回调函数|
|fail|function|否|接口调用失败的回调函数|
|complete|function|否|接口调用完成的回调函数（接口成功、失败都会执行）|

**返回值**：

`Object` 类型的对象：

|属性|类型|描述|
|-|-|-|
|downloadTask|Object|DownloadTask 实例对象|

`success` 回调函数：

形如 `function (res) {...}`，其中：

|属性|类型|描述|
|-|-|-|
|res.tempFilePath|string|临时文件路径。如果没传入 filePath 指定文件存储路径，则下载后的文件会存储到一个临时文件	|
|res.statusCode|number|开发者服务器返回的 HTTP 状态码|