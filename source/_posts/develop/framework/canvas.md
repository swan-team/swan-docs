---
title: Canvas 画布
header: develop
nav: framework
sidebar: canvas
---

**解释**： canvas 画布，可使用 JS 操作 canvas 上下文，发出指令，进行绘制。

SWAN模板写法示例：

```xml
<canvas canvas-id="myCanvas" />
```

对应的JS逻辑如下:

```js
Page({
    onReady: function () {
        const ctx = swan.createCanvasContext('myCanvas');
        ctx.setFillStyle('blue');
        ctx.fillRect(30, 30, 150, 75);
        ctx.draw();
    }
});

```

整个过程如下:

**第一步：创建一个 Canvas 绘图上下文**

首先，我们需要创建一个 Canvas 绘图上下文 <a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#createCanvasContext/">createCanvasContext</a>。

createCanvasContext 是智能小程序内建的一个对象，有一些绘图的方法：

```js
const ctx = swan.createCanvasContext('myCanvas');
```

**第二步：使用 Canvas 绘图上下文进行绘图描述**

画一个矩形，并进行填充。

```js
ctx.setFillStyle('blue');
ctx.fillRect(30, 30, 150, 75);
```

**第三步：画图**

告诉 `canvas` 组件进行相应绘制：
```js
ctx.draw();
```

最终渲染结果如下:
![图片](../../../img/api/canvas/setFillStyle.png)


## 坐标系

canvas 坐标系，以左上角为(0, 0)，横轴为 x，纵轴为 y。

如：

```js
ctx.arc(100, 200, 50, 0, 2 * Math.PI);
```
该命令，就是在x: 100, y: 200为圆心处，开始画圆。


## 渐变

渐变能用于填充一个矩形，圆，线，文字等。填充色可以不固定为一种固定的颜色。

我们提供了两种颜色渐变的方式：

```js
createLinearGradient(x, y, x1, y1)  // 创建一个线性的渐变
createCircularGradient(x, y, r)     // 创建一个从圆心开始的渐变
```

一旦我们创建了一个渐变对象，我们必须添加两个颜色渐变点。

<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-createCircularGradient">addColorStop(position, color)</a> 方法用于指定颜色渐变点的位置和颜色，位置必须位于0到1之间。

可以用setFillStyle 和 setStrokeStyle 方法设置渐变，然后进行画图描述。


**1. 使用 <a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-createCircularGradient">createLinearGradient()</a>**

```js
const ctx = swan.createCanvasContext('myCanvas');

// Create linear gradient
const grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, 'blue');
grd.addColorStop(1, 'red');

// Fill with gradient
ctx.setFillStyle(grd);
ctx.fillRect(30, 30, 150, 80);
ctx.draw();
```

![图片](../../../img/api/canvas/createLinearGradient.png)


**2. 使用 <a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-createCircularGradient">createCircularGradient()</a> 创建一个圆形的渐变颜色。**

```js
const ctx = swan.createCanvasContext('myCanvas');

// Create circular gradient
const grd = ctx.createCircularGradient(75, 50, 50);
grd.addColorStop(0, 'red');
grd.addColorStop(1, 'blue');

// Fill with gradient
ctx.setFillStyle(grd);
ctx.fillRect(30, 30, 150, 80);
ctx.draw();
```

![图片](../../../img/api/canvas/createCircularGradient.png)