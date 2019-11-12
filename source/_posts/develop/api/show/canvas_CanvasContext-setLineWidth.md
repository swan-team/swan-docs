---
title: CanvasContext.setLineWidth
header: develop
nav: api
sidebar: canvas_CanvasContext-setLineWidth
---

 

**解释**：设置线条的宽度。

**方法参数**：Number lineWidth

**`lineWidth`参数说明**：线条的宽度(单位是 px)

**代码示例**：

```js
const CanvasContext = swan.createCanvasContext('myCanvas');
CanvasContext.beginPath();
CanvasContext.moveTo(30, 10);
CanvasContext.lineTo(200, 10);
CanvasContext.stroke();

CanvasContext.beginPath();
CanvasContext.setLineWidth(5);
CanvasContext.moveTo(50, 30);
CanvasContext.lineTo(200, 30);
CanvasContext.stroke();

CanvasContext.beginPath();
CanvasContext.setLineWidth(10);
CanvasContext.moveTo(70, 50);
CanvasContext.lineTo(200, 50);
CanvasContext.stroke();

CanvasContext.beginPath();
CanvasContext.setLineWidth(15);
CanvasContext.moveTo(90, 70);
CanvasContext.lineTo(200, 70);
CanvasContext.stroke();

CanvasContext.draw();
```

![图片](../../../../img/api/canvas/setLineWidth.png)

