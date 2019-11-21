---
title: CanvasContext.lineTo
header: develop
nav: api
sidebar: canvas_CanvasContext-lineTo
---

 

**解释**：lineTo 方法增加一个新点，然后创建一条从上次指定点到目标点的线。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_createCanvasContext.png"  class="demo-qrcode-image" />

**方法参数**：Number x, Number y

**`x`参数说明**：目标位置的 x 坐标

**`y`参数说明**：目标位置的 y 坐标

**图片示例**：

![图片](../../../../img/api/canvas/lineTo.png)

**代码示例**：

<a href="swanide://fragment/7be2fad3d201ee3f09e4b2e81a875b031573723506586" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
const canvasContext = swan.createCanvasContext('myCanvas');
canvasContext.moveTo(10, 10);
canvasContext.rect(10, 10, 100, 50);
canvasContext.lineTo(110, 60);
canvasContext.stroke();
canvasContext.draw();
```


