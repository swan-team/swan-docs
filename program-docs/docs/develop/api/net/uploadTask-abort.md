---
title: UploadTask.abort
header: develop
nav: api
sidebar: uploadTask-abort
---



**解释**：中断上传任务

 
## 方法参数

无

## 示例
<a href="swanide://fragment/3f19eb10fc9838027471c0784441311a1572944212699" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/abortUploadFile.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/abortUploadTask.gif ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### 代码示例 


:::codeTab
```js

Page({
    data: { },
    uploadFile() {
        swan.chooseImage({
            success: res => {
                const uploadTask = swan.uploadFile({
                    url: 'https://smartprogram.baidu.com/mappconsole/api/checkFile', 
                    filePath: res.tempFilePaths[0],
                    name: 'myfile',
                    header: {
                        'content-type': 'application/json'
                    },
                    formData: {
                        'user': 'swan'
                    },
                    success: res => {
                        swan.showModal({
                            title: 'title',
                            content: "上传成功"
                        });
                        console.log('uploadFile success', res);
                        this.setData({filePath});
                    },
                    fail: err => {
                        console.log('uploadFile fail', err);
                        swan.showToast({
                            title: '上传失败',
                            icon: none
                        });
                    },
                    complete: () => {
                        console.log('complete');
                    }
                });
                this.uploadTask = uploadTask;
            }
        })
    },
    abortUploadFile() {
        this.uploadTask.abort();
        swan.showModal({
            title: 'title',
            content: "已断掉"
        });
    }
});


```
:::