---
title: swan.getNetworkType
header: develop
nav: api
sidebar: swan-getNetworkType
---

 

**解释**：获取网络类型

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/getNetworkType.png"  class="demo-qrcode-image" />


**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success |Function  |  否  | | 接口调用成功，返回网络类型 networkType|
|fail | Function  |  否  | | 接口调用失败的回调函数|
|complete  |  Function  |  否 | | 接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明**：

|参数  |类型|说明 |
|---- | ---- |---|
|networkType |String|网络类型，有效值有： wifi，2g，3g，4g，unknown (Android 下不常见的网络类型)，none (无网络)。|

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

 
#### 错误码
* Andriod

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |

