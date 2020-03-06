---
title: swan.openDocument
header: develop
nav: api
sidebar: open
# webUrl: https://qft12m.smartapps.cn/swan-api/file/file
---


**解释**：新开页面打开文档，支持格式：doc, xls, ppt, pdf, docx, xlsx, pptx。
**Web 态说明**： Web 态环境只支持打开 pdf 格式文档，对于其他文档格式调用该方法会触发调用失败回调。

## 方法参数

Object object

### `object`参数说明 ：

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|filePath   |String  |  是  | | 文件路径，可通过 downloadFile 获得|
|fileType   |String  |  否  | | 文件类型，指定文件类型打开文件，有效值 doc, xls, ppt, pdf, docx, xlsx, pptx。|
|success   |Function  |  否  | |接口调用成功的回调函数|
|fail  |Function  |  否 | | 接口调用失败的回调函数|
|complete   | Function   | 否 | |  接口调用结束的回调函数（调用成功、失败都会执行）|

## 示例

 <a href="swanide://fragment/8ac31cf0028bdeb66b5f7d9ecd83ec271573630425994" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_openDocument.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/opendocument.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
</div>

###  代码示例


* 在 js 文件中

```js
Page({
    openDocument() {
        swan.downloadFile({
            url: 'https://smartprogram.baidu.com/docs/img/file-simple.pdf',
            success: res => {
                swan.openDocument({
                    filePath: res.tempFilePath,
                    fileType: 'pdf',
                    success: res => {
                        console.log('openDocument success', res);
                    },
                    fail: err => {
                        console.log('openDocument fail', err);
                    }
                });
            },
            fail: err => {
                console.log('downloadFile fail', err);
            }
        });
    }
});
```

##  错误码

### Android

|错误码|说明|
|:--|:--|
|202|解析失败，请检查参数是否正确   |
|1001|执行失败|

### iOS

|错误码|说明|
|:--|:--|
|202|解析失败，请检查参数是否正确   |
|2001|文件不存在|
|2005|文件格式不支持|