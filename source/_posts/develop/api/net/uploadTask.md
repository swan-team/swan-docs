---
title: UploadTask
header: develop
nav: api
sidebar: uploadTask
---


**解释**：上传任务对象

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/uploadTask.png"  class="demo-qrcode-image" />

**方法参数**：无

 
**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/uploadTask.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：

<a href="swanide://fragment/0c1609c7b79f257ae72a8874626354f21572941106808" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<button bindtap="createUploadTask">创建uploadFile实例对象</button>
```

* 在 js 文件中
```js

Page({
    data: { },
    createUploadTask() {
        const uploadTask = swan.uploadFile({
            url: 'https://smartprogram.baidu.com/mappconsole/api/checkFile', 
            filePath: "http://127.0.0.1:8199/program/29acd176e8e8fc95c065…e8fc95c065789eddb01303-0/tmp/1572939723264529.png",
            name: 'myfile',
            header: {
                'content-type': 'application/json'
            },
            formData: {
                'user': 'swan'
            },
            success: res => {
                swan.showToast({
                    title: '上传成功',
                    icon: 'none'
                });
                console.log('uploadFile success', res);
                this.setData({filePath});
            },
            fail: err => {
                swan.showToast({
                    title: '上传失败',
                    icon: none
                });
                console.log('uploadFile fail', err);
            },
            complete: () => {
                console.log('complete');
            }
        });
        console.log('res', uploadTask);
        swan.showModal({
            title: '创建' + uploadTask._reqId,
            content: JSON.stringify(uploadTask)
        });
    }
});

```