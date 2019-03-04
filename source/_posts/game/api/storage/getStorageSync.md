---
title: swan.getStorageSync()
layout: gamedoc
topic: storage
categoryName: api
priority: 05-02
---

从本地缓存中同步获取指定 key 对应的内容。

```js
swan.getStorageSync(key)
```

**参数值：**
|参数|类型|是否必填|描述|
|-|-|-|-|
|key|string|是|本地缓存中指定的 key|

**返回值：**

`Object|string`：

|属性|类型|描述|
|-|-|-|
|data|Object<span class="vsplit"></span>string|key 对应的内容|