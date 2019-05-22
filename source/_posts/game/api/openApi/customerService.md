---
title: 客服消息
layout: gamedoc
topic: openApi
categoryName: api
---

### swan.openCustomerServiceConversation()

>基础库 1.0.12 开始支持该 API。

进入客服对话，调用此 API 时需要用户触发 touch 事件。

```js
swan.openCustomerServiceConversation(opts)
```

**参数值**：

|属性|类型|是否必填|描述|
|-|-|-|-|-|
|opts|Object|否|调用该方法时，要传入的对象参数|
|opts.success|function|否|成功的回调函数|
|opts.fail|function|否|失败的回调函数|
|opts.complete|function|否|接口调用完成的回调函数（接口调用成功、失败都会执行）|

`success` 回调函数：

形如 `function (res) {...}`, 其中:

|属性|类型|描述|
|-|-|-|
|res|Object|回调函数参数对象|
|res.errMsg|string|调起成功信息|

`fail` 回调函数：

形如 `function (res) {...}`, 其中:

|属性|类型|描述|
|-|-|-|
|res|Object|回调函数参数对象|
|res.errMsg|string|调起失败信息|

`complete` 回调函数：

当接口调用成功时，其返回值与 `success` 回调函数的返回值相同；
当接口调用失败时，其返回值与 `fail` 回调函数的返回值相同。

**示例**：

```js
swan.onTouchStart(res => {
    swan.openCustomerServiceConversation({
        success(res) {
            console.log('success', res.errMsg)
        },
        fail(res) {
            console.log('fail', res.errMsg)
        },
        complete(res) {
            console.log('complete', res.errMsg)
        }
    });
})
```
