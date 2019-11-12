---
title: CanvasContext.stroke
header: develop
nav: api
sidebar: canvas_CanvasContext-stroke
---
 

**解释**：画出当前路径的边框。默认颜色为黑色。

**方法参数**：无

**代码示例**：

```js
const CanvasContext = swan.createCanvasContext('myCanvas');
CanvasContext.moveTo(100, 100);
CanvasContext.lineTo(10, 100);
CanvasContext.lineTo(10, 10);
CanvasContext.stroke();
CanvasContext.draw();
```

![图片](../../../../img/api/canvas/stroke.png)

