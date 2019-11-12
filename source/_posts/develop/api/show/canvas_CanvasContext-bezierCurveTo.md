---
title: CanvasContext.bezierCurveTo
header: develop
nav: api
sidebar:  canvas_CanvasContext-bezierCurveTo
---




 


**解释**：创建三次方贝塞尔曲线路径。

**方法参数**：Number cp1x, Number cp1y, Number cp2, Number cp2y, Number x, Number y

**`cp1x`参数说明**：第一个贝塞尔控制点的 x 坐标 

**`cp1y`参数说明**：第一个贝塞尔控制点的 y 坐标

**`cp2x`参数说明**：第二个贝塞尔控制点的 x 坐标 

**`cp2y`参数说明**：第二个贝塞尔控制点的 y 坐标 

**`x`参数说明**：结束点的 x 坐标  

**`y`参数说明**：结束点的 y 坐标 

**代码示例**：

```js
const CanvasContext = swan.createCanvasContext('myCanvas');
// Draw quadratic curve
CanvasContext.beginPath();
CanvasContext.moveTo(20, 20);
CanvasContext.bezierCurveTo(20, 100, 200, 100, 200, 20);
CanvasContext.setStrokeStyle('black');
CanvasContext.stroke();

CanvasContext.draw();
```

![图片](../../../../img/api/canvas/bezierCurveTo.png)

