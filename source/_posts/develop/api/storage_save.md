---
title: 存储数据
header: develop
nav: api
sidebar: storage_save
---

setStorage
-----

**解释：**将数据存储在本地缓存指定的 key 中。如果之前存在同名 key ，会覆盖掉原来该 key 对应的内容。这是一个异步接口。

**参数：**Object

**Object参数说明：**

|参数 | 类型 | 必填 | 说明|
|---- | ---- | ---- | ---- |
|key |String | 是  | 本地缓存中的指定的 key|
|data  |  Object/String/Number/Array  | 是  | 需要存储的内容|
|success| Function |   否 |  接口调用成功的回调函数|
|fail  |  Function |   否  |接口调用失败的回调函数|
|complete   | Function   | 否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**
<!-- <a href="swanide://fragment/17cdc0c62288d1df2ce8bdc587bcaf211540397011" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a> -->
```js
swan.setStorage({
    key: 'key',
    data: 'value'
});
```
<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法。|
|1001|执行失败|

**iOS**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。|
|1003|超过最大存储文件大小| -->

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
<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法。|
|1001|执行失败|

**iOS**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。|
|1003|超过最大存储文件大小| -->



getStorage
-----

**解释：**从本地缓存中异步获取指定 key 对应的内容。

**参数：**Object

**Object参数说明：**

|参数 | 类型 | 必填 | 说明|
|---- | ---- | ---- | ---- |
|key |String | 是 |  本地缓存中的指定的 key|
|success |Function   | 是  | 接口调用成功的回调函数，res = {data: key对应的内容}。|
|fail  |  Function  |  否  | 接口调用失败的回调函数|
|complete  |  Function   | 否  | 接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明：**

|参数 | 类型 |说明|
|---- | ---- | ---- |
|data   | String | key 对应的内容|

**示例：**
<!-- <a href="swanide://fragment/17cdc0c62288d1df2ce8bdc587bcaf211540397011" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a> -->
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
<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法|
|1001|执行失败|

**iOS**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。| -->

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
<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法。|
|1001|执行失败|

**iOS**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。| -->

getStorageInfo
-----

**解释：**异步获取当前 storage 的相关信息。

**参数：**Object

**Object参数说明：**

|参数 | 类型 | 必填 | 说明|
|---- | ---- | ---- | ---- |
|success |Function |   是  | 接口调用成功的回调函数，详见返回参数说明。|
|fail  |  Function  |  否  | 接口调用失败的回调函数|
|complete |   Function |   否 |  接口调用结束的回调函数（调用成功、失败都会执行）|


**success返回参数说明：**

|参数 | 类型 | 说明|
|---- | ---- | ---- |
|keys  |  Array.<string> |   当前 storage 中所有的 key。|
|currentSize | Number | 当前占用的空间大小, 单位 kB。|
|limitSize |  Number |  限制的空间大小，单位 kB。|  


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
<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|1001|执行失败| -->

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
<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|1001|执行失败| -->
