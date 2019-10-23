---
title: CanvasContext.setShadow
header: develop
nav: api
sidebar: canvas_CanvasContext-setShadow
---

 

> 使用顺序：setShadow(offsetX, offsetY, blur, color)

**解释**：设置阴影样式。

**方法参数**：Number offsetX, Number offsetY, Number blur, [Color](/develop/api/canvas_color/) color

**`offsetX`参数说明**：阴影相对于形状在水平方向的偏移。

**`offsetY`参数说明**：阴影相对于形状在竖直方向的偏移。

**`blur `参数说明**：阴影的模糊级别，数值越大越模糊，范围：0 ~ 100。 

**`color`参数说明**：阴影的颜色。 

**示例**：

```js
const CanvasContext = swan.createCanvasContext('myCanvas');
CanvasContext.setFillStyle('blue');
CanvasContext.setShadow(10, 50, 50, 'red');
CanvasContext.fillRect(30, 30, 150, 75);
CanvasContext.draw();
```

![图片](../../../img/api/canvas/setShadow.png)

