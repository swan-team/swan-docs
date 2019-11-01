---
title: CanvasContext.scale
header: develop
nav: api
sidebar:  canvas_CanvasContext_scale
---

 
**解释**：在调用`scale`方法后，之后创建的路径其横纵坐标会被缩放。多次调用`scale`，倍数会相乘。

**方法参数**：Number scaleWidth, Number scaleHeight

**`scaleWidth`参数说明**：横坐标缩放的倍数 (1 = 100%，0.5 = 50%，2 = 200%) 。

**`scaleHeigh`参数说明**：纵坐标轴缩放的倍数 (1 = 100%，0.5 = 50%，2 = 200%)。


**示例**：

```js
const CanvasContext = swan.createCanvasContext('myCanvas');

CanvasContext.strokeRect(10, 10, 25, 15);
CanvasContext.scale(2, 2);
CanvasContext.strokeRect(10, 10, 25, 15);
CanvasContext.scale(2, 2);
CanvasContext.strokeRect(10, 10, 25, 15);

CanvasContext.draw();
```

![图片](../../../../img/scale.png)

