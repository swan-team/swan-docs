---
title: CanvasContext.setLineWidth
header: develop
nav: api
sidebar: canvas_CanvasContext-setLineWidth
---

 

**解释**：设置线条的宽度。

 百度APP中扫码体验： 

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_createCanvasContext.png"  class="demo-qrcode-image" />

 方法参数 ：Number lineWidth

 `lineWidth`参数说明 ：线条的宽度(单位是 px)
## 示例

 
### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_setBackgroundColor.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
![图片](../../../../img/api/canvas/setLineWidth.png)

### 代码示例 

<a href="swanide://fragment/4e19cb2db62b79cb68943f3971dd54101573720541344" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
const canvasContext = swan.createCanvasContext('myCanvas');
canvasContext.beginPath();
canvasContext.moveTo(30, 10);
canvasContext.lineTo(200, 10);
canvasContext.stroke();

canvasContext.beginPath();
canvasContext.setLineWidth(5);
canvasContext.moveTo(50, 30);
canvasContext.lineTo(200, 30);
canvasContext.stroke();

canvasContext.beginPath();
canvasContext.setLineWidth(10);
canvasContext.moveTo(70, 50);
canvasContext.lineTo(200, 50);
canvasContext.stroke();

canvasContext.beginPath();
canvasContext.setLineWidth(15);
canvasContext.moveTo(90, 70);
canvasContext.lineTo(200, 70);
canvasContext.stroke();

canvasContext.draw();
```


