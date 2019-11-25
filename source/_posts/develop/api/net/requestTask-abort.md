---
title: RequestTask.abort
header: develop
nav: api
sidebar: requestTask-abort
---



 

**解释**：中断请求任务。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/abortRequest.png"  class="demo-qrcode-image" />

**方法参数**：无

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/abortRequest.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：

<a href="swanide://fragment/416dbb4346110b4165313cbde9ac39bc1572937479743" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    data: { },
    request() {
        const requestTask = swan.request({
            url: 'https://sfc.baidu.com/shopping/nianhuo/bimai',
            header: {
                'content-type': 'application/json'
            },
            method: 'POST',
            dataType: 'json',
            responseType: 'text',
            success: res => {
                swan.showToast({
                    title: '已请求',
                    icon: 'none'
                });
                console.log(res.data);
                this.setData('disabled', false)
            },
            fail: err => {
                console.log('错误码：' + err.errCode);
                console.log('错误信息：' + err.errMsg);
            }
        })
        this.requestTask = requestTask;
    },
    abortRequest() {
        this.requestTask.abort();
        swan.showToast({
            title: '已断掉',
            icon: 'none'
        });
    }
});

```


