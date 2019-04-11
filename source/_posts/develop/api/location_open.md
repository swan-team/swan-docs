---
title: 查看位置
header: develop
nav: api
sidebar: location_open
---
## swan.openLocation

**解释：**使用百度 App 内置地图查看位置。

**方法参数：**Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|latitude   | Float |  是  | -| 纬度，范围为 -90~90，负数表示南纬。|
|longitude  | Float  | 是  | -| 经度，范围为 -180~180，负数表示西经。|
|scale  | INT |否 | -|  缩放比例，范围 5~18，默认为18。|
|name  | String |否 | -| 位置名|
|address  | String |否 | -| 地址的详细说明|
|success  | Function |否 | -| 接口调用成功的回调函数|
|fail  | Function |否 | -| 接口调用失败的回调函数|
|complete  | Function |否 | -| 接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**
<a href="swanide://fragment/8dfef443454866063515a1c3192982281548068706910" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

```js
swan.getLocation({
    type: 'gcj02',
    success: function (res) {
        swan.openLocation({
            latitude: res.latitude,
            longitude: res.longitude,
            scale: 18
        })
    },
    fail: function (err) {
        console.log('错误码：' + err.errCode);
        console.log('错误信息：' + err.errMsg);
    }
});
```
<!-- #### 错误码


|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。| -->