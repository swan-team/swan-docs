---
title: CanvasContext.rotate
header: develop
nav: api
sidebar: canvas_CanvasContext-rotate
---

 


**解释**：以原点为中心，原点可以用 translate 方法修改。顺时针旋转当前坐标轴。多次调用 rotate，旋转的角度会叠加。

 百度APP中扫码体验： 

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_createCanvasContext.png"  class="demo-qrcode-image" />

 方法参数 ：Number rotate 

 `rotate` 参数说明 ：旋转角度，以弧度计(degrees * Math.PI/180；degrees范围为0~360)。
## 示例

 
### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_setBackgroundColor.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
![图片](../../../../img/rotate.png)

### 代码示例 

<a href="swanide://fragment/b33903f1e7561b351e0e560c3ff5273c1573723721593" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
const canvasContext = swan.createCanvasContext('myCanvas');

canvasContext.strokeRect(100, 10, 150, 100);
canvasContext.rotate(20 * Math.PI / 180);
canvasContext.strokeRect(100, 10, 150, 100);
canvasContext.rotate(20 * Math.PI / 180);
canvasContext.strokeRect(100, 10, 150, 100);

canvasContext.draw();
```



