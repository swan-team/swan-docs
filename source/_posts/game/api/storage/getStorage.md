---
title: swan.getStorage()
layout: gamedoc
topic: storage
categoryName: api
---

从本地缓存中异步获取指定 key 对应的内容。

```js
swan.getStorage(opts)
```

**参数值：**

|属性|类型|是否必填|描述|
|-|-|-|-|
|key|string|是|本地缓存中指定的 key|
|success|function|否|接口调用成功的回调函数|
|fail|function|否|接口调用失败的回调函数|
|complete|function|否|接口调用完成的回调函数（接口成功、失败都会执行）|

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
    success: res => console.log('接口执行成功', res.data),
    fail: () => console.log('接口执行失败'),
    complete: () => console.log('接口执行完成')
})
```