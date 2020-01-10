---
title: CanvasContext.strokeText
header: develop
nav: api
sidebar: canvas_CanvasContext-strokeText
---
 

**解释**：给定的 (x, y) 位置绘制文本描边的方法。

 百度APP中扫码体验： 

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_createCanvasContext.png"  class="demo-qrcode-image" />

 方法参数 ：String text, Number x, Number y, Number maxWidth

 `text`参数说明 ：要绘制的文本

 `x`参数说明 ：文本起始点的 x 轴坐标

 `y`参数说明 ：文本起始点的 y 轴坐标

 `maxWidth`参数说明 ：需要绘制的最大宽度，可选。
## 示例

 
### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_setBackgroundColor.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/strokeText.png">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### 代码示例 

<a href="swanide://fragment/198f840b68c30fd3160e8a3bd11457df1574503509981" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<canvas canvas-id="myCanvas" class="myCanvas"/>
```

* 在 js 文件中

```js
Page({
    onReady: function () {
        const canvasContext = swan.createCanvasContext('myCanvas');
        canvasContext.setFontSize(50);
        canvasContext.fillText('50', 90, 90);
        canvasContext.strokeText('默认字样', 50, 50, 90);
        canvasContext.draw();
    }
});
```

