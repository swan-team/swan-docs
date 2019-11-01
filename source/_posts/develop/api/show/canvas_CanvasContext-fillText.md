---
title: CanvasContext.fillText
header: develop
nav: api
sidebar:  canvas_CanvasContext-fillText
---

 

**解释**：在画布上绘制被填充的文本。

**方法参数**：String text, Number x, Number y, Number maxWidth

**`text`参数说明**： 在画布上输出的文本。
**`x`参数说明： **绘制文本的左上角 x 坐标位置。
**`y`参数说明**： 绘制文本的左上角 y 坐标位置。
**`maxWidth` 参数说明**：| 需要绘制的最大宽度（可选 ）。

**示例**：

```js
const CanvasContext = swan.createCanvasContext('myCanvas');

CanvasContext.setFontSize(20);
CanvasContext.fillText('Hello', 20, 20);
CanvasContext.fillText('World', 100, 100);

CanvasContext.draw();
```

