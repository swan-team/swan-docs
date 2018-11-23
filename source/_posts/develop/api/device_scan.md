---
title: 扫码
header: develop
nav: api
sidebar: device_scan
---


scanCode
---
**解释：**调起客户端扫码界面，扫码成功后返回对应的结果。
**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success| Function  |  否  | 接口调用成功的回调|
|fail  |  Function  |  否 |  接口调用失败的回调函数|
|complete  |  Function |   否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明：**

|参数名 |说明|
|---- | ---- |
|result| 所扫码的内容 |
|scanType| 所扫码的类型 |
|charSet|所扫码的字符集|

**示例：**

```js
swan.scanCode({
    success: function (res) {
        console.log(res.result);
        console.log(res.scanType);
    }
});
```
