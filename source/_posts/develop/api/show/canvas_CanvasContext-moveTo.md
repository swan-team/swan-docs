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


**示例**：

```js
const CanvasContext = swan.createCanvasContext('myCanvas');
CanvasContext.moveTo(10, 10);
CanvasContext.lineTo(100, 10);
CanvasContext.moveTo(10, 100);
CanvasContext.lineTo(100, 100);
CanvasContext.stroke();
CanvasContext.draw();
```

![图片](../../../img/api/canvas/moveTo.png)

