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

<a href="swanide://fragment/44364a5e7710fd57be9c2269dbcba3f11573719980297" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
const canvasContext = swan.createCanvasContext('myCanvas');

// Create circular gradient
const grd = canvasContext.createCircularGradient(75, 50, 50);
grd.addColorStop(0, 'red');
grd.addColorStop(1, 'blue');

// Fill with gradient
canvasContext.setFillStyle(grd);
canvasContext.fillRect(30, 30, 150, 80);
canvasContext.draw();
```

![图片](../../../../img/api/canvas/createCircularGradient.png)

