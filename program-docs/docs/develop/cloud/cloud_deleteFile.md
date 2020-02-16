---
title: swan.cloud.deleteFile
header: develop
nav: cloud
sidebar: cloud_deleteFile
---
 
 

**解释**：删除云存储空间中的指定文件，一次最多删除50个。


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


**代码示例**

`callback`风格：
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