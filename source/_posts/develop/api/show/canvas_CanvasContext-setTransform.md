---
title: CanvasContext.setTransform
header: develop
nav: api
sidebar: canvas_CanvasContext-setTransform
---

 
**解释**：使用矩阵重新设置（覆盖）当前变换的方法。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_createCanvasContext.png"  class="demo-qrcode-image" />

**方法参数**：Number scaleX, Number scaleY, Number skewX, Number skewY, Number translateX, Number translateY

**`scaleX`参数说明**： 水平缩放  

**`scaleY`参数说明**： 垂直缩放

**`skewX`参数说明**： 水平倾斜   

**`skewY`参数说明**：垂直倾斜  

**`translateX`参数说明**：水平移动  

**`translateY`参数说明**：垂直移动  


**代码示例**：

<a href="swanide://fragment/11ac99eb65cf52ec79272ab2fce3321b1574506209743" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
Page({
    onReady: function () {
        const canvasContext = swan.createCanvasContext('myCanvas');
        canvasContext.strokeRect(50, 50, 150, 100);
        canvasContext.setTransform(20, 30, 40, 20, 60, 20);
        canvasContext.draw();
    }
});
```
