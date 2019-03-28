---
title: 地图组件控制
header: develop
nav: api
sidebar: location_map
---

createMapContext
---
**解释：**创建并返回 map 上下文 mapContext 对象。在自定义组件下，第二个参数传入组件实例 this，以操作组件内 `<map/>` 组件。mapContext 通过 mapId 跟一个 <map/> 组件绑定，通过它可以操作对应的 <map/> 组件。

**参数：**mapId

**mapContext 对象的方法列表：**

|方法 | 参数 | 说明 |
|---- | ---- | ---- |
|getCenterLocation  |  OBJECT |  获取当前地图中心的经纬度，返回的是 gcj02 坐标系，可以用于 swan.openLocation。  |
|moveToLocation |  无  | 将地图中心移动到当前定位点，需要配合 map 组件的 show-location 使用 。 |
|translateMarker  |  OBJECT   | 平移 marker，带动画 。 |
|includePoints |  OBJECT  | 缩放视野展示所有经纬度 |
|getRegion  | OBJECT  | 获取当前地图的视野范围  |
|getScale | OBJECT |  获取当前地图的缩放级别 |

**getCenterLocation 的 Object 参数列表：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success   |Function  |  否  | 接口调用成功的回调函数 ，res = { longitude: "经度", latitude: "纬度"} 。|
|fail  |Function  |  否 |  接口调用失败的回调函数|
|complete   | Function   | 否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**translateMarker 的 Object 参数列表：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|markerId  |Number  |  是  | 指定 marker |
|destination  |Object  |  是 |  指定marker移动到的目标点|
|autoRotate   | Boolean   | 是 |  移动过程中是否自动旋转 marker|
|rotate  |Number  |  是  | marker 的旋转角度 |
|duration  |Number   |  否 |  动画持续时长，默认值1000ms，平移与旋转分别计算。 |
|fail   | Function   | 否 |  接口调用失败的回调函数|
|animationEnd|Function|否|动画结束时回调函数|

**includePoints 的 OBJECT 参数列表：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|points  |Array  |  是  | 要显示在可视区域内的坐标点列表，[{latitude, longitude}] 。|
|padding  |Array  |  否 |  坐标点形成的矩形边缘到地图边缘的距离，单位像素。格式为[上,右,下,左]，安卓上只能识别数组第一项，上下左右的 padding 一致。开发者工具暂不支持 padding 参数。|

**getRegion 的 OBJECT 参数列表：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success   |Function  |  否  | 接口调用成功的回调函数，res = {southwest, northeast}，西南角与东北角的经纬度。 |
|fail  |Function  |  否 |  接口调用失败的回调函数|
|complete   | Function   | 否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**getScale 的 OBJECT 参数列表：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success   |Function  |  否  | 接口调用成功的回调函数，res = {scale} 。|
|fail  |Function  |  否 |  接口调用失败的回调函数|
|complete   | Function   | 否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

```html
<view class="wrap">
    <map id="myMap"
        style="width: 100%">
    </map>
	<button type="primary" bindtap="getCenterLocation">获取位置</button>
	<button type="primary" bindtap="moveToLocation">移动位置</button>
	<button type="primary" bindtap="translateMarker">移动标注</button>
	<button type="primary" bindtap="includePoints">缩放视野展示所有经纬度</button>
	<button type="primary" bindtap="getRegion">获取当前地图的视野范围</button>
</view>
```

```js
Page({
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
            rotate: 90,
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
```

<!-- #### 错误码


**Andriod**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。 |
|1001||
|2000|地图lib包加载失败|

**iOS**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。| -->
