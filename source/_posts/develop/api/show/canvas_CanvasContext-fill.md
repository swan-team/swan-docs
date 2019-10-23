---
title: CanvasContext.fill
header: develop
nav: api
sidebar:  canvas_CanvasContext-fill
---

 

**解释**：对当前路径中的内容进行填充。默认的填充色为黑色。

**方法参数**：无

**示例**：

```js
const CanvasContext = swan.createCanvasContext('myCanvas');
CanvasContext.moveTo(100, 100);
CanvasContext.lineTo(10, 100);
CanvasContext.lineTo(10, 10);
CanvasContext.fill();
CanvasContext.draw();
```

![图片](../../../img/api/canvas/fill.png)

