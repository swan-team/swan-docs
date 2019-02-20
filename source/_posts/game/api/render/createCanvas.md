---
title: swan.createCanvas()
layout: gamedoc
topic: render
categoryName: api
priority: 09-01
---

创建一个画布对象。
首次调用 `swan.createCanvas`，创建的是显示在屏幕上的画布，宽度与屏幕相同，之后再次调用 `swan.createCanvas` 创建的都是离屏画布。既在离屛上的绘制不会显示在屏幕上，如果想要显示，我们需要把它渲染绘制到上屏的 canvas 上。

```js
swan.createCanvas();
```

**返回值：**

[Canvas](/api/render/Canvas/) 画布对象