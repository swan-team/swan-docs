---
title: CanvasContext.translate
header: develop
nav: api
sidebar: canvas_CanvasContext-translate
---
 
**解释**：对当前坐标系的原点 (0, 0) 进行变换，默认的坐标系原点为页面左上角。

**方法参数**：Number x, Number y

**`x`参数说明**：水平坐标平移量 

**`y`参数说明**：竖直坐标平移量


**示例**：

```js
const CanvasContext = swan.createCanvasContext('myCanvas');

CanvasContext.strokeRect(10, 10, 150, 100);
CanvasContext.translate(20, 20);
CanvasContext.strokeRect(10, 10, 150, 100);
CanvasContext.translate(20, 20);
CanvasContext.strokeRect(10, 10, 150, 100);

CanvasContext.draw();
```

![图片](../../../../img/translate.png)

