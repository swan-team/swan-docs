---
title: CanvasContext.beginPath
header: develop
nav: api
sidebar: canvas_CanvasContext-beginPath
---




 


**解释**：开始创建一个路径，需要调用 fill 或者 stroke 才会使用路径进行填充或描边。

 
## 方法参数

无
## 示例

<a href="swanide://fragment/74a4bfc69db830725b7bac2eb6eca3911573723257254" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_createCanvasContext.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
![图片](../../../../img/api/canvas/beginPath.png)

### 代码示例 


:::codeTab
```js
const canvasContext = swan.createCanvasContext('myCanvas');
canvasContext.rect(10, 10, 100, 30);
canvasContext.setFillStyle('red');
canvasContext.fill();
canvasContext.beginPath();
canvasContext.rect(10, 40, 100, 30);
canvasContext.setFillStyle('blue');
canvasContext.fillRect(10, 70, 100, 30);
canvasContext.rect(10, 100, 100, 30);
canvasContext.setFillStyle('green');
canvasContext.fill();
canvasContext.draw();
```
:::

