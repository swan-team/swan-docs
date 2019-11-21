---
title: CanvasContext.fillText
header: develop
nav: api
sidebar:  canvas_CanvasContext-fillText
---

 

**解释**：在画布上绘制被填充的文本。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_createCanvasContext.png"  class="demo-qrcode-image" />

**方法参数**：String text, Number x, Number y, Number maxWidth

**`text`参数说明**： 在画布上输出的文本。
**`x`参数说明： **绘制文本的左上角 x 坐标位置。
**`y`参数说明**： 绘制文本的左上角 y 坐标位置。
**`maxWidth` 参数说明**：| 需要绘制的最大宽度（可选 ）。

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/fillText.png">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：

<a href="swanide://fragment/111d313d772997c85709aaa679ddb9e81573724209338" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
const canvasContext = swan.createCanvasContext('myCanvas');

canvasContext.setFontSize(20);
canvasContext.fillText('Hello', 20, 20);
canvasContext.fillText('World', 100, 100);

canvasContext.draw();
```

