---
title: swan.getLocation()
layout: gamedoc
topic: location
categoryName: api
---


获取当前的地理位置、速度。当用户离开小游戏后，此接口无法调用。

```js
swan.getLocation(opts)
```

**参数值**：

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|
|type|string|wgs84|否|默认为 wgs84 返回 gps 坐标，可选 gcj02|
|altitude|string|false|否|传入 true 会返回高度信息，获取高度需要较高精度且需要打开 gps，会很耗时，默认没有用 gps|
|success|function||否|接口调用成功的回调函数|
|fail|function||否|接口调用失败的回调函数|
|complete|function||否|接口调用完成的回调函数（接口成功、失败都会执行）|

**返回值**：

`success` 回调函数：

形如 `function (res) {...}`，其中：

|属性|类型|描述|
|-|-|-|
|res.latitude|number|纬度，浮点数，范围为 -90~90，负数表示南纬|
|res.longitude|number|经度，浮点数，范围为 -180~180，负数表示西经|
|res.speed|number|速度，浮点数，单位m/s|
|res.accuracy|number|位置的精确度|
|res.altitude|number|高度，单位 m|
|res.verticalAccuracy|number|垂直精度，单位 m（Android 无法获取，返回 0）|
|res.horizontalAccuracy|number|水平精度，单位 m|

`fail` 回调函数：

形如 `function (res) {...}`，其中：

|属性|类型|描述|
|-|-|-|
|res.errCode|string|报错码|
|res.errMsg|string|报错信息 |

res.errMsg 合法值

|errCode|errMsg|描述|
|-|-|-|
|10001|internal_error|内部错误|
|10003|user deny|用户拒绝|

**注意**：
在使用前请先进行 swan.authorize() 授权处理。


**示例**：

```js
// 预先授权
swan.authorize({
    scope: 'scope.userLocation',
    success: function success() {
        console.log('授权成功');
        // 获取当前的地理位置及速度
        swan.getLocation({
            type: 'gcj02',
            success: data => {
                console.log('纬度：' + data.latitude);
                console.log('经度：' + data.longitude);
                console.log('速度：' + data.speed);
            },
            fail: res => {
                console.log('错误码：' + res.errCode);
                console.log('错误信息：' + res.errMsg);
            }
        });
    }
});
```