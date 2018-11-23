---
title: 存储清理
header: develop
nav: api
sidebar: storage_remove
---

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
<a href="swanide://fragment/17cdc0c62288d1df2ce8bdc587bcaf211540397011" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

**解释：**同步清理本地数据缓存。

**示例：**

```js
try {
    swan.clearStorageSync();
} catch(e) {
}
```
