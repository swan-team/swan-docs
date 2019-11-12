---
title: CanvasContext.arc
header: develop
nav: api
sidebar: canvas_CanvasContext.arc
---


 


 


**解释**：画一条弧线。

**方法参数**：Number x, Number y, Number r, Number sAngle, Number eAngle, Boolean counterclockwise

**`x`参数说明**：圆的 x 坐标

**`y`参数说明**：圆的 y 坐标

**`r`参数说明**：圆的半径

**`sAngle`参数说明**：起始弧度，单位弧度（在3点钟方向)

**`eAngle`参数说明**：终止弧度

**`counterclockwise`参数说明**：可选。指定弧度的方向是逆时针还是顺时针。默认是 false，即顺时针。


**代码示例**：

```js
const CanvasContext = swan.createCanvasContext('myCanvas');
CanvasContext.arc(100, 75, 50, 0, 2 * Math.PI);
CanvasContext.setFillStyle('blue');
CanvasContext.fill();
CanvasContext.draw();
```

![图片](../../../../img/api/canvas/arc.png)

