---
title: swan.getStorageSync
header: develop
nav: api
sidebar: save_swan-getStorageSync
---

 

**解释**：从本地缓存中同步获取指定 key 对应的内容。

**方法参数**： String key

**`key`参数说明**： 本地缓存中的指定的 key

**示例**：


* 在 js 文件中

```js
try {
    const result = swan.getStorageSync('key');
    console.log('getStorageSync result:', result);
} catch (e) {
    
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
