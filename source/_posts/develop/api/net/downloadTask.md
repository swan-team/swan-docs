---
title: DownloadTask 
header: develop
nav: api
sidebar: downloadTask 
---

 


**解释**：下载任务对象

**示例**

<a href="swanide://fragment/c77c402000c8ed09238116000c09165c1572947847546" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    data: { 
    },
    downloadTask() {
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

**说明**：

uploadFile 上传文件大小限制为 25M。

