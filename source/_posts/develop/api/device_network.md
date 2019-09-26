---
title: 网络状态
header: develop
nav: api
sidebar: device_network
---

## swan.getNetworkType

**解释**：获取网络类型

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success |Function  |  否  |-| 接口调用成功，返回网络类型 networkType|
|fail | Function  |  否  |-| 接口调用失败的回调函数|
|complete  |  Function  |  否 | -| 接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明**：

|参数  |类型|说明 |
|---- | ---- |---|
|networkType |String|网络类型，值有 wifi/2g/3g/4g/unknown (Android 下不常见的网络类型)/none (无网络)。|

**示例**：
<a href="swanide://fragment/6fb983a430aa1864af5650c5b9b54f9d1569478503845" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 中

```js
Page({
    getNetworkType() {
        swan.getNetworkType({
            success: res => {
                this.setData('networkType', res.networkType);
            },
            fail: err => {
                swan.showToast({
                    title: '获取网络状态失败'
                });
            }
        });
    }
});
```


## swan.onNetworkStatusChange

> 工具和真机中的实现有区别，详见[API 实现差异](https://smartprogram.baidu.com/docs/develop/devtools/diff/)

**解释**：监听网络状态变化。

**方法参数**：Function callback

**`callback`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|isConnected |Boolean |是|-|当前是否有网络连接|
|networkType| String |是|-| 网络类型|

**networkType 有效值**：

|值   |说明|
|---- | ---- |
|wifi   | wifi 网络|
|2g  |2g 网络|
|3g | 3g 网络|
|4g | 4g 网络|
|none  |  无网络|
|unknown |Android 下不常见的网络类型|

**示例**：
<a href="swanide://fragment/7c0e8595fa15fb27338683115a63df031569478717853" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 js 文件中
```js
Page({
    onLoad() {
        let self = this;
        swan.getNetworkType({
            success: res => {
                self.setData('networkType', res.networkType);
            }
        });
        swan.onNetworkStatusChange(function (res) {
            self.setData('networkType', res.networkType);
        });
    }
});
```
