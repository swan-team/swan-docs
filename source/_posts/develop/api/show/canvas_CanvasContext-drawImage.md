---
title: CanvasContext.drawImage
header: develop
nav: api
sidebar: canvas_CanvasContext-drawImage
---

 

> 使用顺序：drawImage(imageResource, dx, dy, dWidth, dHeight, sx, sy, sWidth, sHeight)

**解释**：绘制图像到画布。


**方法参数**：String imageResource, Number dx, Number dy, Number dWidth, Number dHeight, Number sx, Number sy, Number sWidth, Number sHeight


**`imageResource`参数说明**： 所要绘制的图片资源 。

**`dx`参数说明**：   图像的左上角在目标 canvas 上 X 轴的位置。

**`dy `参数说明**： 图像的左上角在目标 canvas 上 Y 轴的位置 。 

**`dWidth`参数说明**：  在目标画布上绘制图像的宽度，允许对绘制的图像进行缩放 。 

**`dHeight`参数说明**： 在目标画布上绘制图像的高度，允许对绘制的图像进行缩放 。 

**`sx`参数说明**： 源图像的矩形选择框的左上角 X 坐标。 

**`sy`参数说明**： 源图像的矩形选择框的左上角 Y 坐标。 

**`sWidth`参数说明**： 源图像的矩形选择框的宽度 。

**`sHeight`参数说明**：  源图像的矩形选择框的高度 。

**图片示例**：

![图片](../../../../img/api/canvas/draw-image.png)

**代码示例**：

```js
const canvasContext = swan.createCanvasContext('myCanvas');

swan.chooseImage({
    success: function(res){
        canvasContext.drawImage(res.tempFilePaths[0], 0, 0, 150, 100);
        canvasContext.draw();
    }
});
```



