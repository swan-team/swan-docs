---
title: swan.getStorageInfo()
layout: gamedoc
topic: storage
categoryName: api
priority: 05-03
---

异步获取当前 storage 的相关信息。

```js
swan.getStorageInfo(opts)
```

**opts 对象属性说明**

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