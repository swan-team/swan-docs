---
title: CanvasContext.fill
header: develop
nav: api
sidebar:  canvas_CanvasContext-fill
---

 

**解释**：对当前路径中的内容进行填充。默认的填充色为黑色。

 
 ## 方法参数 

无
## 示例

 
### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_createCanvasContext.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
![图片](../../../../img/api/canvas/fill.png)

### 代码示例 

<a href="swanide://fragment/c551260de09c005e80e141a7ad42313e1573722986970" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
const canvasContext = swan.createCanvasContext('myCanvas');
canvasContext.moveTo(100, 100);
canvasContext.lineTo(10, 100);
canvasContext.lineTo(10, 10);
canvasContext.fill();
canvasContext.draw();
```


