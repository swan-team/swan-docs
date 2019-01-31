---
title: 发起请求
layout: gamedoc
topic: net
categoryName: api
---

<!-- md game/api/net/_requestContext/abort.md -->
<!-- md game/api/net/_requestContext/request.md -->
<!-- md game/api/net/_requestContext/RequestTask.md -->


**示例：**

```js
const requestTask = swan.request({
    url: 'test.php', //仅为示例，并非真实的接口地址
    method: 'GET',
    dataType: 'json',
    data: {
        key: 'value'
    },
    header: {
        'content-type': 'application/json'
    },
    success: res => console.log(res.data),
    fail: err => console.log(err)
});
//取消请求任务
requestTask.abort();
```