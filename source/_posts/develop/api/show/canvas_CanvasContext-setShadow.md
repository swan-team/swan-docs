---
title: cameraContextsetShadow
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

**代码示例**：

<a href="swanide://fragment/9e80840b183a93ec01b126abac5dd1a81573719669152" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


```js
const canvasContext = swan.createCanvasContext('myCanvas');
canvasContext.setFillStyle('blue');
canvasContext.setShadow(10, 50, 50, 'red');
canvasContext.fillRect(30, 30, 150, 75);
canvasContext.draw();
```

![图片](../../../../img/api/canvas/setShadow.png)

