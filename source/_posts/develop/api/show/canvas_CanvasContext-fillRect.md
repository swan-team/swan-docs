---
title: CanvasContext.fillRect
header: develop
nav: api
sidebar:  canvas_CanvasContext-fillRect
---
 

**解释**：填充一个矩形。

**方法参数**：Number x, Number y,Number width, Number height

**`x`参数说明**：矩形路径左上角的 x 坐标。

**`y`参数说明**：矩形路径左上角的 y 坐标。

**`width`参数说明**：矩形路径的宽度。

**`height`参数说明**：矩形路径的高度。

**图片示例**：

![图片](../../../../img/api/canvas/rect.png)

**代码示例**：

<a href="swanide://fragment/6956a3b2894f09e82be015fa3eef373b1573722652190" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
const canvasContext = swan.createCanvasContext('myCanvas');
canvasContext.setFillStyle('blue');
canvasContext.fillRect(30, 30, 150, 75);
canvasContext.draw();
```


