---
title: CanvasContext.setLineJoin
header: develop
nav: api
sidebar: canvas_CanvasContext_setLineJoin
---
 

**解释**：设置线条的交点样式。

**方法参数**：String lineJoin

**`lineJoin`参数说明**：取值范围：'bevel'、'round'、'miter'， 线条的结束交点样式。  

**示例**：

```js
const CanvasContext = swan.createCanvasContext('myCanvas');
CanvasContext.beginPath();
CanvasContext.moveTo(10, 10);
CanvasContext.lineTo(100, 50);
CanvasContext.lineTo(10, 90);
CanvasContext.stroke();

CanvasContext.beginPath();
CanvasContext.setLineJoin('bevel');
CanvasContext.setLineWidth(10);
CanvasContext.moveTo(50, 10);
CanvasContext.lineTo(140, 50);
CanvasContext.lineTo(50, 90);
CanvasContext.stroke();

CanvasContext.beginPath();
CanvasContext.setLineJoin('round');
CanvasContext.setLineWidth(10);
CanvasContext.moveTo(90, 10);
CanvasContext.lineTo(180, 50);
CanvasContext.lineTo(90, 90);
CanvasContext.stroke();

CanvasContext.beginPath();
CanvasContext.setLineJoin('miter');
CanvasContext.setLineWidth(10);
CanvasContext.moveTo(130, 10);
CanvasContext.lineTo(220, 50);
CanvasContext.lineTo(130, 90);
CanvasContext.stroke();

CanvasContext.draw();
```

![图片](../../../../img/api/canvas/setLineJoin.png)

