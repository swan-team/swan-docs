---
title:  CanvasContext.save
header: develop
nav: api
sidebar: canvas_CanvasContext-save
---

 

**解释**：保存当前的绘图上下文。

 
 ## 方法参数 

无
## 示例

<a href="swanide://fragment/9710a7359d484b4682e6338a2b4e1bd91573725069024" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>
 
### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_createCanvasContext.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
![图片](../../../../img/api/canvas/save.png)

### 代码示例 



```js
const canvasContext = swan.createCanvasContext('myCanvas');
// 保存默认填充样式
canvasContext.save();
canvasContext.setFillStyle('blue');
canvasContext.fillRect(10, 10, 150, 100);

// 恢复到以前保存的状态
canvasContext.restore();
canvasContext.fillRect(50, 50, 150, 100);

canvasContext.draw();
```


