---
title: swan.removeStorageSync
header: develop
nav: api
sidebar: remove_swan-removeStorageSync
---


 

**解释**：从本地缓存中同步移除指定 key。

**方法参数**：String key

**`key`参数说明**：本地缓存中的指定的 key。


**代码示例**：

* 在 js 文件中

```js
removeStorageSync() {
    try {
        swan.removeStorageSync('xxx');
        console.log('removeStorageSync success');
    } catch (err) {
        console.log('removeStorageSync fail', err);
    }
}

```


#### 错误码

* Andriod

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法|
|1001|执行失败|

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |

