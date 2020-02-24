---
title: CanvasContext.bezierCurveTo
header: develop
nav: api
sidebar:  canvas_CanvasContext-bezierCurveTo
---




 


**解释**：创建三次方贝塞尔曲线路径。
 
## 方法参数 


|参数名|属性|必填|默认值|说明|
|----|----|----|---|---|
| `cp1x`|Number|是||第一个贝塞尔控制点的 x 坐标 |
| `cp1y`|Number|是||第一个贝塞尔控制点的 y 坐标|
| `cp2x`|Number|是||第二个贝塞尔控制点的 x 坐标 |
| `cp2y`|Number|是||第二个贝塞尔控制点的 y 坐标 |
| `x`|Number|是||结束点的 x 坐标  |
| `y`|Number|是||结束点的 y 坐标 |

## 示例

 

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_createCanvasContext.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  

![图片](../../../../img/api/canvas/bezierCurveTo.png)

###  代码示例1 

<a href="swanide://fragment/f54afefdc128050accdc18a9e52296911573724955575" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
const canvasContext = swan.createCanvasContext('myCanvas');
// Draw quadratic curve
canvasContext.beginPath();
canvasContext.moveTo(20, 20);
canvasContext.bezierCurveTo(20, 100, 200, 100, 200, 20);
canvasContext.setStrokeStyle('black');
canvasContext.stroke();

canvasContext.draw();
```

###  代码示例2 曲线起始点/控制点/终止点 

<a href="swanide://fragment/f5f979aa61812c9be7871b0f53e4fea01575452224950" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
Page({
    onReady: function () {
        const ctx = swan.createCanvasContext('myCanvas')
        // Draw points
        ctx.beginPath()
        ctx.arc(20, 20, 2, 0, 2 * Math.PI)
        ctx.setFillStyle('red')
        ctx.fill()

        ctx.beginPath()
        ctx.arc(200, 20, 2, 0, 2 * Math.PI)
        ctx.setFillStyle('lightgreen')
        ctx.fill()

        ctx.beginPath()
        ctx.arc(20, 100, 2, 0, 2 * Math.PI)
        ctx.arc(200, 100, 2, 0, 2 * Math.PI)
        ctx.setFillStyle('blue')
        ctx.fill()

        ctx.setFillStyle('black')
        ctx.setFontSize(12)

        // Draw guides
        ctx.beginPath()
        ctx.moveTo(20, 20)
        ctx.lineTo(20, 100)
        ctx.lineTo(150, 75)

        ctx.moveTo(200, 20)
        ctx.lineTo(200, 100)
        ctx.lineTo(70, 75)
        ctx.setStrokeStyle('#AAAAAA')
        ctx.stroke()

        // Draw quadratic curve
        ctx.beginPath()
        ctx.moveTo(20, 20)
        ctx.bezierCurveTo(20, 100, 200, 100, 200, 20)
        ctx.setStrokeStyle('black')
        ctx.stroke()

        ctx.draw()
    }
});
```


