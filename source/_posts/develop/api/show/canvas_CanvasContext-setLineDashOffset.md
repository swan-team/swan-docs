---
title: CanvasContext.setLineDashOffset
header: develop
nav: api
sidebar: canvas_CanvasContext_setLineDashOffset
---

 

**解释**：设置虚线偏移量的属性。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_createCanvasContext.png"  class="demo-qrcode-image" />

**方法参数**：Number value

**`value`参数说明**： 偏移量，初始值为 0 。 

**代码示例**：

<a href="swanide://fragment/5b090146e1e54a5d5dc9dcde98740f721574503865669" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<canvas canvas-id="myCanvas" class="myCanvas"/>
```

* 在 js 文件中

```js
Page({
    onReady: function () {
        const canvasContext = swan.createCanvasContext('myCanvas');
        canvasContext.setLineDash([10, 20]);
        canvasContext.setLineDashOffset = 5;
        canvasContext.beginPath();
        canvasContext.moveTo(0,100);
        canvasContext.lineTo(400, 100);
        canvasContext.stroke();
        canvasContext.draw();
    }
});
```

