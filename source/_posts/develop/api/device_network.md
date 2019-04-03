---
title: 网络状态
header: develop
nav: api
sidebar: device_network
---

## swan.getNetworkType

**解释：**获取网络类型

**方法参数：**Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success |Function  |  否  | 接口调用成功，返回网络类型 networkType|
|fail | Function  |  否  | 接口调用失败的回调函数|
|complete  |  Function  |  否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明：**

|参数  |说明 |
|---- | ---- |
|networkType |网络类型，值有 wifi/2g/3g/4g/unknown (Android 下不常见的网络类型)/none (无网络)。|

**示例：**
<a href="swanide://fragment/2abeffe47247755d92a8f045e661de541540397300" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果 </a>
```js
swan.getNetworkType({
    success: function (res) {
        console.log(res.networkType);
    }
});
```
<!-- #### 错误码

<!-- **Andriod**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。| -->

## swan.onNetworkStatusChange

**解释：**监听网络状态变化。

**方法参数：**Function callback

**`callback`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|isConnected |Boolean |当前是否有网络连接|
|networkType| String | 网络类型|

**networkType 有效值：**

|值   |说明|
|---- | ---- |
|wifi   | wifi 网络|
|2g  |2g 网络|
|3g | 3g 网络|
|4g | 4g 网络|
|none  |  无网络|
|unknown |Android 下不常见的网络类型|

**示例：**
<a href="swanide://fragment/ff24bd28faca464062508047044cd1ca1540397640" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>
```js
swan.onNetworkStatusChange(function (res) {
    console.log(res.isConnected);
    console.log(res.networkType);
});
```
<!-- #### 错误码

<!-- **Andriod**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。|
|1001|执行失败| -->

<!-- **iOS**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。|  -->