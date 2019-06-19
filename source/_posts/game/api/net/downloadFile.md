---
title: 下载
layout: gamedoc
topic: net
categoryName: api
priority: 06-03
---

<!-- md game/api/net/_downloadFileContext/downloadFile.md -->
<!-- md game/api/net/_downloadFileContext/DownloadTask.md -->
<!-- md game/api/net/_downloadFileContext/onProgressUpdate.md -->
<!-- md game/api/net/_downloadFileContext/abort.md -->

**示例：**

```js
const downloadUrl = 'https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/pdf_open_parameters.pdf';
const path = 'bdfile://usr/test.pdf';

const task = swan.downloadFile({
    header: {
        'Cache-Control': 'no-cache'
    },
    filePath: path,
    url: downloadUrl,
    success: res => console.log('downloadFile数据：', JSON.stringify(res))
});

task.onProgressUpdate(({progress, totalBytesWritten, totalBytesExpectedToWrite}) => {
    task.abort();
    console.log(`downloadFile progress:${progress}%, ${totalBytesWritten}/${totalBytesExpectedToWrite}`);
});
```