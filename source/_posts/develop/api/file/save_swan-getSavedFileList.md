---
title: swan.getSavedFileList
header: develop
nav: api
sidebar: save_swan-getSavedFileList
---

 

**解释**：获取本地已保存的文件列表

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success   |Function  |  否  | -|接口调用成功的回调函数，返回结果见success返回参数说明。|
|fail  |Function  |  否 | -| 接口调用失败的回调函数|
|complete   | Function   | 否 | -| 接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明**：

|参数名 |类型 | 说明|
|---- | ---- | ---- |
|fileList  |` Array.<object>  `| 文件列表|

**fileList中的项目说明**：

|参数名 |类型 | 说明|
|---- | ---- | ---- |
|filePath  |String | 文件的本地路径|
|createTime  |Number | 文件的保存时的时间戳，从1970/01/01 08:00:00 到当前时间的秒数。|
|size  |Number | 文件大小，单位 B|



**示例**：

<a href="swanide://fragment/dc177b0d57c63576a0052df0bf2c36361569427170503" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


```js

swan.getSavedFileList({
    success: res => {
        swan.showToast({
            title: 'success',
            icon: 'none'
        });
        console.log('getSavedFileList success', res);
    },
    fail: err => {
        swan.showToast({
            title: 'fail',
            icon: 'none'
        });
        console.log('getSavedFileList fail', err);
    }
});
                   
```

#### 错误码

Andriod

|错误码|说明|
|--|--|
|1001|执行失败   |
|2003|IO异常|


