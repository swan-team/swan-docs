---
title: 拨打电话
header: develop
nav: api
sidebar: device_call
---

## makePhoneCall

**解释：**拨打电话
**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|phoneNumber |String | 是  | 需要拨打的电话号码|
|success| Function  |  否  | 接口调用成功的回调|
|fail  |  Function  |  否 |  接口调用失败的回调函数|
|complete  |  Function |   否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**
<!-- <a href="swanide://fragment/655ca4184419f620e6fbfe9b140407f81540396334" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a> -->
```js
swan.makePhoneCall({
    phoneNumber: '000000' //仅为示例，并非真实的电话号码
});
```
