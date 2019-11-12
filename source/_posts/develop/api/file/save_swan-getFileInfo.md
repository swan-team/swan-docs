---
title: swan.getFileInfo
header: develop
nav: api
sidebar: save_swan-getFileInfo
---



**解释**：获取文件信息

**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|filePath  |String  |  是  | | 本地文件路径 |
|digestAlgorithm  |String	| 否  |md5|计算文件摘要的算法，有效值：md5，sha1。|
|success   |Function  |  否  | | 接口调用成功的回调函数 |
|fail  |Function  |  否 | | 接口调用失败的回调函数|
|complete   | Function   | 否 | |  接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明**：

|参数名 |类型 | 说明|
|---- | ---- | ---- |
|size  | Number | 文件大小，单位：B。|
|digest  | String | 按照传入的 digestAlgorithm 计算得出的的文件摘要。|

**代码示例**：

<a href="swanide://fragment/dc177b0d57c63576a0052df0bf2c36361569427170503" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

**示例 1 获取临时文件信息**

```js
swan.downloadFile({
    header: {
        'Cache-Control': 'no-cache'
    },
    url: 'https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/pdf_open_parameters.pdf',
    success: res => {
        swan.getFileInfo({
            tempFilePath: res.tempFilePath,
            success: res => {
                swan.showToast({
                    title: 'success',
                    icon: 'none'
                });
                console.log('getFileInfo success', res);
            },
            fail: err => {
                swan.showToast({
                    title: 'fail',
                    icon: 'none'
                });
                console.log('getFileInfo fail', err);
            }
        });
    },
})
```

**示例 2 获取本地文件信息**
```js
swan.chooseImage({
    count: 1,
    success: res => {
        const tempFilePaths = res.tempFilePaths;  // 本地文件的路径(也可通过swan.saveFile获取)
        swan.getFileInfo({
            filePath: tempFilePaths[0],
            success: res => {
                swan.showToast({
                    title: 'success',
                    icon: 'none'
                });
                console.log('getFileInfo success', res);
            },
            fail: err => {
                swan.showToast({
                    title: 'fail',
                    icon: 'none'
                });
                console.log('getFileInfo fail', err);
            }
        });
    }
});
```

#### 错误码

* Andriod

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确   |
|1001|执行失败|
|2001|文件不存在|
|2003|IO异常|

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确   |
|2001|文件不存在|



