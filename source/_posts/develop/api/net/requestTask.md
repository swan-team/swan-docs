---
title: RequestTask
header: develop
nav: api
sidebar: requestTask
---

 

**解释**：网络请求任务对象

**方法参数**：无

**示例**

* 在 js 文件中

```js
Page({
    const requestTask = swan.request({
        url: 'https://smartprogram.baidu.com/xxx', // 仅为示例，并非真实的接口地址
        header: {
            'content-type': 'application/json'
        },
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: res => {
            console.log(res.data)
        },
        fail: err => {
            console.log('错误码：' + err.errCode);
            console.log('错误信息：' + err.errMsg);
        }
    })
})

//取消请求任务
RequestTask.abort();
```

**说明**
*  content-type 默认为 'application/json'；
*  url 中不能有端口。

