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

<a href="swanide://fragment/7b723e7a8cbe1cbe81d495f2d1d9d8d81573724568446" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
const canvasContext = swan.createCanvasContext('myCanvas');

canvasContext.setFillStyle('red');
canvasContext.fillRect(10, 10, 150, 100);
canvasContext.setGlobalAlpha(0.2);
canvasContext.setFillStyle('blue');
canvasContext.fillRect(50, 50, 150, 100);
canvasContext.setFillStyle('yellow');
canvasContext.fillRect(100, 100, 150, 100);

canvasContext.draw();
```

<!-- ![图片](../../../img/api/canvas/global-alpha.png) -->

