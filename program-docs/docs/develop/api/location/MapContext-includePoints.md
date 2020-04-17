---
title: MapContext.includePoints
header: develop
nav: api
sidebar: MapContext-includePoints
---


**解释**：缩放视野展示所有经纬度。

 
## 方法参数 
 
 Object object


### `object`参数说明  

|属性名 |类型  |默认值 |必填|说明|
|---- | ---- | ---- |---- |---|
|points  |Array  |   |是  |要显示在可视区域内的坐标点列表。|
|padding  |Array  |    |否 |坐标点形成的矩形边缘到地图边缘的距离，单位像素。格式为[上,右,下,左]，安卓上只能识别数组第一项，上下左右的 padding 一致。开发者工具暂不支持 padding 参数。|
|success|	function|	|		否|接口调用成功的回调函数|
|fail	|function	|	|否|	接口调用失败的回调函数|
|complete|	function|		|否|	接口调用结束的回调函数（调用成功、失败都会执行）|


### points返回参数说明  

|参数 | 类型 |说明|
|---- | ---- | ---- |
|longitude|String|经度|
|latitude|String|纬度|


## 示例

 <a href="swanide://fragment/d920818b854d716aa8787795cfd47b561573554788777" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_MapContextIncludePoints.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例  

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/includePoints.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### 代码示例 

* 在 js 文件中

```js
Page({
    data: { },
    onReady() {
        this.mapContext = swan.createMapContext('myMap');
    },
    includePointsOne: function () {
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
    includePointsTwo: function() {
        this.mapContext.includePoints({
            padding: [10],
            points: [{
                latitude: 39.91,
                longitude: 106.40,
            }, {
                latitude: 41,
                longitude: 120,
            }],
            success: function (res) {
                console.log(res)
            },
            fail: function (err) {
                    
            }
        })
    }
});

```