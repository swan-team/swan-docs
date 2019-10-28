---
title: CanvasContext.setFontSize
header: develop
nav: api
sidebar: canvas_CanvasContext_setFontSize
---
 
**解释**：设置字体的字号。

**方法参数**：Number fontSize

`fontSize`参数说明：字体的字号 


**示例**：

```js
const CanvasContext = swan.createCanvasContext('myCanvas');

CanvasContext.setFontSize(20);
CanvasContext.fillText('20', 20, 20);
CanvasContext.setFontSize(30);
CanvasContext.fillText('30', 40, 40);
CanvasContext.setFontSize(40);
CanvasContext.fillText('40', 60, 60);
CanvasContext.setFontSize(50);
CanvasContext.fillText('50', 90, 90);

CanvasContext.draw();
```

![图片](../../../../img/api/canvas/font-size.png)