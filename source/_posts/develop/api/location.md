---
title: 位置
header: develop
nav: api
sidebar: location
---

### 位置 API 列表

|API|说明|
|----|----|
|<a href="https://smartprogram.baidu.com/docs/develop/api/location_get/#getLocation">getLocation</a>|获取当前的地理位置、速度。当用户离开智能小程序后，此接口无法调用。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/location_get/#chooseLocation">chooseLocation</a>|打开地图选择位置。需要用户授权 scope.userLocation。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/location_open/#openLocation">openLocation</a>|使用百度 App 内置地图查看位置。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/location_map/#createMapContext">createMapContext</a>|创建并返回 map 上下文 mapContext 对象。在自定义组件下，第二个参数传入组件实例 this，以操作组件内 <map/> 组件。mapContext 通过 mapId 跟一个 组件绑定，通过它可以操作对应的组件。|

<!-- 获取位置
-----

### getLocation

**解释：**获取当前的地理位置、速度。当用户离开智能小程序后，此接口无法调用。

**参数：**Object

**Object 参数说明：**

|参数 | 类型 | 必填 | 说明 |
|---- | ---- | ---- |---- |
|type   | String | 否  | 默认为 wgs84 返回 gps 坐标，可选 gcj02 |
|altitude   | Boolean | 否  | 传入 true 会返回高度信息，获取高度需要较高精度且需要打开 gps ，会很耗时，默认没有用 gps|
|success |Function  |  是 |  接口调用成功的回调函数，返回内容详见返回参数说明。|
|fail  |  Function  |  否  | 接口调用失败的回调函数|
|complete  |  Function |   否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明：**

|参数  |说明  |
|---- | ---- |
|latitude   | 纬度，浮点数，范围为-90~90，负数表示南纬
|longitude |  经度，浮点数，范围为-180~180，负数表示西经
|speed  | 速度，浮点数，单位m/s|
|accuracy  |  位置的精确度|
|altitude  |  高度，单位 m |
|verticalAccuracy  |  垂直精度，单位 m（Android 无法获取，返回 0） |
|horizontalAccuracy  |水平精度，单位 m  |


**示例：**

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

### chooseLocation

**解释：**打开地图选择位置。需要用户授权 scope.userLocation

**参数：**Object
​
**Object 参数说明：**

|参数 | 类型 | 必填 | 说明 |
|---- | ---- | ---- |---- |
|success  | Function |否 | 接口调用成功的回调函数|
|fail  | Function |否 | 接口调用失败的回调函数|
|complete  | Function |否 | 接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明：**

|参数  |说明  |
|---- | ---- |
|name   | 位置名称|
|address |  详细地址|
|latitude  | 纬度，浮点数，范围为-90~90，负数表示南纬。使用 gcj02 国测局坐标系|
|longitude  |  经度，浮点数，范围为-180~180，负数表示西经。使用 gcj02 国测局坐标系|

查看位置
-----

### openLocation

**解释：**使用百度 App 内置地图查看位置。

**参数：**Object
​
**Object 参数说明：**

|参数 | 类型 | 必填 | 说明 |
|---- | ---- | ---- |---- |
|latitude   | Float |  是  | 纬度，范围为 -90~90，负数表示南纬|
|longitude  | Float  | 是  | 经度，范围为 -180~180，负数表示西经|
|scale  | INT |否 |  缩放比例，范围 4~21，默认为16|
|name  | String |否 | 位置名|
|address  | String |否 | 地址的详细说明|
|success  | Function |否 | 接口调用成功的回调函数|
|fail  | Function |否 | 接口调用失败的回调函数|
|complete  | Function |否 | 接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

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


地图组件控制
-----

### createMapContext

**解释：**创建并返回 map 上下文 mapContext 对象。在自定义组件下，第二个参数传入组件实例 this，以操作组件内 `<map/>` 组件。mapContext 通过 mapId 跟一个 <map/> 组件绑定，通过它可以操作对应的 <map/> 组件。

**参数：**mapId

**mapContext 对象的方法列表：**

|方法 | 参数 | 说明 |
|---- | ---- | ---- |
|getCenterLocation  |  OBJECT |  获取当前地图中心的经纬度，返回的是 gcj02 坐标系，可以用于 swan.openLocation  |
|moveToLocation |  无  | 将地图中心移动到当前定位点，需要配合 map 组件的 show-location 使用  |
|translateMarker  |  OBJECT   | 平移 marker，带动画  |
|includePoints |  OBJECT  | 缩放视野展示所有经纬度 |
|getRegion  | OBJECT  | 获取当前地图的视野范围  |
|getScale | OBJECT |  获取当前地图的缩放级别 |

**getCenterLocation 的 Object 参数列表：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success   |Function  |  否  | 接口调用成功的回调函数 ，res = { longitude: "经度", latitude: "纬度"} |
|fail  |Function  |  否 |  接口调用失败的回调函数|
|complete   | Function   | 否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**translateMarker 的 Object 参数列表：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|markerId  |Number  |  是  | 指定 marker |
|destination  |Object  |  是 |  指定marker移动到的目标点|
|autoRotate   | Boolean   | 是 |  移动过程中是否自动旋转 marker|
|rotate  |Number  |  是  | marker 的旋转角度 |
|duration  |duration  |  否 |  动画持续时长，默认值1000ms，平移与旋转分别计算 |
|fail   | Function   | 否 |  接口调用失败的回调函数|

**includePoints 的 OBJECT 参数列表：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|points  |Array  |  是  | 要显示在可视区域内的坐标点列表，[{latitude, longitude}] |
|padding  |Array  |  否 |  坐标点形成的矩形边缘到地图边缘的距离，单位像素。格式为[上,右,下,左]，安卓上只能识别数组第一项，上下左右的 padding 一致。开发者工具暂不支持 padding 参数。|

**getRegion 的 OBJECT 参数列表：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success   |Function  |  否  | 接口调用成功的回调函数，res = {southwest, northeast}，西南角与东北角的经纬度 |
|fail  |Function  |  否 |  接口调用失败的回调函数|
|complete   | Function   | 否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**getScale 的 OBJECT 参数列表：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success   |Function  |  否  | 接口调用成功的回调函数，res = {scale} |
|fail  |Function  |  否 |  接口调用失败的回调函数|
|complete   | Function   | 否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

```html
<view class="wrap">
    <map id="myMap"
        style="width: 100%"
    </map>
	<button type="primary" bindtap="getCenterLocation">获取位置</button>
	<button type="primary" bindtap="moveToLocation">移动位置</button>
	<button type="primary" bindtap="translateMarker">移动标注</button>
	<button type="primary" bindtap="includePoints">缩放视野展示所有经纬度</button>
	<button type="primary" bindtap="getRegion">获取当前地图的视野范围</button>
</view>
```

```js
Pages({
    data: {
        latitude: '40.042500',
        longitude: '116.274040',
    },
    onReady() {
        this.mapContext = swan.createMapContext('myMap');
    },
    getCenterLocation: function () {
        this.mapContext.getCenterLocation({
            success: function (res) {
                console.log("经度" + res.longitude);
                console.log("纬度" + res.latitude);
            }
        })
    },
    moveToLocation: function () {
        this.mapContext.moveToLocation();
    },
    translateMarker: function () {
        this.mapContext.translateMarker({
            markerId: 0,
            autoRotate: true,
            duration: 1000,
            destination: {
                latitude: 23.10229,
                longitude: 113.3345211,
            },
            animationEnd() {
                console.log('animation end');
            }
        })
    },
    includePoints: function () {
        this.mapContext.includePoints({
            padding: [10],
            points: [{
                latitude: 23,
                longitude: 113.33,
            }, {
                latitude: 23,
                longitude: 113.3345211,
            }]
        })
    },
    getRegion: function () {
        this.mapContext.getRegion({
            success: function (res) {
                console.log("西南角的经纬度" + res.southwest);
                console.log("东北角的经纬度" + res.northeast);
            }
        })
    }
});
``` -->
