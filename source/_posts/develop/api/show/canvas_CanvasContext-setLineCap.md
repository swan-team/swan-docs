---
title: CanvasContext.setLineCap
header: develop
nav: api
sidebar:  canvas_CanvasContext-setLineCap
---



 
**解释**：设置线条的端点样式。

**方法参数**：String lineCap

**`lineCap`参数说明**：有效值：'butt'、'round'、'square', 线条的结束端点样式。

**示例**：

```js
const CanvasContext = swan.createCanvasContext('myCanvas');
CanvasContext.beginPath();
CanvasContext.moveTo(30, 10);
CanvasContext.lineTo(200, 10);
CanvasContext.stroke();

CanvasContext.beginPath();
CanvasContext.setLineCap('butt');
CanvasContext.setLineWidth(10);
CanvasContext.moveTo(50, 30);
CanvasContext.lineTo(200, 30);
CanvasContext.stroke();

CanvasContext.beginPath();
CanvasContext.setLineCap('round');
CanvasContext.setLineWidth(10);
CanvasContext.moveTo(70, 50);
CanvasContext.lineTo(200, 50);
CanvasContext.stroke();

CanvasContext.beginPath();
CanvasContext.setLineCap('square');
CanvasContext.setLineWidth(10);
CanvasContext.moveTo(90, 70);
CanvasContext.lineTo(200, 70);
CanvasContext.stroke();

CanvasContext.draw();
```

![图片](../../../../img/api/canvas/setLineCap.png)
