---
title: 云存储
header: develop
nav: cloud
sidebar: cloud_server_sdk_storage
---

## cloud.uploadFile
上传文件到云存储空间


**参数**

|名称|类型|必须|说明|
|---|---|---|---|
|option|Object|是||
|option.cloudPath|String|是|云存储文件存储路径|
|option.fileContent|Buffer/ReadableStream|是|文件内容|
|option.contentType|String|是|文件 Conetent-Type|
|option.contentLength|String|是|文件：Content-Length|


**返回值Promise**

resolve 结果：

|名称|类型|说明|
|---|---|---|
|requestID|String|请求ID|
|fileID|String|文件ID|
|statusCode|Number|云存储服务器返回状态码|

reject 结果：

|名称|类型|说明|
|---|---|---|
|code|String|错误码|
|message|String|错误信息|


**使用示例**
``` js
const cloud = require('swan-server-sdk')
const path = require('path')
const fs = require('fs')
const util = require('util')

exports.main = async (event, context) => {
  cloud.init(context)

  const filePath = path.join(__dirname, 'demo.jpg');
  const fileStream = fs.createReadStream(filePath);
  const fileStats = await util.promisify(fs.stat)(filePath)

  const res = await cloud.storage().uploadFile({
    cloudPath: 'photo/demo.jpg',
    fileContent: fileStream,
    contentType: 'image/jpeg',
    contentLength: fileStats.size
  })
  return res.fileID
}
```


## cloud.downloadFile
下载云存储文件


**参数**

|名称|类型|必须|说明|
|---|---|---|---|
|option|Object|是||
|option.fileID|String|是|文件ID|


**返回值Promise**

resolve 参数：

|名称|类型|说明|
|---|---|---|
|requestID|String|请求ID|
|fileContent|buffer|文件内容|

reject 参数：

|名称|类型|说明|
|---|---|---|
|code|String|错误码|
|message|String|错误信息|


**使用示例**
``` js
const cloud = require('swan-server-sdk')

exports.main = async (event, context) => {
  cloud.init(context)

  const res = await cloud.downloadFile({
    fileID: 'file-id-01',
  })
  return res.fileContent
}

```

## cloud.getTempFileURL
获取云存储文件的临时访问连接，有效期1小时

**参数**

|名称|类型|必须|说明|
|---|---|---|---|
|option|Object|是||
|option.fileID|String|是|文件ID|


**返回值Promise**

resolve 结果：

|名称|类型|说明|
|---|---|---|
|requestID|String|请求ID|
|tempFileURL|String|文件临时访问连接|

reject 结果：

|名称|类型|说明|
|---|---|---|
|code|String|错误码|
|message|String|错误信息|


**使用示例**
``` js
const cloud = require('swan-server-sdk')

exports.main = async (event, context) => {
  cloud.init(context)

  const res = await cloud.getTempFileURL({
    fileID: 'file-id-01',
  })
  return res.tempFileURL
}
```



## cloud.deleteFile
删除云存储文件，可以批量删除，一次最多删除200个


**参数**

|名称|类型|必须|说明|
|---|---|---|---|
|option|Object|是||
|option.fileList|String[]|是|待删除文件ID列表|


**返回值Promise**

resolve 结果：

|名称|类型|说明|
|---|---|---|
|requestID|String|请求ID|
|fileList|fileDeleteResult[]|删除结果列表|

fileDeleteResult 删除结果:

|名称|类型|说明|
|---|---|---|
|fileID|String|文件ID|
|status|状态，0：删除成功|Number|
|errMsg|删除失败，错误信息|String|
|errCode|删除失败，错误码|String|

reject 结果：

|名称|类型|说明|
|---|---|---|
|code|String|错误码|
|message|String|错误信息|


**使用示例**
``` js
const cloud = require('swan-server-sdk')

exports.main = async (event, context) => {
  cloud.init(context)

  const res = await cloud.deleteFile({
    fileList: ['file-id-01', 'file-id-02'],
  })
  return res.fileList
}
```
