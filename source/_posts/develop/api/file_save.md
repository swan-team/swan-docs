---
title: 保存、获取文件
header: develop
nav: api
sidebar: file_save
---

saveFile
-----

**解释：**保存文件到本地

**参数：**Object

**注意：**saveFile 会把临时文件移动，因此调用成功后传入的 tempFilePath 将不可用。

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|tempFilePath |String  |  是  | 需要保存的文件的临时路径|
|success   |Function  |  否  | 返回文件的保存路径，res = {savedFilePath: '文件的保存路径'}。|
|fail  |Function  |  否 |  接口调用失败的回调函数|
|complete   | Function   | 否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明：**

|参数名 |类型 | 说明|
|---- | ---- | ---- |
|savedFilePath  |String | 文件的保存路径|

**示例：**
<!-- <a href="swanide://fragment/205171636947a60ced2f0cdde6c7b8a31540396285" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a> -->
```js
swan.chooseImage({
    count: 1,
    success: function (res) {
        var tempFilePaths = res.tempFilePaths;
        swan.saveFile({
            tempFilePath: tempFilePaths[0],
            success: function (res) {
                var savedFilePath = res.savedFilePath;
            }
        });
    }
});
```

**说明**

本地文件存储的大小限制为 10M。

#### 错误码

**Andriod**

|错误码|说明|
|--|--|
|201 |解析失败，请检查调起协议是否合法|
|1001|执行失败|
|2000|文件路径无效|
|2001|文件不存在|
|2002|文件过大|
|2003|IO异常|

**iOS**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。|
|2001|指定文件不存在|
|2002|文件大小超过限制|
|2003|IO异常|

getFileInfo
-----

**解释：**获取文件信息

**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|filePath  |String  |  是  | 本地文件路径 |
|digestAlgorithm  |String	| 否  |计算文件摘要的算法，默认值 md5，有效值：md5，sha1。|
|success   |Function  |  否  | 接口调用成功的回调函数 |
|fail  |Function  |  否 |  接口调用失败的回调函数|
|complete   | Function   | 否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明：**

|参数名 |类型 | 说明|
|---- | ---- | ---- |
|size  | Number | 文件大小，单位：B。|
|digest  | String | 按照传入的 digestAlgorithm 计算得出的的文件摘要。|

**示例：**

```js
swan.getFileInfo({
    filePath: 'bdfile://somefile',
    success: function (res) {
        console.log(res.size);
        console.log(res.digest);
    }
});
```

#### 错误码

**Andriod**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。|
|1001|执行失败|
|2001|文件不存在|
|2003|IO异常|

**iOS**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。|
|2001|指定文件不存在|



getSavedFileList
-----

**解释：**获取本地已保存的文件列表
**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success   |Function  |  否  | 接口调用成功的回调函数，返回结果见success返回参数说明。|
|fail  |Function  |  否 |  接口调用失败的回调函数|
|complete   | Function   | 否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明：**

|参数名 |类型 | 说明|
|---- | ---- | ---- |
|fileList  |` Array.<object>  `| 文件列表|

**fileList中的项目说明：**

|参数名 |类型 | 说明|
|---- | ---- | ---- |
|filePath  |String | 文件的本地路径|
|createTime  |Number | 文件的保存时的时间戳，从1970/01/01 08:00:00 到当前时间的秒数。|
|size  |Number | 文件大小，单位 B|

**示例：**

```js
swan.getSavedFileList({
    success: function (res) {
        var fileList = res.fileList;
    }
});
```
#### 错误码

**Andriod**

|错误码|说明|
|--|--|
|1001|执行失败 |
|2003|IO异常|



getSavedFileInfo
-----

**解释：**获取本地文件的文件信息。此接口只能用于获取已保存到本地的文件，若需要获取临时文件信息，请使用 getFileInfo 接口。

**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|filePath   |String  |  是  | 文件路径|
|success   |Function  |  否  | 接口调用成功的回调函数，返回结果见 success 返回参数说明。|
|fail  |Function  |  否 |  接口调用失败的回调函数|
|complete   | Function | 否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明：**

|参数名 |类型 | 说明|
|---- | ---- | ---- |
|size  |Number | 文件大小，单位B|
|createTime  |Number | 文件保存时的时间戳，从1970/01/01 08:00:00 到该时刻的秒数。|

**示例：**

```js
swan.getSavedFileInfo({
    filePath: 'bdfile://somefile',
    success: function (res) {
        console.log(res.size);
        console.log(res.createTime);
    },
    fail: function (err) {
        console.log('错误码：' + err.errCode);
        console.log('错误信息：' + err.errMsg);
    }
});
```
#### 错误码

Andriod
|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。|
|1001|执行失败|
|2001|文件不存在|
|2003|IO异常|

iOS
|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。|
|2001|指定文件不存在|

