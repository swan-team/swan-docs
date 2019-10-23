---
title: CanvasContext.lineTo
header: develop
nav: api
sidebar: canvas_CanvasContext-lineTo
---

 

**解释**：lineTo 方法增加一个新点，然后创建一条从上次指定点到目标点的线。

**方法参数**：Number x, Number y

**`x`参数说明**：目标位置的 x 坐标

**`y`参数说明**：目标位置的 y 坐标

**示例**：

```js
const CanvasContext = swan.createCanvasContext('myCanvas');
CanvasContext.moveTo(10, 10);
CanvasContext.rect(10, 10, 100, 50);
CanvasContext.lineTo(110, 60);
CanvasContext.stroke();
CanvasContext.draw();
```

![图片](../../../img/api/canvas/lineTo.png)

