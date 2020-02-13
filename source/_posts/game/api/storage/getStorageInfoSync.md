---
title: swan.getStorageInfoSync()
layout: gamedoc
topic: storage
categoryName: api
priority: 05-04
---

同步获取当前 storage 的相关信息，即 [`swan.getStorageInfo()`](/game/api/storage/getStorageInfo/) 的同步版本。

```js
swan.getStorageInfoSync()
```

**返回值：**

`Object` 类型的对象

**返回对象属性说明**

|属性|类型|描述|
|-|-|-|
|res|Object|调用该方法时，返回的对象|
|res.keys|Array.<`string`>|当前 storage 中所有的 key|
|res.currentSize|number|当前占用的空间大小, 单位 KB|
|res.limitSize|number|当前占用的空间大小, 单位 KB|

**示例：**

```js
try {
    var result = swan.getStorageInfoSync();
    console.log('storage data:', result);
} catch (e) {
    console.log('error message:', e);
}
```
