---
title: CanvasContext.setLineDash
header: develop
nav: api
sidebar: canvas_CanvasContext-setLineDash
---
 
**解释**：设置线条虚线样式的间距和长度。

 
## 方法参数 

 
|参数名|属性|必填|默认值|说明|
|----|----|----|---|---|
| `pattern`|Array|是||一组描述交替绘制线段和间距（坐标空间单位）长度的数字。 |
| `offset`|Number|是||虚线偏移量。 |
## 示例

 
### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_createCanvasContext.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
![图片](../../../../img/api/canvas/setLineDash.png)

### 代码示例1 - 基础用法 

<a href="swanide://fragment/a0f3e795134820d54777817b4240fdbb1573721214224" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
const canvasContext = swan.createCanvasContext('myCanvas');
canvasContext.setLineDash([10, 20], 5);
canvasContext.beginPath();
canvasContext.moveTo(0,100);
canvasContext.lineTo(400, 100);
canvasContext.stroke();
canvasContext.draw();
```

###  代码示例2 

<a href="swanide://fragment/b763ef43bb64975b9d558ff82517e44a1575365006983" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
Page({
    data : { },
    onReady: function () {
        const canvasContext = swan.createCanvasContext('myCanvas');
        canvasContext.setLineDash([10, 20], 5);
        canvasContext.beginPath();
        canvasContext.moveTo(0,100);
        canvasContext.lineTo(400, 100);
        canvasContext.stroke();
        canvasContext.setLineDash([5, 10, 5], 5);
        canvasContext.beginPath();
        canvasContext.moveTo(0, 200);
        canvasContext.lineTo(400, 200);
        canvasContext.stroke();
        canvasContext.draw();
    }
});
```


