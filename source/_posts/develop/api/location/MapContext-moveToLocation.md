---
title: MapContext.moveToLocation
header: develop
nav: api
sidebar: MapContext-moveToLocation
---



**解释**：将地图中心移动到当前定位点，需要配合 map 组件的 show-location 使用 。

**方法参数**：无

**示例**：

<a href="swanide://fragment/8bf2b54ba3c1ab6d4a647b2fd8c6e76b1573557224599" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <map id="myMap" 
        longitude="{{longitude}}"
        latitude="{{latitude}}"
        style="width: 100%"  
        show-location
    >
    </map>
    <button type="primary" bindtap="moveToLocation">移动到当前定位点</button>
</view>

```


* 在 js 文件中

```js

Page({
    data: {
        latitude: 40.048828,
        longitude: 116.280412,  
    },
    onReady() {
        this.mapContext = swan.createMapContext('myMap');
    },
    moveToLocation: function () {
        this.mapContext.moveToLocation();
    }
});

```