---
title: CanvasContext.closePath
header: develop
nav: api
sidebar: canvas_CanvasContext-closePath
---

 

**解释**：关闭一个路径。

 
 ## 方法参数 

无
## 示例

<a href="swanide://fragment/5d87113894328289d174d41abdbb70db1573723366858" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>
 
### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_createCanvasContext.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
![图片](../../../../img/api/canvas/closePath.png)

### 代码示例 



```js
const canvasContext = swan.createCanvasContext('myCanvas');
canvasContext.moveTo(100, 100);
canvasContext.lineTo(10, 100);
canvasContext.lineTo(10, 10);
canvasContext.closePath();
canvasContext.stroke();
canvasContext.draw();
```


