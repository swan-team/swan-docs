---
title: 云存储
header: develop
nav: cloud
sidebar: cloud_storage
---
## swan.cloud.uploadFile

将本地图片上传至云存储空间，如果上传路径相同则覆盖。


**参数说明**

该方法的传入参数类型为对象类型，参数说明如下：

|字段|类型|必填|说明|
|---|---|---|---|
|cloudPath| String| 是| 云存储路径|
|filePath| String| 是| 要上传图片资源的路径|
|header| Object| 否| HTTP请求Header, header中不能设置Referer|
|config| Function| 否| 局部覆盖swan.cloud.init中的全局配置|
|success| Function| 否| 接口调用成功的回调函数|
|fail| Function| 否| 接口调用失败的回调函数|
|complete| Function| 否| 接口调用结束的回调函数|

`config`说明：

|字段|类型|说明|
|---|---|---|
|env| String|使用的环境ID，将覆盖`swan.cloud.init`指定的环境|

**`success`返回参数说明**

|字段|类型|说明|
|---|---|---|
|fileID|String|文件ID|
|statusCode|Number|服务器返回的HTTP状态码|
|errMsg|String|调用成功的信息|

**`fail`返回参数说明**

|字段|类型|说明|
|---|---|---|
|errCode|Number|错误码|
|errMsg|String|错误信息|


**示例代码**
`Callback`风格：
```js
swan.cloud.uploadFile({
    cloudPath,
    filePath,
    success: res => {
        console.log('[上传文件] 成功：' + res.fileID);
    },
    fail: e => {
        swan.showToast({
            icon: 'none',
            title: '上传失败'
        })
    },
    complete: () => {
        swan.hideLoading()
    }
});
```
`Promise`风格：
```js
swan.cloud.uploadFile({
    cloudPath,
    filePath
}).then(res => {
  console.log('[上传文件] 成功：' + res.fileID);
}).catch(err => {
  swan.showToast({
    icon: 'none',
    title: '上传失败'
  })
});
```



## swan.cloud.downloadFile

从云存储空间下载文件。


**参数说明**

该方法的传入参数类型为对象类型，参数说明如下：

|字段|类型|必填|说明|
|---|---|---|---|
|fileID|String|是|云文件ID|
|config|Object|否|局部覆盖swan.cloud.init中的全局配置|
|success|Function|否|接口调用成功的回调函数|
|fail|Function|否|接口调用失败的回调函数|
|complete|Function|否|接口调用结束的回调函数|

`config`参数说明：

|字段|类型|说明|
|---|---|---|
|env|String|使用的环境ID，将覆盖swan.cloud.init指定的环境|

**`success`返回参数说明**

|字段|	类型|   说明|
|---|---|---|---|---|
|tempFilePath|String| 临时文件路径|
|statusCode| Number| 服务器返回的HTTP状态码|
|errMsg| String| 调用成功的信息|

**`fail`返回参数说明**

|字段|类型|说明|
|---|---|---|
|errCode|Number|错误码|
|errMsg|String|错误信息|


**示例代码**
`Callback`风格：
```js
swan.cloud.downloadFile({
  fileID: 'test-env/my-image.png',
  success: res => {
    console.log(res.tempFilePath)
  },
  fail: err => {
    // ...
  }
});
```
`Promise`风格：
```js
swan.cloud.downloadFile({
  fileID: 'test-env/my-image.png'
}).then(res => {
  console.log(res.tempFilePath)
}).catch(err => {
  // ...
});
```

## swan.cloud.deleteFile

从云存储空间删除文件，一次最多删除50个。


**参数说明**

该方法的传入参数类型为对象类型，参数说明如下：

|字段|类型|必填|说明|
|---|---|---|---|
|fileList|String[]|是|云文件ID|
|config|Object|否|局部覆盖swan.cloud.init中的全局配置|
|success|Function|否|接口调用成功的回调函数|
|fail|Function|否|接口调用失败的回调函数|
|complete|Function|否|接口调用结束的回调函数|

`config`参数说明：

|字段|类型|说明|
|---|---|---|
|env| String| 使用的环境ID，将覆盖swan.cloud.init指定的环境|

**`success`返回参数说明**

|字段|类型|说明|
|---|---|---|
|fileList|Object[]|删除结果列表，定义详见下表|

`fileList`参数说明：

|字段|类型|说明|
|---|---|---|
|fileID| String| 云文件ID|
|status| Number| 状态码，0为成功|
|errMsg| String| 成功为deleteFile:ok，失败为失败原因|

**`fail`返回参数说明**

|字段|类型|说明|
|---|---|---|
|errCode| Number| 错误码|
|errMsg| String| 错误信息|


**示例代码 **
`Callback`风格：
```js
swan.cloud.deleteFile({
  fileList: ['test-env/my-image.png'],
  success: res => {
    console.log(res.fileList)
  },
  fail: err => {
    // ...
  }
})
```

`Promise`风格：
```js
swan.cloud.deleteFile({
  fileList: ['test-env/my-image.png']
}).then(res => {
  console.log(res.fileList)
}).catch(err => {
  // ...
});
```