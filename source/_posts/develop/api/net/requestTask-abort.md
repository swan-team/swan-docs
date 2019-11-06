---
title: RequestTask.abort
header: develop
nav: api
sidebar: requestTask-abort
---



 

**解释**：中断请求任务。

**方法参数**：无

 
**代码示例**

<a href="swanide://fragment/416dbb4346110b4165313cbde9ac39bc1572937479743" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    data: {
        disabled: true
    },
    onShow() {
    },
    request() {
        const requestTask = swan.request({
            url: 'https://sfc.baidu.com/shopping/nianhuo/bimai', // 仅为示例，并非真实的接口地址
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


