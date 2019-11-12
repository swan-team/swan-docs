---
title: CanvasContext.setFillStyle
header: develop
nav: api
sidebar:  canvas_CanvasContext_setFillStyle
---
 

**解释**：设置填充色。

**方法参数**： [Color](/develop/api/canvas_color/) color



**代码示例**：

```js
const CanvasContext = this.createCanvasContext('myCanvas');
CanvasContext.setFillStyle('blue');
CanvasContext.fillRect(30, 30, 150, 75);
CanvasContext.draw();
```

![图片](../../../../img/api/canvas/setFillStyle.png)

