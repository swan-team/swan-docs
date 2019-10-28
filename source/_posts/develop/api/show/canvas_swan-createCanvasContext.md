---
title: swan.createCanvasContext
header: develop
nav: api
sidebar: canvas_swan-createCanvasContext
---

 
**解释**：在 Page 中，推荐使用`this.createCanvasContext(canvasId)`，进行绘图上下文的创建。也可使用`swan.createCanvasContext(canvasId)`，但使用`swan.createCanvasContext(canvasId)`进行创建时，并非在执行所在的 Page 对象中使用 canvasId 进行查找，而是在用户当前可视的 Page 中使用 canvasId 进行查找。

**方法参数**：String canvasId

**`canvasId`参数说明**：要获取 canvas 组件的 id。

**返回值**：canvasContext


