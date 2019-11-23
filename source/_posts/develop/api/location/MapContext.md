---
title: MapContext
header: develop
nav: api
sidebar: MapContext
---



**解释**：map 返回值。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_createMapContext.png"  class="demo-qrcode-image" />

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/createMapContext.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：

<a href="swanide://fragment/f65cf95759e65c9d01bcf3ce0d70f7981573558407387" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="container">
    <map id="myMap" 
        longitude="{{longitude}}"
        latitude="{{latitude}}"
        style="width: 100%"  
        markers="{{markers}}"
        show-location>
    </map>
    <button type="primary" bindtap="getCenterLocation">获取位置</button>
	<button type="primary" bindtap="moveToLocation">移动位置</button>
	<button type="primary" bindtap="translateMarker">平移 marker</button>
	<button type="primary" bindtap="includePoints">缩放视野展示所有经纬度</button>
	<button type="primary" bindtap="getRegion">获取当前地图的视野范围</button>
    <button type="primary" bindtap="getScale">获取当前地图的缩放级别</button>
</view>
```

* 在 js 文件中

```js
    data: {
        latitude: 40.048828,
        longitude: 116.280412,  
        markers: [{
            markerId: 1,
            latitude: 40.052751,
            longitude: 116.278796
        }, {
            markerId: 2,
            latitude: 40.048828,
            longitude: 116.280412,
            callout: {
                display: 'ALWAYS',
                content: '百度科技园'
            }
        }] 
    },
    onReady() {
        this.mapContext = swan.createMapContext('myMap');
    },
    getCenterLocation: function () {
        this.mapContext.getCenterLocation({
            success: function (res) {
                swan.showModal({
                    title: '位置信息',
                    content: (res.longitude).toFixed(2) + '/' + (res.latitude).toFixed(2)
                });
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
            markerId: '2',
            destination: {
                latitude: 40.049655,
                longitude: 116.27505,
            },
            autoRotate: true,
            rotate: 30,
            duration: 1000,
            animationEnd() {
                swan.showToast({
                    title: '动画结束啦！',
                    icon: 'none'
                });
            },
            success(res) {
                console.log('success', res)
            },
            fail (err) {
                console.log('fail', err)
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
            }],
            success: function (res) {
                console.log(res)
            },
            fail: function (err) {
                    
            }
        })  
    },
    getRegion: function () {
        this.mapContext.getRegion({
            success: function (res) {
                swan.showModal({
                    title: '视野范围',
                    content: 'northeast: ' + JSON.stringify(
                       res.northeast) + '/' + "southwest: " + JSON.stringify(res.southwest)
                });
                console.log("视野范围", res);
            }
        })
    },
    getScale: function () {
        this.mapContext.getScale({
            success: function (res) {
                swan.showModal({
                    title: '缩放级别',
                    content: JSON.stringify(res.scale)
                });
            }
        })       
    }
});
```


