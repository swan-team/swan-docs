---
title: CanvasContext.restore
header: develop
nav: api
sidebar:  canvas_CanvasContext-restore
---


**解释**：恢复之前保存的绘图上下文。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_createCanvasContext.png"  class="demo-qrcode-image" />

**方法参数**：无

**图片示例**：

![图片](../../../../img/api/canvas/save.png)

**代码示例**：

<a href="swanide://fragment/9710a7359d484b4682e6338a2b4e1bd91573725069024" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
const canvasContext = swan.createCanvasContext('myCanvas');
// save the default fill style
canvasContext.save();
canvasContext.setFillStyle('blue');
canvasContext.fillRect(10, 10, 150, 100);

// restore to the previous saved state
canvasContext.restore();
canvasContext.fillRect(50, 50, 150, 100);

canvasContext.draw();
```



