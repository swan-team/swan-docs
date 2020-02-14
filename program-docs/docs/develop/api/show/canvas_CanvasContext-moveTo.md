---
title: CanvasContext.moveTo
header: develop
nav: api
sidebar: canvas_CanvasContext-moveTo
---

 


**解释**：把路径移动到画布中的指定点，不创建线条。

 
## 方法参数  

|参数名|属性|必填|默认值|说明|
|----|----|----|---|---|
| `x`|Number|是|| 目标位置的 x 坐标|
| `y`|Number|是||目标位置的 y 坐标|
## 示例

<a href="swanide://fragment/7026a462f0cedf609a81733d28cb5fd11573723438564" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>
 
### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_createCanvasContext.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
![图片](../../../../img/api/canvas/moveTo.png)

### 代码示例 



```js
const canvasContext = swan.createCanvasContext('myCanvas');
canvasContext.moveTo(10, 10);
canvasContext.lineTo(100, 10);
canvasContext.moveTo(10, 100);
canvasContext.lineTo(100, 100);
canvasContext.stroke();
canvasContext.draw();
```



