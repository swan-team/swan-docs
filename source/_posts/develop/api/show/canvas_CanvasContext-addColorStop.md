---
title: CanvasContext.addColorStop
header: develop
nav: api
sidebar: canvas_CanvasContext-addColorStop
---

 


**解释**：创建一个颜色的渐变点。

**方法参数**：Number stop, [Color](/develop/api/canvas_color/) color

**`stop`参数说明**：表示渐变点在起点和终点中的位置，取值(0-1)。

**`color`参数说明**：渐变点的颜色


**代码示例**：

```js
const CanvasContext = swan.createCanvasContext('myCanvas');

// Create circular gradient
const grd = CanvasContext.createLinearGradient(30, 10, 120, 10);
grd.addColorStop(0, 'red');
grd.addColorStop(0.16, 'orange');
grd.addColorStop(0.33, 'yellow');
grd.addColorStop(0.5, 'green');
grd.addColorStop(0.66, 'cyan');
grd.addColorStop(0.83, 'blue');
grd.addColorStop(1, 'purple');

// Fill with gradient
CanvasContext.setFillStyle(grd);
CanvasContext.fillRect(30, 30, 150, 80);
CanvasContext.draw();
```

![图片](../../../../img/api/canvas/addColorStop.png)

 **Bug & Tip**：

addColorStop 目前在 Android 有bug。

