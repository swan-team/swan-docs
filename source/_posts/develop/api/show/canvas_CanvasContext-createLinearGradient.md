---
title: CanvasContext.createLinearGradient
header: develop
nav: api
sidebar: canvas_CanvasContext-createLinearGradient
---

 

**解释**：创建一个线性的渐变颜色。

**方法参数**：Number x0，Number y0，Number x1，Number y1

**`x0`参数说明**：起点的 x 坐标

**`y0`参数说明**：起点的 y 坐标

**`x1`参数说明**：终点的 x 坐标

**`y1`参数说明**：终点的 y 坐标



**代码示例**：

<a href="swanide://fragment/44364a5e7710fd57be9c2269dbcba3f11573719980297" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
const CanvasContext = this.createCanvasContext('myCanvas');

// Create linear gradient
const grd = CanvasContext.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, 'blue');
grd.addColorStop(1, 'red');

// Fill with gradient
CanvasContext.setFillStyle(grd);
CanvasContext.fillRect(30, 30, 150, 80);
CanvasContext.draw();
```

![图片](../../../../img/api/canvas/createLinearGradient.png)

