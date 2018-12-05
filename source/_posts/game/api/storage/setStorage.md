---
title: swan.setStorage()
layout: gamedoc
topic: storage
categoryName: api
---

将数据异步存储在本地缓存指定的 key 中。如果之前存在同名 key ，会覆盖掉原来该 key 对应的内容。

```js
swan.setStorage(opts)
```

**参数值：**

|属性|类型|是否必填|描述|
|-|-|-|-|
|key|string|是|本地缓存中指定的 key|
|data|any ( **function** <span class="vsplit"></span> **ArrayBuffer**<span class="vsplit"></span> **undefined 请关注下方的特别说明** )|是|需要存储的内容|
|success|function|否|接口调用成功的回调函数|
|fail|function|否|接口调用失败的回调函数|
|complete|function|否|接口调用完成的回调函数（接口成功、失败都会执行）|

**特别说明：**
1. 兼容 function 数据的存储，但是 Android 和 IOS 均会将其置为 null。
2. 对于 ArrayBuffer 的数据，Android 支持, IOS 暂不支持。
3. 对于 undefined 的数据，Android 支持，IOS 暂不支持， IOS 会对 undefined 数据直接过滤掉。
```javascript
    举例一： 存储数据中含有 undefined，在 IOS 中 getStorageInfo().keys.length 不包含 undefined 数据长度。
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
swan.setStorage({
    key,
    data,
    success: () => console.log('接口执行成功'),
    fail: () => console.log('接口执行失败'),
    complete: () => console.log('接口执行完成')
});
```