---
title: CanvasContext.strokeRect
header: develop
nav: api
sidebar: canvas_CanvasContext-strokeRect
---

 

**解释**：画一个矩形(非填充)。

**方法参数**：Number x, Number y, Number width, Number height

**`x`参数说明**：矩形路径左上角的 x 坐标。

**`y`参数说明**：矩形路径左上角的 y 坐标。

**`width`参数说明**：矩形路径的宽度。

**`height`参数说明**：矩形路径的高度。

**示例**：

```js
const CanvasContext = swan.createCanvasContext('myCanvas');
CanvasContext.setStrokeStyle('blue');
CanvasContext.strokeRect(30, 30, 150, 75);
CanvasContext.draw();
```

![图片](../../../../img/api/canvas/setStrokeStyle.png)

