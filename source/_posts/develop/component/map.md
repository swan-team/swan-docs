---
title: map
header: develop
nav: component
sidebar: map
---
## map 地图

> 客户端创建的[原生组件](https://smartprogram.baidu.com/docs/develop/component/native/)，使用时请注意相关限制。

**解释**：地图

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/map.png"  class="demo-qrcode-image" />

**属性说明**: 

|属性名 |类型  |默认值  | 必填 |说明| 最低版本 |
|---- | ---- | ---- |---- | --- |---- |
| longitude | Number |  | 是 |gcj02 坐标系中心经度 |- |
| latitude | Number |  | 是 |gcj02 坐标系中心纬度 | -|
| scale |  Number | 16 | 否 |缩放级别，取值范围为4-21 |- |
| markers |  Array |   | 否 |标记点 |- |
| polyline |  Array |   | 否 |路线 | -|
| polygons |  Array |   | 否 |多边形（工具暂不支持） | 2.0.13 |
| circles |  Array |   | 否 |  圆 |- |
| controls |  Array |   | 否 |控件 | -|
| include-points |  Array |   | 否 | 缩放视野以包含所有给定的坐标点   | -|
| show-location | Boolean |   | 否 | 显示带有方向的当前定位点 |- |
| enable-3D | Boolean |  false |否 | 显示3D楼块（工具暂不支持） | 2.0.13|
| show-compass | Boolean |  false |否 | 显示指南针（工具暂不支持） | 2.0.13|
| enable-overlooking | Boolean |  false |否 | 开启俯视（工具暂不支持） | 2.0.13 |
| enable-zoom | Boolean | true | 否 |是否支持缩放（工具暂不支持） | 2.0.13 |
| enable-scroll | Boolean | true | 否 |是否支持拖动（工具暂不支持） | 2.0.13 |
| enable-rotate | Boolean | false | 否 | 是否支持旋转（工具暂不支持） | 2.0.13|
| bindmarkertap | EventHandle |  | 否 |点击标记点时触发 | -|
| bindcallouttap |  EventHandle |  | 否 |点击标记点对应的气泡时触发 |- |
| bindcontroltap | EventHandle |   | 否 |点击控件时触发 | -|
| bindregionchange | EventHandle |  | 否 |视野发生变化时触发 |- |
| bindtap | EventHandle |   | 否 |点击地图时触发 | -|
| bindupdated | EventHandle |   | 否 |在地图渲染更新完成时触发 |- |
| bindpoitap | EventHandle |   | 否 |点击地图poi点时触发 |- |

### markers

**解释**：标记点，用于在地图上显示标记的位置

**属性说明**：

|属性名 |类型  |默认值  | 必填 |说明| 
|---- | ---- | ---- |---- | --- | 
| id |  Number| | 否 | 标记点id ，marker点击事件回调会返回此id。建议为每个marker设置Number类型的id，保证更新marker时有更好的性能。 |
| latitude |   Number || 是 | 纬度，浮点数，范围 -90 ~ 90 |
| longitude |  Number || 是 | 经度，浮点数，范围 -180 ~ 180 |
| title  |   String | |否    | 标注点名 |
| zIndex  |  Number | |否    |  显示层级 |
| iconPath |   String | |是 | 显示的图标，项目目录下的图片路径，支持相对路径写法，以'/'开头则表示相对智能小程序根目录；也支持临时路径 |
| rotate |   Number |0| 否 |旋转角度，顺时针旋转的角度，范围 0 ~ 360，默认为 0 |
| alpha |   Number    | 1|否 | 标注的透明度，默认1，无透明 |
| width |   Number | |否 | 标注图标宽度，默认为图片实际宽度 |
| height |   Number | |否 | 标注图标高度，默认为图片实际高度 |
| callout |   Object || 否 | 自定义标记点上方的气泡窗口，支持的属性见下表，不可识别换行符。 |
| label |   Object | |否 | 为标记点旁边增加标签，支持的属性见下表，可识别换行符。 |
| anchor |   Object | |否 | 经纬度在标注图标的锚点，默认底边中点，{x, y}，x表示横向(0-1)，y表示竖向(0-1)。{x: .5, y: 1} 表示底边中点 |

**callout 属性说明**：

| 属性名 | 说明 | 类型  |
|---- | ---- | ---- |
| content | 文本 | String |
| color | 文本颜色 | String |
| fontSize | 文字大小 | Number |
| borderRadius | callout边框圆角 | Number |
| bgColor | 背景色 | String |
| padding | 文本边缘留白 | Number |
| display | 'BYCLICK':点击显示; 'ALWAYS':常显 | String |
| textAlign | 文本对齐方式。有效值: left, right, center | String |

**label 属性说明**：

| 属性名 | 说明 | 类型  |
|---- | ---- | ---- |
| content | 文本 | String |
| color  | 文本颜色 | String |
| fontSize | 文字大小 | Number |
| x | label的坐标，原点是 marker 对应的经纬度 | Number |
| y | label的坐标，原点是 marker 对应的经纬度 | Number |
| borderWidth | 边框宽度 | Number |
| borderColor | 边框颜色 | String |
| borderRadius | 边框圆角 | Number |
| bgColor | 背景色 | String |
| padding    | 文本边缘留白 | Number |
| textAlign | 文本对齐方式。有效值: left, right, center | String |

### polyline
**解释**：指定一系列坐标点，从数组第一项连线至最后一项<div></div><text class="notice">属性说明:</text>

| 属性名 | 说明 | 类型  | 必填  | 备注 |
|---- | ---- | ---- |---- | ---- |
| points | 经纬度数组 | Array | 是 | [{latitude: 0, longitude: 0}] |
| color | 线的颜色 | String | 否 | 8位十六进制表示，后两位表示alpha值，如：#000000AA |
| width | 线的宽度 | Number | 否 | - |
| dottedLine | 是否虚线  | Boolean | 否 | 默认false |
| arrowLine | 带箭头的线 | Boolean | 否 | 默认false，开发者工具暂不支持该属性     |
| arrowIconPath | 更换箭头图标 | String | 否 | 在arrowLine为true时生效 |
| borderColor | 线的边框颜色 | String | 否 | - |
| borderWidth | 线的厚度 | Number | 否 | `` |

### polygon
**解释**：指定一系列坐标点，根据 points 坐标数据生成闭合多边形<div></div><text class="notice">属性说明:</text>

| 属性名 | 说明 | 类型  | 必填  | 备注 |
|---- | ---- | ---- |---- | ---- |
| points | 经纬度数组 | Array |	是 | [{latitude: 0, longitude: 0}]|
| strokeWidth |	描边的宽度 | Number | 否 ||
| strokeColor |	描边的颜色 | String | 否 | 8位十六进制表示，后两位表示alpha值，如：#000000AA|
| fillColor | 填充颜色 | String | 否 | 8位十六进制表示，后两位表示alpha值，如：#000000AA|
| zIndex | 设置多边形Z轴数值 | Number | 否 | `` |

### circles
**解释**：在地图上显示圆<div></div><text class="notice">属性说明:</text>

| 属性名 | 说明 | 类型  | 必填  | 备注 |
|---- | ---- | ---- |---- | ---- |
| latitude | 纬度 | Number | 是 | 浮点数，范围 -90 ~ 90 |
| longitude | 经度 | Number | 是 | 浮点数，范围 -180 ~ 180 |
| color | 描边的颜色 | String | 否 | 8位十六进制表示，后两位表示alpha值，如：#000000AA |
| fillColor | 填充颜色 | String | 否 | 8位十六进制表示，后两位表示alpha值，如：#000000AA |
| radius | 半径 | Number | 是 |  - |
| strokeWidth | 描边的宽度 | Number | 否 | `` |
### controls
**解释**：在地图上显示控件，控件不随着地图移动<div></div><text class="notice">属性说明:</text>

| 属性名 | 说明 | 类型  | 必填  | 备注 |
|---- | ---- | ---- |---- | ---- |
| id | 控件id | Number | 否 | 在控件点击事件回调会返回此id |
| position | 控件在地图的位置 | Object | 是 | 控件相对地图位置 |
| iconPath | 显示的图标 | String | 是 | 项目目录下的图片路径，支持相对路径写法，以'/'开头则表示相对智能小程序根目录；也支持临时路径 |
| clickable | 是否可点击 | Boolean | 否 | 默认不可点击 |
#### position
<text class="notice">属性说明:</text>

| 属性名 | 说明 | 类型  | 必填  | 备注 |
|---- | ---- | ---- |---- | ---- |
| left | 距离地图的左边界多远 | Number | 否 | 默认为0 |
| top | 距离地图的上边界多远 | Number | 否 | 默认为0 |
| width | 控件宽度 | Number | 否 | 默认为图片宽度 |
| height | 控件高度 | Number | 否 | 默认为图片高度 |


**示例**：
<a href="swanide://fragment/fd809ae921113fe3b5a684cd8c69541d1565587461294" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果
        </a>

* 在 swan 文件中

```xml
<view class="wrap">
    <map
        style="width: 100%; height: 300px;"
        longitude="{{longitude}}"
        latitude="{{latitude}}"
        scale="{{scale}}"
        markers="{{markers}}"
        polyline="{{polyline}}"
        polygons="{{drawPolygon ? polygons : []}}"
        circles="{{circles}}"
        controls="{{controls}}"
        show-location="{{show-location}}"
        include-points="{{include-points}}"
        enable-3D="{{enable3d}}"
        show-compass="{{showCompass}}"
        enable-overlooking="{{enableOverlooking}}"
        enable-zoom="{{enableZoom}}"
        enable-scroll="{{enableScroll}}"
        enable-rotate="{{enableRotate}}"
        bindmarkertap="onMarkertap" bindcallouttap="onCallouttap" bindcontroltap="onControltap" bindregionchange="onRegionchange" bindtap="onTap" bindupdated="onUpdated">
    </map>
</view>
```

* 在 js 文件中

```js
Page({
    data: {
        scale: 16,
        latitude: '40.048828',
        longitude: '116.280412',
        polyline:[],
        circles:[],
        enable3d: false,
        showCompass: false,
        showLocation: true,
        enableOverlooking: false,
        enableZoom: true,
        enableScroll: true,
        enableRotate: false,
        drawPolygon: false,
        enableSatellite: false,
        enableTraffic: false,
        markers: [{
            markerId: '1',
            latitude: '40.052751',
            longitude: '116.278796'
        }, {
            markerId: '2',
            latitude: '40.048828',
            longitude: '116.280412',
            callout: {
                display: 'ALWAYS',
                content: '百度科技园'
            }
        }, {
            markerId: '3',
            latitude: '40.049655',
            longitude: '116.27505',
            callout: {
                display: 'ALWAYS',
                content: '西山壹号院'
            }
        }],
        polyline: [{
            points: [{
                longitude: 116.278796,
                latitude: 40.048828
            }, {
                longitude: 116.27505,
                latitude: 40.049655
            }],
            color: '#FF5F41FF',
            width: 2,
            dottedLine: true
        }],
        controls: [{
            controlId: 1,
            iconPath: '/images/api_logo.png',
            position: {
                left: 0,
                top: 100,
                width: 50,
                height: 50
            },
            clickable: true
        }],
        circles: [{
            latitude: '40.052751',
            longitude: '116.278796',
            color: '#FF5F41FF',
            fillColor: '#21FFFFFF',
            radius: '200',
            strokeWidth: '2'
        }]
    },
    onReady() {
        console.log('map ready');
        this.mapContext = swan.createMapContext('myMap');
    },
    toggle3d() {
        this.setData({
            enable3d: !this.data.enable3d
        })
    },
    toggleShowCompass() {
        this.setData({
            showCompass: !this.data.showCompass
        })
    },
    toggleRotate() {
        this.setData({
          enableRotate: !this.data.enableRotate
        })
    },
    togglePolygon() {
        this.setData({
          drawPolygon: !this.data.drawPolygon
        })
      },
      toggleSatellite() {
        this.setData({
          enableSatellite: !this.data.enableSatellite
        })
      },
      toggleTraffic() {
        this.setData({
          enableTraffic: !this.data.enableTraffic
        })
      },
    demoCircle() {
        this.setData({
            scale: 16,
            longitude,
            latitude,
            circles: [{
            latitude: '40.048828',
            longitude: '116.280412',
            color: '#BB76FF88',
            fillColor: '#BB76FF33',
            radius: 100,
            strokeWidth:3,
            }]
        });
    },
    toggleOverlooking() {
        this.setData({
          enableOverlooking: !this.data.enableOverlooking
        })
    },
    onMarkertap(e) {
        console.log('onMarkertap callback:');
        console.log(e);
    },
    onCallouttap(e) {
        console.log('onCallouttap callback:');
        console.log(e);
    },
    onControltap(e) {
        console.log('onControltap callback:');
        console.log(e);
    },
    onRegionchange(e) {
        console.log('onRegionchange callback:');
        console.log(e);
    },
    onTap(e) {
        console.log('onTap callback:');
        console.log(e);
    },
    onUpdated(e) {
        console.log('onUpdated callback::');
        console.log(e);
    }
});
```


**Bug & Tip**：

* 地图组件的经纬度必填, 如果不填经纬度则默认值是北京的经纬度。
* map 组件是由客户端创建的原生组件，它的层级是最高的，不能通过 z-index 控制层级。
* 请勿在 scroll-view、swiper、picker-view、movable-view 中使用 map 组件。
* CSS 动画对 map 组件无效。
* cover-view、cover-image 组件可覆盖在map组件之上。
* map组件的 markers 的 label 暂不支持换行。
* Android 与 iOS 定位精度不同，双端定位存在差异。
* map 组件使用的经纬度是火星坐标系，调用 swan.getLocation 接口需要指定 type 为 gcj02。