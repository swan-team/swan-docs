---
title: CanvasContext.clearRect
header: develop
nav: api
sidebar: canvas_CanvasContext-clearRect
---



 
**解释**：清除画布上在该矩形区域内的内容。

**方法参数**：Number x, Number y, Number width, Number height

**`x`参数说明**：矩形路径左上角的 x 坐标。

**`y`参数说明**：矩形路径左上角的 y 坐标。

**`width`参数说明**：矩形路径的宽度。

**`height`参数说明**：矩形路径的高度。

**示例**：

```js
const CanvasContext = swan.createCanvasContext('myCanvas');
CanvasContext.setFillStyle('red');
CanvasContext.fillRect(0, 0, 150, 200);
CanvasContext.setFillStyle('blue');
CanvasContext.fillRect(150, 0, 150, 200);
CanvasContext.clearRect(30, 30, 150, 75);
CanvasContext.draw();
```

![图片](../../../../img/api/canvas/clearRect.png)


