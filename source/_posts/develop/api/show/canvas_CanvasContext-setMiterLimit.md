---
title: CanvasContext.setMiterLimit
header: develop
nav: api
sidebar: canvas_CanvasContext-setMiterLimit
---



 


**解释**：设置最大斜接长度，斜接长度指的是在两条线交汇处内角和外角之间的距离。当 setLineJoin() 为 miter 时，该设置才有效。超过最大倾斜长度的，连接处将以 lineJoin 为 bevel 来显示。

**方法参数**： Number miterLimit

**`miterLimit`参数说明：**最大斜接长度  

**示例**：

```js
const CanvasContext = swan.createCanvasContext('myCanvas');
CanvasContext.beginPath();
CanvasContext.setLineWidth(10);
CanvasContext.setLineJoin('miter');
CanvasContext.setMiterLimit(1);
CanvasContext.moveTo(10, 10);
CanvasContext.lineTo(100, 50);
CanvasContext.lineTo(10, 90);
CanvasContext.stroke();

CanvasContext.beginPath();
CanvasContext.setLineWidth(10);
CanvasContext.setLineJoin('miter');
CanvasContext.setMiterLimit(2);
CanvasContext.moveTo(50, 10);
CanvasContext.lineTo(140, 50);
CanvasContext.lineTo(50, 90);
CanvasContext.stroke();

CanvasContext.beginPath();
CanvasContext.setLineWidth(10);
CanvasContext.setLineJoin('miter');
CanvasContext.setMiterLimit(3);
CanvasContext.moveTo(90, 10);
CanvasContext.lineTo(180, 50);
CanvasContext.lineTo(90, 90);
CanvasContext.stroke();

CanvasContext.beginPath();
CanvasContext.setLineWidth(10);
CanvasContext.setLineJoin('miter');
CanvasContext.setMiterLimit(4);
CanvasContext.moveTo(130, 10);
CanvasContext.lineTo(220, 50);
CanvasContext.lineTo(130, 90);
CanvasContext.stroke();

CanvasContext.draw();
```

![图片](../../../../img/api/canvas/setMiterLimit.png)

