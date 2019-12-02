---
title: swan.getBatteryInfoSync
header: develop
nav: api
sidebar: swan-getBatteryInfoSync
---

 

 
> 基础库 3.30.2 开始支持，低版本需做兼容处理。

**解释**： 获取当前设备电量同步接口，ios系统不可用。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_getBatteryInfoSync.png"  class="demo-qrcode-image" />

**方法参数**：无

**返回值说明**：

|参数名 |类型  |说明|
|---- | ---- | ---- |
|level |string | 设备电量， 范围为1-100|
|isCharging  | boolean | 设备是否正在充电|

**图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/getBatteryInfoSync.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**

<a href="swanide://fragment/3de7a3cb8b3eb224071690c85741db091574233742997" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    getBatteryInfoSync() {
        try {
            const batteryInfo = swan.getBatteryInfoSync();
            console.log('当前设备电量值：', batteryInfo.level);
            console.log('当前设备是否正在充电：', batteryInfo.isCharging);
        } catch (err) {
            console.log('getBatteryInfoSync fail', err);
        }
    }
});
```
**Bug & Tip**:
* iOS 不可用会 mock 返回值 level为100， isCharging 为true。