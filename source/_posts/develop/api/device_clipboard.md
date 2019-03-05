---
title: 剪贴板
header: develop
nav: api
sidebar: device_clipboard
---

## setClipboardData

**解释：**设置系统剪贴板的内容

**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|data  |  String  |是  | 需要设置的内容|
|success |Function  |  否  | 接口调用成功的回调函数|
|fail  | Function  |  否  | 接口调用失败的回调函数|
|complete   | Function   | 否  | 接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**
<!-- <a href="swanide://fragment/fb9c6df88f60031316330ec0fe156cad1540394512" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a> -->
```js
swan.setClipboardData({
    data: 'baidu',
    success: function (res) {
        swan.getClipboardData({
            success: function (res) {
                console.log(res.data) // baidu
            }
        });
    }
});
```
<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。|

**iOS**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。| -->

## getClipboardData

**解释：**获取系统剪贴板内容

**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success |Function |   否 |  接口调用成功的回调函数|
|fail  |  Function |   否 |  接口调用失败的回调函数|
|complete  |  Function |   否  | 接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明：**

|参数名 |类型  |说明|
|---- | ---- | ---- |
|data   | String | 剪贴板的内容|

**示例：**
<!-- <a href="swanide://fragment/fb9c6df88f60031316330ec0fe156cad1540394512" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a> -->
```js
swan.getClipboardData({
    success: function (res) {
        console.log(res.data);
    }
});
```
<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|1001|执行失败| -->