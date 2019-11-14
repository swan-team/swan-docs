---
title: CanvasContext.clip
header: develop
nav: api
sidebar:  canvas_CanvasContext-clip
---



 


**解释**： clip  方法从原始画布中剪切任意形状和尺寸。一旦剪切了某个区域，则所有之后的绘图都会被限制在被剪切的区域内（不能访问画布上的其他区域）。可以在使用 clip 方法前通过使用 save 方法对当前画布区域进行保存，并在以后的任意时间对其进行恢复（通过 “restore ” 方法）。

**方法参数**：无

**代码示例**：

```js
const canvasContext = swan.createCanvasContext('myCanvas')

swan.downloadFile({
    url: 'https：//b.bdstatic.com/searchbox/icms/searchbox/img/LOGO300x300.jpg',
    success: function(res) {
        canvasContext.save()
        canvasContext.beginPath()
        canvasContext.arc(50, 50, 25, 0, 2*Math.PI)
        canvasContext.clip()
        canvasContext.drawImage(res.tempFilePath, 25, 25)
        canvasContext.restore()
        canvasContext.draw()
    }
});
```

