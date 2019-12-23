---
title: swan.subscribeService
header: develop
nav: api
sidebar: swan-subscribeService
---


**解释**：小程序消息订阅服务：取消订阅和查询订阅；订阅操作详见[`form 表单`](/develop/component/formlist_form/)。

**百度APP中扫码体验：**
![二维码图片]({{qrCode}})

**方法参数**：Object object

**`object` 参数说明**：

|参数名 |类型  |是否必填  |默认值|说明|
|---- | ---- | ---- |--|---- |
|subscribeId|String|是|-|订阅唯一标识，与用[`form 表单`](/develop/component/formlist_form/)订阅时，subscribe-id 对应的值|
|type|String|否|query|订阅的操作类型：query(查询订阅）cancel(取消订阅）|
| success | Function | 否 | - | 接口调用成功的回调函数 |
| fail | Function | 否 | - | 接口调用失败的回调函数 |
| complete | Function | 否 | - | 接口调用结束的回调函数（调用成功、失败都会执行）|



### success返回参数说明

|参数名 |类型 |说明|
|---- | ---- | ---- |
|type|String|订阅的操作类型：query（查询订阅）cancel（取消订阅）|
|form_id|String|对应提交[`form 表单`](/develop/component/formlist_form/)时，bindsubmit 对应的 formId；当传入参数 type 为 cancel 时无此字段|
|update_time|Number|订阅更新时间|
|app_key|String|小程序唯一标识|



**示例**：

[在开发者工具中预览效果](swanide://fragment/dd0f5fd00417f2a908e1a1822438d3821577085010301)

* 在 js 文件中

```js
swan.subscribeService({
    subscribeId: '8026',
    type: 'query',
    success(res) {
        swan.showModal({
            title: 'success',
            content: JSON.stringify(res)
        });
    },
    fail(err) {
        swan.showModal({
            title: 'fail',
            content: JSON.stringify(err)
        });
    }
})
```
