---
title: CanvasContext.arc
header: develop
nav: api
sidebar: canvas_CanvasContext.arc
---


 


 


**解释**：画一条弧线。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_createCanvasContext.png"  class="demo-qrcode-image" />

**方法参数**：Number x, Number y, Number r, Number sAngle, Number eAngle, Boolean counterclockwise

**`x`参数说明**：圆的 x 坐标

**`y`参数说明**：圆的 y 坐标

**`r`参数说明**：圆的半径

**`sAngle`参数说明**：起始弧度，单位弧度（在3点钟方向)

**`eAngle`参数说明**：终止弧度

**`counterclockwise`参数说明**：可选。指定弧度的方向是逆时针还是顺时针。默认是 false，即顺时针。

**图片示例**：

![图片](../../../../img/api/canvas/arc.png)

**代码示例**：

<a href="swanide://fragment/6e90c6683d0c5676207fd5eefa1c06b71573723566960" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
const canvasContext = swan.createCanvasContext('myCanvas');
canvasContext.arc(100, 75, 50, 0, 2 * Math.PI);
canvasContext.setFillStyle('blue');
canvasContext.fill();
canvasContext.draw();
```



