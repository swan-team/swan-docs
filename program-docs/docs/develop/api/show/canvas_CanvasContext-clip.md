---
title: CanvasContext.clip
header: develop
nav: api
sidebar:  canvas_CanvasContext-clip
---



 


**解释**： clip  方法从原始画布中剪切任意形状和尺寸。一旦剪切了某个区域，则所有之后的绘图都会被限制在被剪切的区域内（不能访问画布上的其他区域）。可以在使用 clip 方法前通过使用 save 方法对当前画布区域进行保存，并在以后的任意时间对其进行恢复（通过 “restore ” 方法）。

 
## 方法参数 

无
## 示例

<a href="swanide://fragment/c18c27cffbeaf52e7e5d5032081bdeac1574973539888" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_createCanvasContext.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        clip之前：<img src="https://b.bdstatic.com/miniapp/images/clipBefore.png">
    </div>
    <div class="m-doc-custom-examples-correct">
        clip之后：<img src="https://b.bdstatic.com/miniapp/images/clipAfter.png">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### 代码示例 


:::codeTab
```js
Page({
    onShow () {
        const canvasContext = swan.createCanvasContext('myCanvas')
        canvasContext.rect(50,20,200,120);
        canvasContext.stroke();
        canvasContext.clip();
        // 在 clip() 之后绘制黑色矩形
        canvasContext.fillStyle="black";
        canvasContext.fillRect(0,0,150,100);
        canvasContext.draw()
    }
});
```
:::
