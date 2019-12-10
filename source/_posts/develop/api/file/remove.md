---
title: swan.removeSavedFile
header: develop
nav: api
sidebar:  remove
---

 


**解释**：删除本地存储的文件

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_removeSavedFile.png"  class="demo-qrcode-image" />


**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|filePath   |String  |  是  | |需要删除的文件路径|
|success   |Function  |  否  | | 接口调用成功的回调函数|
|fail  |Function  |  否 | |  接口调用失败的回调函数|
|complete   | Function   | 否 | | 接口调用结束的回调函数（调用成功、失败都会执行）|


**图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/removeSavedFile.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**

<a href="swanide://fragment/daefd8793cdad26d655a6f6a18008cf61573630179945" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


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
                        this.setData({
                            'filePath': res.savedFilePath,
                            'disabled': false
                        });
                    },
                    fail: err => {
                        this.toast('保存失败，请稍后重试', 'none');
                    }
                });
            },
            fail: err => {
                this.toast('保存失败，请稍后重试', 'none');
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
                console.log('getSavedFileList success', res.fileList);
                this.setData({ filelist: res.fileList})
            },
            fail: err => {
                this.toast('getSavedFileList', 'none');
                console.log('getSavedFileList fail', err);
            }
        });
    },
    deleteFile() {
        const filePath = this.getData('filelist');
        if (filePath.length > 0) {
            swan.removeSavedFile({
                filePath: filePath[0].filePath,
                success: res => {
                    this.toast('已删除', 'none');
                },
                fail: err => {
                    this.toast('操作失败，请稍后重试', 'none');
                }
            })
        }
    },
    toast(title, icon) {
        swan.showToast({title, icon});
    }
});
```

#### 错误码

* Andriod

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确   |
|1001|执行失败|
|2000|文件路径无效|
|2001|文件不存在|
|2002|文件过大|
|2004|文件删除失败|

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确   |
|2001|文件不存在|
|2004|文件删除失败|


