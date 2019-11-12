---
title: CanvasContext.quadraticCurveTo
header: develop
nav: api
sidebar:  canvas_CanvasContext-quadraticCurveTo
---
 
**解释**：创建二次贝塞尔曲线路径。

**方法参数**：Number cpx, Number cpy, Number x, Number y

**`cpx`参数说明**：贝塞尔控制点的 x 坐标 

**`cpy`参数说明**：贝塞尔控制点的 y 坐标 

**`x`参数说明**：结束点的 x 坐标  

**`y`参数说明**：结束点的 y 坐标 

**代码示例**：

```js
const CanvasContext = swan.createCanvasContext('myCanvas');
// Draw quadratic curve
CanvasContext.beginPath();
CanvasContext.moveTo(20, 20);
CanvasContext.quadraticCurveTo(20, 100, 200, 20);
CanvasContext.setStrokeStyle('blue');
CanvasContext.stroke();

CanvasContext.draw();
```

![图片](../../../../img/api/canvas/quadraticCurveTo.png)

