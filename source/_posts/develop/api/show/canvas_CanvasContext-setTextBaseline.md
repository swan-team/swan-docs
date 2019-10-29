---
title: CanvasContext.setTextBaseline
header: develop
nav: api
sidebar: canvas_CanvasContext.setTextBaseline
---

 
**解释**：用于设置文字的水平对齐。

**方法参数**：String textBaseline

**`textBaseline`参数说明**：有效值 'top'、'bottom'、'middle'、'normal' 。 

**示例**：

```js
const CanvasContext = swan.createCanvasContext('myCanvas');

CanvasContext.setStrokeStyle('red');
CanvasContext.moveTo(5, 75);
CanvasContext.lineTo(295, 75);
CanvasContext.stroke();

CanvasContext.setFontSize(20);

CanvasContext.setTextBaseline('top');
CanvasContext.fillText('top', 5, 75);

CanvasContext.setTextBaseline('middle');
CanvasContext.fillText('middle', 50, 75);

CanvasContext.setTextBaseline('bottom');
CanvasContext.fillText('bottom', 120, 75);

CanvasContext.setTextBaseline('normal');
CanvasContext.fillText('normal', 200, 75);

CanvasContext.draw();
```
![图片](../../../../img/set-text-baseline.png)

