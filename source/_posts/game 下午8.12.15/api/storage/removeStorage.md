---
title: swan.removeStorage()
layout: gamedoc
topic: storage
categoryName: api
priority: 09-07
---

从本地缓存中异步移除指定 key。

```js
swan.removeStorage(opts)
```

**参数值：**

|属性|类型|是否必填|描述|
|-|-|-|-|
|key|string|是|本地缓存中指定的 key|
|success|function|否|接口调用成功的回调函数|
|fail|function|否|接口调用失败的回调函数|
|complete|function|否|接口调用完成的回调函数（接口成功、失败都会执行）|
