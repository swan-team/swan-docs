---
title: 地图
header: develop
nav: component
sidebar: map
---

map
-----
<div class="notice">解释： </div>地图<div></div><text class="notice">属性说明:</text>

|属性名 |类型  |默认值  |说明|
|---- | ---- | ---- |---- |
| longitude | Number | | 中心经度 |
| latitude | Number | | 中心纬度 |
| scale |  Number | 16 | 缩放级别，取值范围为4-21 |
| markers |  Array |  | 标记点 |
| polyline |  Array |  | 路线 |
| circles |  Array |  |  圆 |
| controls |  Array |  | 控件 |
| include-points |  Array |  | 缩放视野以包含所有给定的坐标点   |
| show-location | Boolean |  | 显示带有方向的当前定位点 |
| bindmarkertap | EventHandle |  | 点击标记点时触发 |
| bindcallouttap |  EventHandle |  | 点击标记点对应的气泡时触发 |
| bindcontroltap | EventHandle |  | 点击控件时触发 |
| bindregionchange | EventHandle |  | 视野发生变化时触发 |
| bindtap | EventHandle |  | 点击地图时触发 |
| bindupdated | EventHandle |  | 在地图渲染更新完成时触发 |


<notice>markers</notice>

> 标记点用于在地图上显示标记的位置<div></div><text class="notice">属性说明:</text>

| 属性名 | 说明 | 类型  | 必填  | 备注 |
|---- | ---- | ---- |---- | ---- |
| id | 标记点id | Number | 否 | marker点击事件回调会返回此id。建议为每个marker设置上Number类型id，保证更新marker时有更好的性能。 |
| latitude | 纬度 | Number | 是 | 浮点数，范围 -90 ~ 90 |
| longitude | 经度 | Number | 是 | 浮点数，范围 -180 ~ 180 |
| title  | 标注点名  | String | 否    |  |
| iconPath | 显示的图标 | String | 是 | 项目目录下的图片路径，支持相对路径写法，以'/'开头则表示相对智能小程序根目录；也支持临时路径 |
| rotate | 旋转角度 | Number | 否 | 顺时针旋转的角度，范围 0 ~ 360，默认为 0 |
| alpha | 标注的透明度 | Number    | 否 | 默认1，无透明 |
| width | 标注图标宽度 | Number | 否 | 默认为图片实际宽度 |
| height | 标注图标高度 | Number | 否 | 默认为图片实际高度 |
| callout | 自定义标记点上方的气泡窗口 | Object | 否 | 支持的属性见下表，可识别换行符。 |
| label | 为标记点旁边增加标签 | Object | 否 | 支持的属性见下表，可识别换行符。 |
| anchor | 经纬度在标注图标的锚点，默认底边中点 | Object | 否 | {x, y}，x表示横向(0-1)，y表示竖向(0-1)。{x: .5, y: 1} 表示底边中点 |

> marker 上的气泡 callout<div></div><text class="notice">属性说明:</text>

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

> marker 上的气泡 label<div></div><text class="notice">属性说明:</text>

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

polyline
-----
> 指定一系列坐标点，从数组第一项连线至最后一项<div></div><text class="notice">属性说明:</text>

| 属性名 | 说明 | 类型  | 必填  | 备注 |
|---- | ---- | ---- |---- | ---- |
| points | 经纬度数组 | Array | 是 | [{latitude: 0, longitude: 0}] |
| color | 线的颜色 | String | 否 | 8位十六进制表示，后两位表示alpha值，如：#000000AA |
| width | 线的宽度 | Number | 否 |  |
| dottedLine | 是否虚线  | Boolean | 否 | 默认false |
| arrowLine | 带箭头的线 | Boolean | 否 | 默认false，开发者工具暂不支持该属性     |
| arrowIconPath | 更换箭头图标 | String | 否 | 在arrowLine为true时生效 |
| borderColor | 线的边框颜色 | String | 否 |  |
| borderWidth | 线的厚度 | Number | 否 | `` |

circles
-----
> 在地图上显示圆<div></div><text class="notice">属性说明:</text>

| 属性名 | 说明 | 类型  | 必填  | 备注 |
|---- | ---- | ---- |---- | ---- |
| latitude | 纬度 | Number | 是 | 浮点数，范围 -90 ~ 90 |
| longitude | 经度 | Number | 是 | 浮点数，范围 -180 ~ 180 |
| color | 描边的颜色 | String | 否 | 8位十六进制表示，后两位表示alpha值，如：#000000AA |
| fillColor | 填充颜色 | String | 否 | 8位十六进制表示，后两位表示alpha值，如：#000000AA |
| radius | 半径 | Number | 是 |  |
| strokeWidth | 描边的宽度 | Number | 否 | `` |


controls
-----
> 在地图上显示控件，控件不随着地图移动<div></div><text class="notice">属性说明:</text>

| 属性名 | 说明 | 类型  | 必填  | 备注 |
|---- | ---- | ---- |---- | ---- |
| id | 控件id | Number | 否 | 在控件点击事件回调会返回此id |
| position | 控件在地图的位置 | Object | 是 | 控件相对地图位置 |
| iconPath | 显示的图标 | String | 是 | 项目目录下的图片路径，支持相对路径写法，以'/'开头则表示相对智能小程序根目录；也支持临时路径 |
| clickable | 是否可点击 | Boolean | 否 | 默认不可点击 |


position
-----
<text class="notice">属性说明:</text>

| 属性名 | 说明 | 类型  | 必填  | 备注 |
|---- | ---- | ---- |---- | ---- |
| left | 距离地图的左边界多远 | Number | 否 | 默认为0 |
| top | 距离地图的上边界多远 | Number | 否 | 默认为0 |
| width | 控件宽度 | Number | 否 | 默认为图片宽度 |
| height | 控件高度 | Number | 否 | 默认为图片高度 |

<notie>地图组件的经纬度必填, 如果不填经纬度则默认值是北京的经纬度。</notie>

<notie>示例：</notie>

```xml
<!-- map.swan -->
<map id="myMap"
     style="width: 100%"
     scale="{{scale}}"
     longitude="{{longitude}}"
     latitude="{{latitude}}"
     markers="{{markers}}"
     position="{{position}}"
     showLocation="{{showLocation}}"
     polyline="{{polyline}}"
     controls="{{controls}}"
     circles="{{circles}}"
     bindmarkertap="onMarkertap" bindcallouttap="onCallouttap" bindcontroltap="onControltap" bindregionchange="onRegionchange" bindtap="onTap" bindupdated="onUpdated"></map>
```

```js
Page({
    data: {
        scale: 16,
        latitude: '40.048828',
        longitude: '116.280412',
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
        showLocation: '1',
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
}

```


<notice>Tips:</notice>

1、map 组件是由客户端创建的原生组件，它的层级是最高的，不能通过 z-index 控制层级
2、请勿在 scroll-view、swiper、picker-view、movable-view 中使用 map 组件
3、CSS 动画对 map 组件无效
