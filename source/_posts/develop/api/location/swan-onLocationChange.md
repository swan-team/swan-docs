---
title: swan.onLocationChange
header: develop
nav: api
sidebar: swan-onLocationChange
---

**解释**：监听实时地理位置变化事件，需结合`swan.startLocationUpdate`使用

**方法参数**：Function callback

**`callback`参数说明**：

实时地理位置变化事件的回调函数

**返回参数说明**：

|参数 |说明 |
|---- |----- |
|latitude   | 纬度，浮点数，范围为-90~90，负数表示南纬。|
|longitude |  经度，浮点数，范围为-180~180，负数表示西经。|
|speed  | 速度，浮点数，单位m/s。|
|accuracy  |  位置的精确度|
|altitude  |  高度，单位 m 。|
|verticalAccuracy  |  垂直精度，单位 m（Android 无法获取，返回 0） 。|
|horizontalAccuracy  |水平精度，单位 m 。 |
|street|街道名称|
|cityCode|城市编码|
|city|城市名称|
|country|国家|
|countryCode|国家代码|
|province|省份|
|streetNumber|街道号码|
|district|区|

**代码示例**：

* 在 js 文件中

```js
Page({
    onLocationChange() {
        const noop = res => {
            console.log('location change', res);
        };
        swan.onLocationChange(noop);
    }
})
```

**Tips**:

- 该方法会持续监听地理位置信息的变化，建议在不需要监听地理位置信息变化后，直接调用`swan.stopLocationUpdate`方法取消监听。
