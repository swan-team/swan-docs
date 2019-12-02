---
title: DownloadTask 
header: develop
nav: api
sidebar: downloadTask 
---

 


**解释**：下载任务对象

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/downloadTask.png"  class="demo-qrcode-image" />

**图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/downloadTask.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**

<a href="swanide://fragment/c77c402000c8ed09238116000c09165c1572947847546" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<button bindtap="createDownloadTask">创建uploadFile实例对象</button>
```

* 在 js 文件中

```js
Page({
    data: { },
    createDownloadTask() {
        const downloadTask = swan.downloadFile({
            url: 'https://smartprogram.baidu.com/docs/img/file-simple.pdf',
            header: {
                'content-type': 'application/json'
            },
            success: res => {
                'content-type': 'application/json'
            },
            fail: err => {
                console.log('错误码：' + err.errCode);
                console.log('错误信息：' + err.errMsg);
            },
            complete: () => {
               
            }
        });
        console.log('res', downloadTask);
        swan.showModal({
            title: '创建' + downloadTask._reqId,
            content: JSON.stringify(downloadTask)
        });
    }
});

```

**Bug & Tip**：

uploadFile 上传文件大小限制为 25M。

