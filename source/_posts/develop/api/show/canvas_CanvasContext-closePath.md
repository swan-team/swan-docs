---
title: CanvasContext.closePath
header: develop
nav: api
sidebar: canvas_CanvasContext-closePath
---

 

**解释**：关闭一个路径。

**方法参数**：无

**代码示例**：

```js
const CanvasContext = swan.createCanvasContext('myCanvas');
CanvasContext.moveTo(100, 100);
CanvasContext.lineTo(10, 100);
CanvasContext.lineTo(10, 10);
CanvasContext.closePath();
CanvasContext.stroke();
CanvasContext.draw();
```

![图片](../../../../img/api/canvas/closePath.png)

