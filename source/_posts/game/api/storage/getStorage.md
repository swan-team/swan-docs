---
title: swan.getStorage()
layout: gamedoc
topic: storage
categoryName: api
priority: 09-01
---

从本地缓存中异步获取指定 key 对应的内容。

```js
swan.getStorage(opts)
```

**opts 对象属性说明：**

|属性|类型|是否必填|描述|
|-|-|-|-|
|opts|Object|是|调用该方法时，要传入的对象参数|
|opts.key|string|是|本地缓存中指定的 key|
|opts.success|function|否|接口调用成功的回调函数|
|opts.fail|function|否|接口调用失败的回调函数|
|opts.complete|function|否|接口调用完成的回调函数（接口成功、失败都会执行）|

**返回值：**

`success` 回调函数：

形如 `function (res) {...}`，其中：

|属性|类型|描述|
|-|-|-|
|res.data|Object<span class="vsplit"></span>string|key 对应的内容|

**示例：**

```js
const key = 'mockData';
const data = {
    value1: 'getStorageData1',
    value2: 'getStorageData2'
};
// 预先存储
swan.setStorageSync(key, data);
swan.getStorage({
    key,
    success: function (res) {
        console.log('接口执行成功', res.data);
    },
    fail: function () {
        console.log('接口执行失败');
    },
    complete: function () {
        console.log('接口执行完成');
    }
})
```