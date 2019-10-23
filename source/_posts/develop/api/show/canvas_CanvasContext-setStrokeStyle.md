---
title: CanvasContext.setStrokeStyle
header: develop
nav: api
sidebar: canvas_CanvasContext-setStrokeStyle
---

 

**解释**：设置边框颜色。

**方法参数**： [Color](/develop/api/canvas_color/) color

**示例**：

```js
const CanvasContext = this.createCanvasContext('myCanvas');
CanvasContext.setStrokeStyle('blue');
CanvasContext.strokeRect(30, 30, 150, 75);
CanvasContext.draw();
```

![图片](../../../img/api/canvas/setStrokeStyle.png)

