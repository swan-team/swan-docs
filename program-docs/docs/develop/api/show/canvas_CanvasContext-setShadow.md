---
title: CanvasContext.setShadow
header: develop
nav: api
sidebar: canvas_CanvasContext-setShadow
---

 

> 使用顺序：setShadow(offsetX, offsetY, blur, color)

**解释**：设置阴影样式。

 
## 方法参数

 

|参数名|属性|必填|默认值|说明|
|----|----|----|---|---|
| `offsetX`|Number|是|| 阴影相对于形状在水平方向的偏移。|
| `offsetY`|Number|是||阴影相对于形状在竖直方向的偏移。|
| `blur `|Number|是||阴影的模糊级别，数值越大越模糊，范围：0 ~ 100。 |
| `color`| [Color](/develop/api/canvas_color/) |是||阴影的颜色。 |
## 示例

 
### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_createCanvasContext.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
![图片](../../../../img/api/canvas/setShadow.png)

### 代码示例1 

<a href="swanide://fragment/9e80840b183a93ec01b126abac5dd1a81573719669152" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

:::codeTab
```js
const canvasContext = swan.createCanvasContext('myCanvas');
canvasContext.setFillStyle('blue');
canvasContext.setShadow(10, 50, 50, 'red');
canvasContext.fillRect(30, 30, 150, 75);
canvasContext.draw();
```
:::
### 代码示例2 - 立体数值 

<a href="swanide://fragment/36f3d540b0ba078ac5017852b52bd11f1576351846639" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

:::codeTab
```js
const canvasContext = swan.createCanvasContext('myCanvas');
canvasContext.setFillStyle('blue');
canvasContext.setShadow(15, 15, 15, '#999');
canvasContext.fillRect(30, 30, 150, 75);
canvasContext.draw();
```
:::