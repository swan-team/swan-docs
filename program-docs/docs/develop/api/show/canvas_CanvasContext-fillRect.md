---
title: CanvasContext.fillRect
header: develop
nav: api
sidebar:  canvas_CanvasContext-fillRect
---
 

**解释**：填充一个矩形。

 
 
|参数名|属性|必填|默认值|说明|
|----|----|----|---|---|
|`x`|Number|是||矩形路径左上角的 x 坐标。|
| `y`|Number|是||矩形路径左上角的 y 坐标。|
|`width`|Number|是||矩形路径的宽度。|
| `height`|Number|是||矩形路径的高度。|
## 示例

<a href="swanide://fragment/6956a3b2894f09e82be015fa3eef373b1573722652190" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a> 

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_createCanvasContext.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
![图片](../../../../img/api/canvas/rect.png)

### 代码示例 



```js
const canvasContext = swan.createCanvasContext('myCanvas');
canvasContext.setFillStyle('blue');
canvasContext.fillRect(30, 30, 150, 75);
canvasContext.draw();
```


