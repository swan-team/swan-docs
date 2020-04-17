---
title: CanvasContext.drawImage
header: develop
nav: api
sidebar: canvas_CanvasContext-drawImage
---

 

> 使用顺序：drawImage(imageResource, dx, dy, dWidth, dHeight, sx, sy, sWidth, sHeight)

**解释**：绘制图像到画布。

 

## 方法参数 

 
|参数名|属性|必填|默认值|说明|
|----|----|----|---|---|
| `imageResource`|String|是|| 所要绘制的图片资源 。|
| `dx`| Number|是||  图像的左上角在目标 canvas 上 X 轴的位置。|
| `dy `| Number|是||  图像的左上角在目标 canvas 上 Y 轴的位置 。 |
| `dWidth`| Number|是||   在目标画布上绘制图像的宽度，允许对绘制的图像进行缩放 。 |
| `dHeight`| Number|是||  在目标画布上绘制图像的高度，允许对绘制的图像进行缩放 。 |
| `sx`| Number|是||  源图像的矩形选择框的左上角 X 坐标。 |
| `sy`| Number|是||  源图像的矩形选择框的左上角 Y 坐标。 |
| `sWidth`| Number|是||  源图像的矩形选择框的宽度 。|
| `sHeight`| Number|是||   源图像的矩形选择框的高度 。|

## 示例

 
### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_drawImage.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/drawImage.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

###  代码示例1 

<a href="swanide://fragment/5f642a5821d97a419580f6661c537d8f1574501379932" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

:::codeTab

``` swan 
<canvas canvas-id="myCanvas" class="myCanvas"/>
<button type="primary" bindtap="drawImage">点击上传</button>
```

 

```js
Page({
    drawImage () {
        const canvasContext = swan.createCanvasContext('myCanvas');
        swan.chooseImage({
            success: function(res){
                canvasContext.drawImage(res.tempFilePaths[0], 0, 0, 150, 100);
                canvasContext.draw();
            }
        });
    }
});
```
:::

###  代码示例2 - 把用户正方形图片绘制成圆形 

<a href="swanide://fragment/508b22fc05c8149337e96553fd3ad1971575437603927" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>
:::codeTab

 
```js
Page({
    data: { },
    onLoad: function () {
        var contex = swan.createCanvasContext('myCanvas')
        contex.beginPath(); 
        contex.arc(110, 60, 30, 0, 2 * Math.PI);
        contex.clip();
        contex.drawImage('/image/faceDetect.png', 80,30,60,60); // 推进去图片，这里注意头像坐标要在圆形区域内
        contex.draw();
    }
})
```
:::

