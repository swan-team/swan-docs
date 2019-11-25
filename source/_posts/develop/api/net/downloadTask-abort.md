---
title: DownloadTask.abort
header: develop
nav: api
sidebar: downloadTask-abort
---



**解释**：中断下载任务

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/abortDownloadFile.png"  class="demo-qrcode-image" />

**方法参数**：无

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/abortDownloadFile.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：
 

<a href="swanide://fragment/dcaee8cc80556c6096c0f550d3292da41573018260749" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    data: { },
    downloadFile() {
        const downloadTask = swan.downloadFile({
            url: 'https://smartprogram.baidu.com/docs/img/file-simple.pdf',
            header: {
                'content-type': 'application/json'
            },
            success: res =>{
                console.log(res.tempFilePath);
                swan.showToast({
                    title: '下载成功',
                    icon: 'none'
                });
            },
            fail: err => {
                swan.showToast({
                    title: '下载失败',
                    icon: 'none'
                });
                console.log('错误码：' + err.errCode);
                console.log('错误信息：' + err.errMsg);
            }
        });
        this.downloadTask = downloadTask;
    },
    abortDownloadFile() {
        swan.showModal({
            title: 'title',
            content: '已断掉'
        });
        this.downloadTask.abort();
    }
});

```
