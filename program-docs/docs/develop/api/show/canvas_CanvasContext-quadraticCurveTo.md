---
title: CanvasContext.quadraticCurveTo
header: develop
nav: api
sidebar:  canvas_CanvasContext-quadraticCurveTo
---
 
**解释**：创建二次贝塞尔曲线路径。

 
## 方法参数

 
|参数名|属性|必填|默认值|说明|
|----|----|----|---|---|
| `cpx`|Number|是|| 贝塞尔控制点的 x 坐标 |
| `cpy`|Number|是|| 贝塞尔控制点的 y 坐标 |
| `x`|Number|是|| 结束点的 x 坐标  |
| `y`|Number|是|| 结束点的 y 坐标 |
## 示例

 
### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_createCanvasContext.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
![图片](../../../../img/api/canvas/quadraticCurveTo.png)

###  代码示例1 

<a href="swanide://fragment/d2d5ff700bbf4feba2a4bf925e0c8d151573725024694" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

:::codeTab
```js
const canvasContext = swan.createCanvasContext('myCanvas');
// Draw quadratic curve
canvasContext.beginPath();
canvasContext.moveTo(20, 20);
canvasContext.quadraticCurveTo(20, 100, 200, 20);
canvasContext.setStrokeStyle('blue');
canvasContext.stroke();

canvasContext.draw();
```
:::
###  代码示例2 

<a href="swanide://fragment/6e73fcc749e65bb89a9d52f036dc2b381575452070798" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

:::codeTab
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
        ctx.setFillStyle('blue')
        ctx.fill()

        ctx.setFillStyle('black')
        ctx.setFontSize(12)

        // Draw guides
        ctx.beginPath()
        ctx.moveTo(20, 20)
        ctx.lineTo(20, 100)
        ctx.lineTo(200, 20)
        ctx.setStrokeStyle('#AAAAAA')
        ctx.stroke()

        // Draw quadratic curve
        ctx.beginPath()
        ctx.moveTo(20, 20)
        ctx.quadraticCurveTo(20, 100, 200, 20)
        ctx.setStrokeStyle('black')
        ctx.stroke()

        ctx.draw()
    }
});
```
:::


