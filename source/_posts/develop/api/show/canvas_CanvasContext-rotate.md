---
title: CanvasContext.rotate
header: develop
nav: api
sidebar: canvas_CanvasContext_rotate
---

 


**解释**：以原点为中心，原点可以用 translate 方法修改。顺时针旋转当前坐标轴。多次调用 rotate，旋转的角度会叠加。

**方法参数**：Number rotate 

**`rotate` 参数说明**：旋转角度，以弧度计(degrees * Math.PI/180；degrees范围为0~360)。


**代码示例**：

```js
const CanvasContext = swan.createCanvasContext('myCanvas');

CanvasContext.strokeRect(100, 10, 150, 100);
CanvasContext.rotate(20 * Math.PI / 180);
CanvasContext.strokeRect(100, 10, 150, 100);
CanvasContext.rotate(20 * Math.PI / 180);
CanvasContext.strokeRect(100, 10, 150, 100);

CanvasContext.draw();
```

![图片](../../../../img/rotate.png)

