---
title: swan.getSavedFileList
header: develop
nav: api
sidebar: save_swan-getSavedFileList
---

 

**解释**：获取本地已保存的文件列表

 
## 方法参数  

Object object

### `object`参数说明 

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success   |Function  |  否  | |接口调用成功的回调函数，返回结果见success返回参数说明。|
|fail  |Function  |  否 | | 接口调用失败的回调函数|
|complete   | Function   | 否 | | 接口调用结束的回调函数（调用成功、失败都会执行）|

### success返回参数说明  

|参数名 |类型 | 说明|
|---- | ---- | ---- |
|fileList  |` Array.<object>  `| 文件列表|

### fileList中的项目说明  

|参数名 |类型 | 说明|
|---- | ---- | ---- |
|filePath  |String | 文件的本地路径|
|createTime  |Number | 文件的保存时的时间戳，从1970/01/01 08:00:00 到当前时间的秒数。|
|size  |Number | 文件大小，单位 B|

## 示例

 <a href="swanide://fragment/f888ef3be2955b94548c5dcecf7c5b061573627301292" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_getSavedFileList.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/getSavedFileList.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>


###  代码示例 




```js
Page({
    data: { },
    saveFile() {
        swan.downloadFile({
            url: 'https://smartprogram.baidu.com/docs/img/file-simple.pdf',
            success: res => {
                swan.saveFile({
                    tempFilePath: res.tempFilePath,
                    success: res => {
                        this.toast('保存成功', 'none');
                    },
                    fail: err => {
                        this.toast('保存失败，请稍后重试', 'none');
                    }
                });
            },
            fail: err => {
                this.toast('下载失败，请稍后重试', 'none');
            }
        });
    },
    getSavedFileList() {
        swan.getSavedFileList({
            success: res => {
                swan.showModal({
                    title: 'success',
                    content: '目前保存文件数' + res.fileList.length
                });
                console.log('getSavedFileList success', res);
            },
            fail: err => {
                this.toast('fail', 'none');
                console.log('getSavedFileList fail', err);
            }
        });
    },
    toast(title, icon) {
        swan.showToast({title, icon});
    }
});
```

## 错误码

### Android

|错误码|说明|
|:--|:--|
|1001|执行失败   |
|2003|IO异常|


