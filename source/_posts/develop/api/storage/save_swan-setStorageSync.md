---
title: swan.setStorageSync
header: develop
nav: api
sidebar: save_swan-setStorageSync
---


 
**解释**：将数据存储在本地缓存中指定的 key 中。如果之前存在同名 key ，会覆盖掉原来该 key 对应的内容。这是一个同步接口。

**方法参数**：String key, Object/String data

**`key`参数说明**：本地缓存中的指定的 key

**`data`参数说明**：需要存储的内容

**示例**：

* 在 js 文件中

```js
Page({
    setStorageSync() {
        try {
            swan.setStorageSync('key', 'value');
        } catch (e) {

        }
    }
});
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
|1003|超过最大存储文件大小|


