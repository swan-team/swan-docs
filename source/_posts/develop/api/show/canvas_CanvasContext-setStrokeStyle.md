---
title: CanvasContext.setStrokeStyle
header: develop
nav: api
sidebar: canvas_CanvasContext-setStrokeStyle
---

 

**解释**：设置边框颜色。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_createCanvasContext.png"  class="demo-qrcode-image" />

**方法参数**： [Color](/develop/api/canvas_color/) color

**图片示例**

![图片](../../../../img/api/canvas/setStrokeStyle.png)

**代码示例**

<a href="swanide://fragment/c3964ad86786dae206f0e453813f5daf1573717657908" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
const canvasContext = this.createCanvasContext('myCanvas');
canvasContext.setStrokeStyle('blue');
canvasContext.strokeRect(30, 30, 150, 75);
canvasContext.draw();
```


