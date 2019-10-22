---
title: MapContext
header: develop
nav: api
sidebar: MapContext
---



**解释**：map 返回值。

**示例**：

<a href="swanide://fragment/f95be9b50c98489dfbaec599db78672f1557727607625" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <map id="myMap" style="width: 100%"
     scale="{{scale}}"
     longitude="{{longitude}}"
     latitude="{{latitude}}"
     markers="{{markers}}"
     position="{{position}}"
     showLocation="{{showLocation}}"
     polyline="{{polyline}}"
     controls="{{controls}}"
     circles="{{circles}}"></map>
    <button type="primary" bindtap="getCenterLocation">获取位置</button>
    <button type="primary" bindtap="moveToLocation">移动位置</button>
    <button type="primary" bindtap="translateMarker">移动标注</button>
    <button type="primary" bindtap="includePoints">缩放视野展示所有经纬度</button>
    <button type="primary" bindtap="getRegion">获取当前地图的视野范围</button>
</view>
```

* 在 js 文件中

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
            iconPath: '/images/group.png',
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
        this.mapContext = swan.createMapContext('myMap');
    },
    getCenterLocation: function () {
        this.mapContext.getCenterLocation({
            success: res => {
                console.log("经度", res.longitude);
                console.log("纬度", res.latitude);
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
            success: res => {
                console.log("西南角的经纬度", res.southwest);
                console.log("东北角的经纬度", res.northeast);
            }
        });
    }
});
```


**图示**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="../../../img/api/location/createMapContext.png">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>


