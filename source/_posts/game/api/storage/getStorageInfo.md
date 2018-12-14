---
title: swan.getStorageInfo()
layout: gamedoc
topic: storage
categoryName: api
priority: 09-02
---

异步获取当前 storage 的相关信息。

```js
swan.getStorageInfo(opts)
```

**参数值：**

|属性|类型|是否必填|描述|
|-|-|-|-|
|success|function|是|接口调用成功的回调函数|
|fail|function|否|接口调用失败的回调函数|
|complete|function|否|接口调用完成的回调函数（接口成功、失败都会执行）|

**返回值：**

`success` 回调函数：

形如 `function (res) {...}`，其中：

|属性|类型|描述|
|-|-|-|
|res.keys|Array.<`string`>|当前 storage 中所有的 key|
|res.currentSize|number|当前占用的空间大小, 单位 KB|
|res.limitSize|number|当前占用的空间大小, 单位 KB|

**示例：**

```js
const key = 'mockData';
const data = {
    value1: 'getStorageData1',
    value2: 'getStorageData2'
};
// 预先存储
swan.setStorageSync(key, data);
swan.getStorageInfo({
    success: res => console.log(res.keys),
    fail: err => console.log('获取操作失败')
});
```