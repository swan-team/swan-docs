---
title:  CanvasContext.save
header: develop
nav: api
sidebar: canvas_CanvasContext_save
---

 

**解释**：保存当前的绘图上下文。

**方法参数**：无

**代码示例**：

```js
const CanvasContext = swan.createCanvasContext('myCanvas');
// save the default fill style
CanvasContext.save();
CanvasContext.setFillStyle('blue');
CanvasContext.fillRect(10, 10, 150, 100);

// restore to the previous saved state
CanvasContext.restore();
CanvasContext.fillRect(50, 50, 150, 100);

CanvasContext.draw();
```

![图片](../../../../img/api/canvas/save.png)

