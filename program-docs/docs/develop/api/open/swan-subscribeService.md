---
title: swan.subscribeService
header: develop
nav: api
sidebar: swan-subscribeService
---

> 基础库 3.150.1 开始支持，低版本需做兼容处理。

**解释**：小程序消息订阅服务：取消订阅和查询订阅；订阅操作详见[`form 表单`](/develop/component/formlist_form/)。


## 方法参数 

Object object

### `object` 参数说明  

|参数名 |类型  |是否必填  |默认值|说明|
|---- | ---- | ---- |--|---- |
|templateId|String|是|-|模板消息所用的模板库标题ID，与使用[`form 表单`](/develop/component/formlist_form/)订阅时，template-id 对应的值相同|
|subscribeId|String|是|-|订阅唯一标识，与使用[`form 表单`](/develop/component/formlist_form/)订阅时，subscribe-id 对应的值相同|
|type|String|否|query|订阅的操作类型：query（查询订阅）cancel（取消订阅）|
| success | Function | 否 | - | 接口调用成功的回调函数 |
| fail | Function | 否 | - | 接口调用失败的回调函数 |
| complete | Function | 否 | - | 接口调用结束的回调函数（调用成功、失败都会执行）|



### success返回参数说明

|参数名 |类型 |说明|
|---- | ---- | ---- |
|type|String|订阅的操作类型：query（查询订阅）cancel（取消订阅）|
|form_id|String|对应提交[`form 表单`](/develop/component/formlist_form/)时返回的 formId。当传入参数 type 为 query 时有此字段|
|status|Number|订阅状态；1 表示已订阅，0 表示已取消订阅。当传入参数 type 为 query 时有此字段|
|update_time|Number|订阅更新时间|
|app_key|String|小程序唯一标识|



## 示例

[在开发者工具中预览效果](swanide://fragment/f50bfe3df40b9dbc290c3ea38ab9ea0e1578301879913)

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_timer.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 代码示例



* 在 js 文件中

```js
swan.subscribeService({
    templateId: 'BD0003',
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
