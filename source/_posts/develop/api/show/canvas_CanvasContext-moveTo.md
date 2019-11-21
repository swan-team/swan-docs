---
title: CanvasContext.moveTo
header: develop
nav: api
sidebar: canvas_CanvasContext-moveTo
---

 


**解释**：把路径移动到画布中的指定点，不创建线条。

**方法参数**：Number x, Number y

**`x`参数说明**：目标位置的 x 坐标

**`y`参数说明**：目标位置的 y 坐标

**图片示例**：

![图片](../../../../img/api/canvas/moveTo.png)

**代码示例**：

<a href="swanide://fragment/7026a462f0cedf609a81733d28cb5fd11573723438564" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
const canvasContext = swan.createCanvasContext('myCanvas');
canvasContext.moveTo(10, 10);
canvasContext.lineTo(100, 10);
canvasContext.moveTo(10, 100);
canvasContext.lineTo(100, 100);
canvasContext.stroke();
canvasContext.draw();
```



