---
title: 罗盘
header: develop
nav: api
sidebar: device_compass
---


## swan.onCompassChange

**解释：**监听罗盘数据，频率：5次/秒，接口调用后会自动开始监听，可使用swan.stopCompass停止监听。
**参数：**CALLBACK

**CALLBACK返回参数：**

|参数名 |类型  |说明|
|---- | ---- | ---- |
|direction |Number |面对的方向度数|

**示例：**
<a href="swanide://fragment/1e98ee9687ed0c6b0f9cb4c747af8b7c1540398490" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

```javascript
swan.onCompassChange(function (res) {
    console.log(res.direction);
});

```
<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|1001|执行失败 |

**iOS**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。|
|1001|设备不支持| -->

## swan.startCompass

**解释：**开始监听罗盘数据。
**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success |Function  |  否 |  接口调用成功的回调函数|
|fail  |  Function |   否 |  接口调用失败的回调函数|
|complete |   Function |   否  | 接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

```javascript
swan.startCompass();
```

## swan.stopCompass

**解释：**停止监听罗盘数据。
**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success |Function  |  否 |  接口调用成功的回调函数|
|fail  |  Function |   否 |  接口调用失败的回调函数|
|complete |   Function |   否  | 接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

```javascript
swan.stopCompass();
```
