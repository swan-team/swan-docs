---
title: swan.cloud.downloadFile
header: develop
nav: cloud
sidebar: cloud_downloadFile
---
 

**解释**：将资源文件从云存储空间下载至本地。


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
`callback`风格：
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
