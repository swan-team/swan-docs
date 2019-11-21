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

**图片示例**：

![图片](../../../../img/scale.png)

**代码示例**：

<a href="swanide://fragment/20797ae6b76f08d393130138ca733ffe1573723645337" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
const canvasContext = swan.createCanvasContext('myCanvas');

canvasContext.strokeRect(10, 10, 25, 15);
canvasContext.scale(2, 2);
canvasContext.strokeRect(10, 10, 25, 15);
canvasContext.scale(2, 2);
canvasContext.strokeRect(10, 10, 25, 15);

canvasContext.draw();
```


