---
title: CanvasContext.rect
header: develop
nav: api
sidebar: canvas_CanvasContext_rect
---

 

**解释**：创建一个矩形。

**方法参数**：Number x, Number y, Number width, Number height

**`x`参数说明**：矩形路径左上角的 x 坐标。

**`y`参数说明**：矩形路径左上角的 y 坐标。

**`width`参数说明**：矩形路径的宽度。

**`height`参数说明**：矩形路径的高度。

**代码示例**：

```js
const CanvasContext = swan.createCanvasContext('myCanvas');
CanvasContext.rect(30, 30, 150, 75);
CanvasContext.setFillStyle('blue');
CanvasContext.fill();
CanvasContext.draw();
```

![图片](../../../../img/api/canvas/rect.png)

