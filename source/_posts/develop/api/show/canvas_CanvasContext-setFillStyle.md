---
title: CanvasContext.setFillStyle
header: develop
nav: api
sidebar: canvas_CanvasContext-setFillStyle
---
 

**解释**：设置填充色。

 百度APP中扫码体验： 

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_createCanvasContext.png"  class="demo-qrcode-image" />

 方法参数 ： [Color](/develop/api/canvas_color/) color
## 示例

 
### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_setBackgroundColor.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
![图片](../../../../img/api/canvas/setFillStyle.png)

### 代码示例 

<a href="swanide://fragment/130dc92945ea6869f8d81213f6e780e71573717221468" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
const canvasContext = this.createCanvasContext('myCanvas');
canvasContext.setFillStyle('blue');
canvasContext.fillRect(30, 30, 150, 75);
canvasContext.draw();
```

 代码示例 - 使用十六进制函数 

<a href="swanide://fragment/bb52dcf222fe5df30affb383be4929521576350576252" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
const canvasContext = this.createCanvasContext('myCanvas');
canvasContext.setFillStyle('#ffff00');
canvasContext.fillRect(30, 30, 150, 75);
canvasContext.draw();
```

 代码示例 - 使用rgba()函数 

<a href="swanide://fragment/91a77100a84ba784a001322bcfceebd31576350857189" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
const canvasContext = this.createCanvasContext('myCanvas');
const lineRGB = '255,255,0';
const opacity = 0.3;
canvasContext.setFillStyle(`rgba(${lineRGB}, ${opacity})`);
canvasContext.fillRect(30, 30, 150, 75);
canvasContext.draw();
```


