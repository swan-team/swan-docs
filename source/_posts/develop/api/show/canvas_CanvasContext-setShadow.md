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

<a href="swanide://fragment/632fdfb62dafc611f117a28a61a6c0201573719196994" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


```js
const canvasContext = swan.createCanvasContext('myCanvas');
cameraContextsetFillStyle('blue');
cameraContextsetShadow(10, 50, 50, 'red');
cameraContextfillRect(30, 30, 150, 75);
cameraContextdraw();
```

![图片](../../../../img/api/canvas/setShadow.png)

