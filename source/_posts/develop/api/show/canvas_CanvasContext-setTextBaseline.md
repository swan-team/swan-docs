---
title: CanvasContext.setTextBaseline
header: develop
nav: api
sidebar: canvas_canvasContext.setTextBaseline
---

 
**解释**：用于设置文字的水平对齐。

**方法参数**：String textBaseline

**`textBaseline`参数说明**：有效值 'top'、'bottom'、'middle'、'normal' 。 

**图片示例**：

![图片](../../../../img/set-text-baseline.png)

**代码示例**：

<a href="swanide://fragment/7d2ce5d641357eddcb149a1bddc607881573724449363" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
const canvasContext = swan.createCanvasContext('myCanvas');

canvasContext.setStrokeStyle('red');
canvasContext.moveTo(5, 75);
canvasContext.lineTo(295, 75);
canvasContext.stroke();

canvasContext.setFontSize(20);

canvasContext.setTextBaseline('top');
canvasContext.fillText('top', 5, 75);

canvasContext.setTextBaseline('middle');
canvasContext.fillText('middle', 50, 75);

canvasContext.setTextBaseline('bottom');
canvasContext.fillText('bottom', 120, 75);

canvasContext.setTextBaseline('normal');
canvasContext.fillText('normal', 200, 75);

canvasContext.draw();
```



