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

**opts 对象属性说明：**

|属性|类型|是否必填|描述|
|-|-|-|-|
|opts|Object|是|调用该方法时，要传入的对象参数|
|opts.key|string|是|本地缓存中指定的 key|
|opts.success|function|否|接口调用成功的回调函数|
|opts.fail|function|否|接口调用失败的回调函数|
|opts.complete|function|否|接口调用完成的回调函数（接口成功、失败都会执行）|
