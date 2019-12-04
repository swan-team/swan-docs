---
title: CanvasContext.restore
header: develop
nav: api
sidebar:  canvas_CanvasContext-restore
---


**解释**：恢复之前保存的绘图上下文。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_createCanvasContext.png"  class="demo-qrcode-image" />

**方法参数**：无

**图片示例**

![图片](../../../../img/api/canvas/save.png)

**代码示例1**

<a href="swanide://fragment/70610f9f213e41d7d6ff09056c4bcf0c1575434855247" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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


### **图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/restoreTwo.png">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例2**

<a href="swanide://fragment/8bdb88bb1a23d69aca4a8c94ad1440031575438792950" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
Page({
    onLoad() {
        const ctx = swan.createCanvasContext('myCanvas');
        ctx.setFillStyle('blue');
        ctx.fillRect(0,0,15,15);
        ctx.save(); //保存上述设置的绘制状态
    
        //重新定义新的绘制状态，并绘制矩形
        ctx.setFillStyle('#E0E4CD');
        ctx.setShadow(10, 10, 4, 'red');
        ctx.fillRect(30,0,30,30);
    
        // 恢复到初始的绘制状态绘制圆形，与save()之前画的图保持一致
        ctx.restore();
        ctx.beginPath();
        ctx.arc(100, 75, 8, 0, Math.PI*2, true);
        ctx.closePath();
        ctx.fill();
        ctx.draw()
    }
});
```



