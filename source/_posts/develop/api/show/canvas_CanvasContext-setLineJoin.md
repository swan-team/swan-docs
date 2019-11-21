---
title: CanvasContext.setLineJoin
header: develop
nav: api
sidebar: canvas_CanvasContext_setLineJoin
---
 

**解释**：设置线条的交点样式。

**方法参数**：String lineJoin

**`lineJoin`参数说明**：有效值：'bevel'、'round'、'miter'， 线条的结束交点样式。  

**图片示例**：

![图片](../../../../img/api/canvas/setLineJoin.png)

**代码示例**：

<a href="swanide://fragment/929c9c0021fb686fcb5292575e4369531573721091729" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
const canvasContext = swan.createCanvasContext('myCanvas');
canvasContext.beginPath();
canvasContext.moveTo(10, 10);
canvasContext.lineTo(100, 50);
canvasContext.lineTo(10, 90);
canvasContext.stroke();

canvasContext.beginPath();
canvasContext.setLineJoin('bevel');
canvasContext.setLineWidth(10);
canvasContext.moveTo(50, 10);
canvasContext.lineTo(140, 50);
canvasContext.lineTo(50, 90);
canvasContext.stroke();

canvasContext.beginPath();
canvasContext.setLineJoin('round');
canvasContext.setLineWidth(10);
canvasContext.moveTo(90, 10);
canvasContext.lineTo(180, 50);
canvasContext.lineTo(90, 90);
canvasContext.stroke();

canvasContext.beginPath();
canvasContext.setLineJoin('miter');
canvasContext.setLineWidth(10);
canvasContext.moveTo(130, 10);
canvasContext.lineTo(220, 50);
canvasContext.lineTo(130, 90);
canvasContext.stroke();

canvasContext.draw();
```


