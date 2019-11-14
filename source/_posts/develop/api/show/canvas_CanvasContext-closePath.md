---
title: CanvasContext.closePath
header: develop
nav: api
sidebar: canvas_CanvasContext-closePath
---

 

**解释**：关闭一个路径。

**方法参数**：无

**代码示例**：

<a href="swanide://fragment/5d87113894328289d174d41abdbb70db1573723366858" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
const canvasContext = swan.createCanvasContext('myCanvas');
canvasContext.moveTo(100, 100);
canvasContext.lineTo(10, 100);
canvasContext.lineTo(10, 10);
canvasContext.closePath();
canvasContext.stroke();
canvasContext.draw();
```

![图片](../../../../img/api/canvas/closePath.png)

