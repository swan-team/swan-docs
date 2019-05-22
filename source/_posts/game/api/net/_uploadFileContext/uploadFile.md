### swan.uploadFile()

将本地资源上传到开发者服务器，客户端发起一个 HTTPS POST 请求，其中 content-type 为 multipart/form-data
如页面通过 swan.chooseImage 等接口获取到一个本地资源的临时文件路径后，可通过此接口将本地资源上传到指定服务器。。

```js
swan.uploadFile(opts)
```

**参数值**：

|属性|类型|是否必填|描述|
|-|-|-|-|
|opts|Object|是|调用该方法时，要传入的对象参数|
|opts.url|string|是|开发者服务器 url|
|opts.filePath|string|是|要上传文件资源的路径|
|opts.name|string|是|文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容|
|opts.header|Object|否|HTTP 请求的 Header，Header 中不能设置 Referer|
|opts.formData|Object|否|HTTP 请求中其他额外的 form data |
|opts.success|function|否|接口调用成功的回调函数|
|opts.fail|function|否|接口调用失败的回调函数|
|opts.complete|function|否|接口调用完成的回调函数（接口成功、失败都会执行）|

**返回值**：

`Object` 类型的对象：

|属性|类型|描述|
|-|-|-|
|UploadTask|Object|UploadTask 实例对象|

`success` 回调函数：

形如 `function (res) {...}`，其中：

|属性|类型|描述|
|-|-|-|
|res.data|string|开发者服务器返回的数据|
|res.statusCode|number|开发者服务器返回的 HTTP 状态码|


**示例**：

```js
const uploadUrl = 'https://smartapp.baidu.com/xxx'; // 仅为示例，并非真实的接口地址
const downloadUrl = 'https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/pdf_open_parameters.pdf';
swan.downloadFile({
    url: downloadUrl,
    success(res) {
        let Task = swan.uploadFile({
            url: uploadUrl,
            filePath: res.tempFilePath,
            name: 'myfile',
            success: (res) => {
                console.log(res);
            }
        });
        Task.onProgressUpdate(res => {
            console.log(res);
        });
    }
});
```