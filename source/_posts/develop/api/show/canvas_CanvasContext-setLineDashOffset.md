---
title: CanvasContext.setLineDashOffset
header: develop
nav: api
sidebar: canvas_CanvasContext-setLineDashOffset
---

 

**解释**：设置虚线偏移量的属性。

 百度APP中扫码体验： 

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_createCanvasContext.png"  class="demo-qrcode-image" />

 方法参数 ：Number value

 `value`参数说明 ： 偏移量，初始值为 0 。 
## 示例

 
### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_setBackgroundColor.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/setLineDashOffset.png">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### 代码示例 

<a href="swanide://fragment/a4a38a8bd21b845f527ac4aac69a57b81574525368679" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<canvas canvas-id="myCanvas" class="myCanvas"/>
```

* 在 js 文件中

```js
Page({
    onReady: function () {
        const canvasContext = swan.createCanvasContext('myCanvas');

        canvasContext.beginPath();
        canvasContext.setLineDash([10, 20], 5);
        canvasContext.setLineDashOffset(400);
        canvasContext.moveTo(10, 20);
        canvasContext.lineTo(100, 20);
        canvasContext.moveTo(10, 100);
        canvasContext.lineTo(100, 100);
        canvasContext.closePath();
        canvasContext.stroke();
        canvasContext.draw();
    }
});
```

