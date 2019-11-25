---
title: CanvasContext.rect
header: develop
nav: api
sidebar: canvas_CanvasContext_rect
---

 

**解释**：创建一个矩形。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_createCanvasContext.png"  class="demo-qrcode-image" />

**方法参数**：Number x, Number y, Number width, Number height

**`x`参数说明**：矩形路径左上角的 x 坐标。

**`y`参数说明**：矩形路径左上角的 y 坐标。

**`width`参数说明**：矩形路径的宽度。

**`height`参数说明**：矩形路径的高度。

**图片示例**：

![图片](../../../../img/api/canvas/rect.png)

**代码示例**：

<a href="swanide://fragment/59b1eaf288f0666fd272e0c22fc3eb7e1573721931595" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
const canvasContext = swan.createCanvasContext('myCanvas');
canvasContext.rect(30, 30, 150, 75);
canvasContext.setFillStyle('blue');
canvasContext.fill();
canvasContext.draw();
```



