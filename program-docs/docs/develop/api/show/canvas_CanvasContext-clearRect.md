---
title: CanvasContext.clearRect
header: develop
nav: api
sidebar: canvas_CanvasContext-clearRect
---



 
**解释**：清除画布上在该矩形区域内的内容。

 
## 方法参数  

|参数名|属性|必填|默认值|说明|
|----|----|----|---|---|
| `x`|Number|是||矩形路径左上角的 x 坐标。|
|`y`|Number| 是||矩形路径左上角的 y 坐标。|
| `width`|Number| 是||矩形路径的宽度。|
| `height`|Number |是||矩形路径的高度。|

## 示例

<a href="swanide://fragment/3b71cc1ec5750d4b8555c914f211fe761573722908842" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_createCanvasContext.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
![图片](../../../../img/api/canvas/clearRect.png)

### 代码示例 


:::codeTab
```js
const canvasContext = swan.createCanvasContext('myCanvas');
canvasContext.setFillStyle('blue');
canvasContext.fillRect(0, 0, 150, 200);
canvasContext.setFillStyle('blue');
canvasContext.fillRect(150, 0, 150, 200);
canvasContext.clearRect(30, 30, 150, 75);
canvasContext.draw();
```
:::



