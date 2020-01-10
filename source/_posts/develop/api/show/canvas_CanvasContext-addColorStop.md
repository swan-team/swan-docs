---
title: CanvasContext.addColorStop
header: develop
nav: api
sidebar: canvas_CanvasContext-addColorStop
---

 


**解释**：创建一个颜色的渐变点。

 
## 方法参数 

Number stop, [Color](/develop/api/canvas_color/) color

### `stop`参数说明 

表示渐变点在起点和终点中的位置，取值(0-1)。

### `color`参数说明

渐变点的颜色

## 示例

<a href="swanide://fragment/227ecd832540ade6fe14c8ed77b817451573720334982" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_createCanvasContext.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  

![图片](../../../../img/api/canvas/addColorStop.png)

### 代码示例 



```js
const canvasContext = swan.createCanvasContext('myCanvas');

// Create circular gradient
const grd = canvasContext.createLinearGradient(30, 10, 120, 10);
grd.addColorStop(0, 'red');
grd.addColorStop(0.16, 'orange');
grd.addColorStop(0.33, 'yellow');
grd.addColorStop(0.5, 'green');
grd.addColorStop(0.66, 'cyan');
grd.addColorStop(0.83, 'blue');
grd.addColorStop(1, 'purple');

// Fill with gradient
canvasContext.setFillStyle(grd);
canvasContext.fillRect(30, 30, 150, 80);
canvasContext.draw();
```




##  Bug & Tip 

bug：addColorStop 目前在 Android 有bug。

