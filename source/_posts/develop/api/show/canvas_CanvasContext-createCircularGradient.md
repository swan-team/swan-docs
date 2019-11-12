---
title: CanvasContext.createCircularGradient
header: develop
nav: api
sidebar: canvas_CanvasContext-createCircularGradient
---
  

**解释**：创建一个圆形的渐变颜色。

**方法参数**：Number x，Number y，Number z

**`x`参数说明**：圆心的 x 坐标

**`y`参数说明**：圆心的 y 坐标

**`z`参数说明**：圆的半径


**代码示例**：

```js
const CanvasContext = swan.createCanvasContext('myCanvas');

// Create circular gradient
const grd = CanvasContext.createCircularGradient(75, 50, 50);
grd.addColorStop(0, 'red');
grd.addColorStop(1, 'blue');

// Fill with gradient
CanvasContext.setFillStyle(grd);
CanvasContext.fillRect(30, 30, 150, 80);
CanvasContext.draw();
```

![图片](../../../../img/api/canvas/createCircularGradient.png)

