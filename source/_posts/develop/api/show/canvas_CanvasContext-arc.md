---
title: CanvasContext.arc
header: develop
nav: api
sidebar: canvas_CanvasContext-arc
---


 


 


**解释**：画一条弧线。

 
## 方法参数  

|参数名|属性|必填|默认值|说明|
|----|----|----|---|---|
| `x`|Number| 是||圆的 x 坐标|
| `y`|Number|是||圆的 y 坐标|
| `r`|Number|是||圆的半径|
| `sAngle`|Number|是||起始弧度，单位弧度（在3点钟方向)|
|  `eAngle`|Number|是||终止弧度|
|  `counterclockwise`|Boolean|否| false，即顺时针| 指定弧度的方向是逆时针还是顺时针。|
## 示例

 

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_createCanvasContext.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
![图片](../../../../img/api/canvas/arc.png)

###  代码示例1 ：

<a href="swanide://fragment/6e90c6683d0c5676207fd5eefa1c06b71573723566960" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
const canvasContext = swan.createCanvasContext('myCanvas');
canvasContext.arc(100, 75, 50, 0, 2 * Math.PI);
canvasContext.setFillStyle('blue');
canvasContext.fill();
canvasContext.draw();
```

###  图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/searchbox/icms/searchbox/images/canvasArc.png">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

###  代码示例2 - 连续画弧 ：

<a href="swanide://fragment/146311dc8328aa9991ca70ec0830dffd1581263986723" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
Page({
    onReady() {
        let canvasContext = swan.createCanvasContext('canvas1');
        canvasContext.arc(100, 98, 40, 0, 2 * Math.PI);
        canvasContext.setFillStyle('blue');
        canvasContext.fill();
        canvasContext.setLineWidth(6);
        canvasContext.setStrokeStyle('#FFB7DD');
        canvasContext.setLineCap('round')
        canvasContext.beginPath();
        canvasContext.arc( 75, 65, 20, Math.PI * 0.75,  Math.PI * 1.85, false);
        canvasContext.arc( 115, 60, 20, Math.PI * 1.15,  Math.PI * 2.15, false);
        canvasContext.arc( 140, 90, 20, Math.PI * 1.55,  Math.PI * 2.45, false);
        canvasContext.arc( 125, 125, 20, Math.PI * 1.75,  Math.PI * 2.75, false);
        canvasContext.arc( 90, 135, 20, Math.PI * 2.15,  Math.PI * 3.15, false);
        canvasContext.arc( 60, 105, 20, Math.PI * 2.40,  Math.PI * 3.50, false);
        canvasContext.closePath();
        canvasContext.stroke();
        canvasContext.draw();
    }
});
```

###  代码示例3 - counterclockwise为true ：

<a href="swanide://fragment/5013899c76707b170a24409da4792a6f1575363697582" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
Page({
    onReady: function () {
        const canvasContext = swan.createCanvasContext('myCanvas');
        canvasContext.arc(100, 75, 50, 2, 2 * Math.PI, true);
        canvasContext.setFillStyle('blue');
        canvasContext.fill();
        canvasContext.draw();
    }
});
```

###  代码示例4 - counterclockwise为false ：

<a href="swanide://fragment/044876f82808e355e7bb3b0bd55c35a51575363735429" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
Page({
    onReady: function () {
        const canvasContext = swan.createCanvasContext('myCanvas');
        canvasContext.arc(100, 75, 50, 2, 2 * Math.PI, false);
        canvasContext.setFillStyle('blue');
        canvasContext.fill();
        canvasContext.draw();
    }
});
```



