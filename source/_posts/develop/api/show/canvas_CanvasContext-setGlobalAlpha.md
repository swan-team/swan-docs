---
title: CanvasContext.setGlobalAlpha
header: develop
nav: api
sidebar: canvas_CanvasContext_setGlobalAlpha
---
 
**解释**：设置全局画笔透明度。

**方法参数**： Number alpha

**`alpha` 参数说明**： 透明度取值范围： 0~1 ，0 表示完全透明，1 表示完全不透明。  

**代码示例**：

```js
const CanvasContext = swan.createCanvasContext('myCanvas');

CanvasContext.setFillStyle('red');
CanvasContext.fillRect(10, 10, 150, 100);
CanvasContext.setGlobalAlpha(0.2);
CanvasContext.setFillStyle('blue');
CanvasContext.fillRect(50, 50, 150, 100);
CanvasContext.setFillStyle('yellow');
CanvasContext.fillRect(100, 100, 150, 100);

CanvasContext.draw();
```

<!-- ![图片](../../../img/api/canvas/global-alpha.png) -->

