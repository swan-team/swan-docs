---
title: CanvasContext.setTextBaseline
header: develop
nav: api
sidebar: canvas_CanvasContext-setTextBaseline
---

 
**解释**：用于设置文字的水平对齐。

 百度APP中扫码体验： 

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_createCanvasContext.png"  class="demo-qrcode-image" />

 方法参数 ：String textBaseline

 `textBaseline`参数说明 ：有效值 'top'、'bottom'、'middle'、'normal' 。 
## 示例

 
### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_setBackgroundColor.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/setTextBaseline.png">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### 代码示例 

<a href="swanide://fragment/7d2ce5d641357eddcb149a1bddc607881573724449363" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
const canvasContext = swan.createCanvasContext('myCanvas');

canvasContext.setStrokeStyle('red');
canvasContext.moveTo(5, 75);
canvasContext.lineTo(295, 75);
canvasContext.stroke();

canvasContext.setFontSize(20);

canvasContext.setTextBaseline('top');
canvasContext.fillText('top', 5, 75);

canvasContext.setTextBaseline('middle');
canvasContext.fillText('middle', 50, 75);

canvasContext.setTextBaseline('bottom');
canvasContext.fillText('bottom', 120, 75);

canvasContext.setTextBaseline('normal');
canvasContext.fillText('normal', 200, 75);

canvasContext.draw();
```



