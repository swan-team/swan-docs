---
title: CanvasContext.setGlobalAlpha
header: develop
nav: api
sidebar: canvas_CanvasContext-setGlobalAlpha
---
 
**解释**：设置全局画笔透明度。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_createCanvasContext.png"  class="demo-qrcode-image" />

**方法参数**： Number alpha

**`alpha` 参数说明**： 透明度取值范围： 0~1 ，0 表示完全透明，1 表示完全不透明。  

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/setGlobalAlpha.png">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例1**：

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

**代码示例2 - 同时设置多个透明度，透明度高的图形显示会高于透明度低的图形**：

<a href="swanide://fragment/aa6015053952a9739f0166c25fe5ffac1575363466348" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
Page({
    onReady: function () {
        const canvasContext = swan.createCanvasContext('myCanvas');
        canvasContext.setGlobalAlpha(0.2);
        canvasContext.setFillStyle('red');
        canvasContext.fillRect(10, 10, 150, 100);   
        canvasContext.setGlobalAlpha(1);
        canvasContext.setFillStyle('blue');
        canvasContext.fillRect(50, 50, 150, 100);  
        canvasContext.setFillStyle('yellow');
        canvasContext.fillRect(100, 100, 150, 100);
        canvasContext.draw();
    }
});
```

<!-- ![图片](../../../img/api/canvas/global-alpha.png) -->

