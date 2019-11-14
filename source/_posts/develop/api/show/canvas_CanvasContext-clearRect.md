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

**代码示例**：

<a href="swanide://fragment/3b71cc1ec5750d4b8555c914f211fe761573722908842" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
const canvasContext = swan.createCanvasContext('myCanvas');
canvasContext.setFillStyle('blue');
canvasContext.fillRect(0, 0, 150, 200);
canvasContext.setFillStyle('blue');
canvasContext.fillRect(150, 0, 150, 200);
canvasContext.clearRect(30, 30, 150, 75);
canvasContext.draw();
```

![图片](../../../../img/api/canvas/clearRect.png)


