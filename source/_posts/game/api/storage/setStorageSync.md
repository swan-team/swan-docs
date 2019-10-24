---
title: swan.setStorageSync()
layout: gamedoc
topic: storage
categoryName: api
priority: 05-06
---

将数据同步存储在本地缓存指定的 key 中。如果之前存在同名 key，会覆盖掉原来该 key 对应的内容。

```js
swan.setStorageSync(key, data)
```

**参数值：**

|参数|类型|是否必填|描述|
|-|-|-|-|
|key|string|是|本地缓存中指定的 key|
|data|any ( **function** <span class="vsplit"></span> **ArrayBuffer**<span class="vsplit"></span> **undefined 请关注下方的特别说明** )|是|需要存储的内容|

**特别说明：**
1. 兼容 function 数据的存储，但是 Android 和 iOS 均会将其置为 null。
2. 对于 ArrayBuffer 的数据，Android 支持, iOS 暂不支持。
3. 对于 undefined 的数据，Android 支持，iOS 暂不支持， iOS 会对 undefined 数据直接过滤掉。
```javascript
    举例一： 存储数据中含有 undefined，在 iOS 中 getStorageInfo().keys.length 不包含 undefined 数据长度。
    举例二：
        存入数据为：
        const data = {
            name: 'my name',
            age: undefined
        }
        取出数据为：
        data = {
            name: 'my name'
        }
```

**示例：**

```js
const key = 'mockData';
const data = {
    value1: 'getStorageData1',
    value2: 'getStorageData2'
};
swan.setStorage(key, data);
```