---
title: swan.getSavedFileInfo
header: develop
nav: api
sidebar: save_swan-getSavedFileInfo
---

 


**解释**：获取本地文件的文件信息。此接口只能用于获取已保存到本地的文件，若需要获取临时文件信息，请使用 <a href="/develop/api/file/save_swan-getFileInfo/">getFileInfo</a> 接口。

 
## 方法参数  

Object object

### `object`参数说明  

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |: ---- | :---- |: ----|:----|
|filePath   |String  |  是  | | 文件路径|
|success   |Function  |  否  | | 接口调用成功的回调函数，返回结果见 success 返回参数说明。|
|fail  |Function  |  否 | |  接口调用失败的回调函数|
|complete   | Function | 否 | | 接口调用结束的回调函数（调用成功、失败都会执行）|

### success返回参数说明  

|参数名 |类型 | 说明|
|---- | ---- | ---- |
|size  |Number | 文件大小，单位B|
|createTime  |Number | 文件保存时的时间戳，从1970/01/01 08:00:00 到该时刻的秒数。|

## 示例

 <a href="swanide://fragment/492382b4ae79bea6296cf50bbe19a7031573644436590" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_getSavedFileInfo.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/getSavedFileInfo.gif">
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
    data: {
        filePath: ''
    },
    saveFile() {
        this.toast('正在保存', 'loading');
        swan.downloadFile({
            url: 'https://smartprogram.baidu.com/docs/img/file-simple.pdf',
            success: res => {
                swan.saveFile({
                    tempFilePath: res.tempFilePath,
                    success: res => {
                        this.toast('保存成功', 'none');
                        this.setData('filePath', res.savedFilePath);
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
    getSavedFileInfo() {
        swan.getSavedFileList({
            success: res => {
                if (res.fileList.length > 0) {
                    const filePath = res.fileList[0].filePath;
                    swan.getSavedFileInfo({
                        filePath,
                        success: res => {
                            swan.showModal({
                                title: 'success',
                                content: JSON.stringify(res)
                            });
                            console.log('getSavedFileInfo success', res);
                        },
                        fail: err => {
                            swan.showToast({
                                title: 'fail',
                                icon: 'none'
                            });
                            console.log('getSavedFileInfo fail', err);
                        }
                    });
                }
            }
        })
    },
    toast(title, icon) {
        swan.showToast({title, icon});
    }
});
```

 
##  错误码

### Android

|错误码|说明|
|:--|:--|
|202|解析失败，请检查参数是否正确    |
|1001|执行失败|
|2001|文件不存在|
|2003|IO异常|

### iOS

|错误码|说明|
|:--|:--|
|202|解析失败，请检查参数是否正确    |
|2001|文件不存在|
