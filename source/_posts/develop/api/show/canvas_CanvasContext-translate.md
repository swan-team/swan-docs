---
title: CanvasContext.translate
header: develop
nav: api
sidebar: canvas_CanvasContext-translate
---
 
**解释**：对当前坐标系的原点 (0, 0) 进行变换，默认的坐标系原点为页面左上角。

 百度APP中扫码体验： 

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_createCanvasContext.png"  class="demo-qrcode-image" />

 方法参数 ：Number x, Number y

 `x`参数说明 ：水平坐标平移量 

 `y`参数说明 ：竖直坐标平移量
## 示例

 
### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_setBackgroundColor.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
![图片](../../../../img/translate.png)

### 代码示例 

<a href="swanide://fragment/755378a183a45481f8a03347f75519251573723810204" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
const canvasContext = swan.createCanvasContext('myCanvas');

canvasContext.strokeRect(10, 10, 150, 100);
canvasContext.translate(20, 20);
canvasContext.strokeRect(10, 10, 150, 100);
canvasContext.translate(20, 20);
canvasContext.strokeRect(10, 10, 150, 100);

canvasContext.draw();
```


