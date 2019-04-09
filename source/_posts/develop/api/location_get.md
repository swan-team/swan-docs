---
title: 获取位置
header: develop
nav: api
sidebar: location_get
---
## swan.getLocation

**解释：** 获取当前的地理位置、速度。当用户离开智能小程序后，此接口无法调用。

**方法参数：**Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|type   | String | 否  | -| 默认为 wgs84 返回 gps 坐标，可选 gcj02 。|
|altitude   | Boolean | 否  | -| 传入 true 会返回高度信息，获取高度需要较高精度且需要打开 gps ，会很耗时，默认没有用 gps。|
|success |Function  |  是 | -|  接口调用成功的回调函数，返回内容详见返回参数说明。|
|fail  |  Function  |  否  | -| 接口调用失败的回调函数|
|complete  |  Function |   否 |  -| 接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明：**

|参数  |说明  |
|---- | ---- |
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
|province|省份|
|streetNumber|街道号码|
|district|区|

**示例：**
<a href="swanide://fragment/96bf59fa67b5aff2dd83e37224fdbae91540395079" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>
```js
swan.getLocation({
    type: 'gcj02',
    success: function (res) {
        console.log('纬度：' + res.latitude);
        console.log('经度：' + res.longitude);
    },
    fail: function (err) {
        console.log('错误码：' + err.errCode);
        console.log('错误信息：' + err.errMsg);
    }
});
```
<!-- #### 错误码

<!-- **Andriod**

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法。|
|401|安全校验失败|
|1001|文件不存在|

**iOS**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。|
|10005|系统拒绝|  -->

## swan.chooseLocation

**解释：** 打开地图选择位置。需要用户授权 scope.userLocation。

**方法参数：**Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success  | Function |否 | -| 接口调用成功的回调函数|
|fail  | Function |否 | -| 接口调用失败的回调函数|
|complete  | Function |否 | -| 接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明：**

|参数  |说明  |
|---- | ---- |
|name   | 位置名称|
|address |  详细地址|
|latitude  | 纬度，浮点数，范围为-90~90，负数表示南纬。使用 gcj02 国测局坐标系。|
|longitude  |  经度，浮点数，范围为-180~180，负数表示西经。使用 gcj02 国测局坐标系。|

<a href="swanide://fragment/bad6d7aa3fb17f9be8c8ea775d6f074b1548068569477" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|1002|用户取消错误码 |
|1003|没有获取位置的权限|
|1007|地图本身出现异常|

**iOS**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。|
|1002|用户取消操作错误码|
|1003|用户没有授权百度使用位置|
|1007|地图服务异常| -->

