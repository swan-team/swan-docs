---
title: 数据缓存
header: develop
nav: api
sidebar: storage
---

### 数据存储 API 列表

|API|说明|
|----|----|
|<a href="https://smartprogram.baidu.com/docs/develop/api/storage_save/#setStorage">setStorage</a>|将数据存储在本地缓存指定的 key 中。如果之前存在同名 key ，会覆盖掉原来该 key 对应的内容。这是一个异步接口|
|<a href="https://smartprogram.baidu.com/docs/develop/api/storage_save/#setStorageSync">setStorageSync</a>|将数据存储在本地缓存中指定的 key 中。如果之前存在同名 key ，会覆盖掉原来该 key 对应的内容。这是一个同步接口|
|<a href="https://smartprogram.baidu.com/docs/develop/api/storage_save/#getStorage">getStorage</a>|从本地缓存中异步获取指定 key 对应的内容。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/storage_save/#getStorageSync">getStorageSync</a>|从本地缓存中同步获取指定 key 对应的内容。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/storage_save/#getStorageInfo">getStorageInfo</a>|异步获取当前 storage 的相关信息。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/storage_save/#getStorageInfoSync">getStorageInfoSync</a>|同步获取当前 storage 的相关信息。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/storage_remove/#removeStorage">removeStorage</a>|从本地缓存中异步移除指定 key。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/storage_remove/#removeStorageSync">removeStorageSync</a>|从本地缓存中同步移除指定 key。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/storage_remove/#clearStorage">clearStorage</a>|清理本地数据缓存。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/storage_remove/#clearStorageSync">clearStorageSync</a>|同步清理本地数据缓存。|

<!-- setStorage
-----

**解释：**将数据存储在本地缓存指定的 key 中。如果之前存在同名 key ，会覆盖掉原来该 key 对应的内容。这是一个异步接口。

**参数：**Object

**Object参数说明：**

|参数 | 类型 | 必填 | 说明|
|---- | ---- | ---- | ---- |
|key |String | 是  | 本地缓存中的指定的 key|
|data  |  Object/String  | 是  | 需要存储的内容|
|success| Function |   否 |  接口调用成功的回调函数|
|fail  |  Function |   否  |接口调用失败的回调函数|
|complete   | Function   | 否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

```js
swan.setStorage({
    key: 'key',
    data: 'value'
});
```

setStorageSync
-----

**解释：**将数据存储在本地缓存中指定的 key 中。如果之前存在同名 key ，会覆盖掉原来该 key 对应的内容。这是一个同步接口。

**参数：**key, data

**参数说明：**

|参数 | 类型 | 必填 | 说明|
|---- | ---- | ---- | ---- |
|key |String | 是 |  本地缓存中的指定的 key|
|data |  Object/String |  是 |  需要存储的内容|

**示例：**

```js
try {
    swan.setStorageSync('key', 'value');
} catch (e) {
}
```


getStorage
-----

**解释：**从本地缓存中异步获取指定 key 对应的内容。

**参数：**Object

**Object参数说明：**

|参数 | 类型 | 必填 | 说明|
|---- | ---- | ---- | ---- |
|key |String | 是 |  本地缓存中的指定的 key|
|success |Function   | 是  | 接口调用成功的回调函数，res = {data: key对应的内容}|
|fail  |  Function  |  否  | 接口调用失败的回调函数|
|complete  |  Function   | 否  | 接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明：**

|参数 | 类型 |说明|
|---- | ---- | ---- |
|data   | String | key 对应的内容|

**示例：**

```js
swan.getStorage({
    key: 'key',
    success: function (res) {
        console.log(res.data);
    },
    fail: function (err) {
        console.log('错误码：' + err.errCode);
        console.log('错误信息：' + err.errMsg);
    }
});
```

getStorageSync
-----

**解释：**从本地缓存中同步获取指定 key 对应的内容。

**参数：**key

**参数说明：**

|参数 | 类型 | 必填 | 说明|
|---- | ---- | ---- | ---- |
|key | String | 是 |  本地缓存中的指定的 key|

**示例：**

```js
try {
    var result = swan.getStorageSync('key');
} catch (e) {
}
```


getStorageInfo
-----

**解释：**异步获取当前 storage 的相关信息。

**参数：**Object

**Object参数说明：**

|参数 | 类型 | 必填 | 说明|
|---- | ---- | ---- | ---- |
|success |Function |   是  | 接口调用成功的回调函数，详见返回参数说明|
|fail  |  Function  |  否  | 接口调用失败的回调函数|
|complete |   Function |   否 |  接口调用结束的回调函数（调用成功、失败都会执行）|


**success返回参数说明：**

|参数 | 类型 | 说明|
|---- | ---- | ---- |
|keys  |  String Array |   当前 storage 中所有的 key|
|currentSize | Number | 当前占用的空间大小, 单位 kB|
|limitSize |  Number |  限制的空间大小，单位 kB|  


**示例：**

```js
swan.getStorageInfo({
    success: function (res) {
        console.log(res.keys);
    },
    fail: function (err) {
        console.log('错误码：' + err.errCode);
        console.log('错误信息：' + err.errMsg);
    }
});
```

getStorageInfoSync
-----

**解释：**同步获取当前 storage 的相关信息。

**示例：**

```js
try {
    var result = swan.getStorageInfoSync();
    console.log(result);
} catch (e) {
}
```

removeStorage
-----

**解释：**从本地缓存中异步移除指定 key。

**参数：**Object

**Object参数说明：**

|参数 | 类型 | 必填 | 说明|
|---- | ---- | ---- | ---- |
|key |String  |是  | 本地缓存中的指定的 key|
|success |Function  |  是  | 接口调用成功的回调函数|
|fail |   Function  |  否  | 接口调用失败的回调函数|
|complete  |  Function  |  否  | 接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**


```js
swan.removeStorage({
    key: 'key',
    success: function (res) {
        console.log(res);
	},
    fail: function (err) {
        console.log('错误码：' + err.errCode);
        console.log('错误信息：' + err.errMsg);
    }
});
```


removeStorageSync
-----

**解释：**从本地缓存中同步移除指定 key。

**参数：**key

**参数说明：**

|参数 | 类型 | 必填 | 说明|
|---- | ---- | ---- | ---- |
|key |String  |是  | 本地缓存中的指定的 key|


**示例：**


```js
try {
    swan.removeStorageSync('key');
} catch (e) {
}
```

clearStorage
-----

**解释： **清理本地数据缓存。  

**Object参数说明：**

|参数 | 类型 | 必填 | 说明|
|---- | ---- | ---- | ---- |
|success |Function  |  是  | 接口调用成功的回调函数|
|fail |   Function  |  否  | 接口调用失败的回调函数|
|complete  |  Function  |  否  | 接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

```js
swan.clearStorage();
```

clearStorageSync
-----

**解释：**同步清理本地数据缓存。

**示例：**

```js
try {
    swan.clearStorageSync();
} catch(e) {
}
``` -->
