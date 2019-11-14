---
title: canvas 
header: develop
nav: api
sidebar: show_canvas
---


**解释**：canvas 画布，可使用 JS 操作 canvas 上下文，发出指令，进行绘制。

**SWAN模板写法示例**：

```xml
<canvas canvas-id="myCanvas" />
```

**JS写法示例**：

<a href="swanide://fragment/5a48405eb904cfe0231782d70f94ef3e1573708931657" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
Page({
    onReady: function () {
        const CanvasContext = this.createCanvasContext('myCanvas');
        CanvasContext.setFillStyle('#ff0000');
        CanvasContext.arc(100, 100, 50, 0, 2 * Math.PI);
        CanvasContext.fill();
        CanvasContext.draw();
    }
});
```

我们来回顾一下，刚刚都执行了哪些指令：

**1、创建绘图上下文**

推荐使用 Page 对象上挂载的`createCanvasContext`方法，进行绘制上下文的创建：

```js
Page({
    onReady: function () {
        const CanvasContext = this.createCanvasContext('myCanvas');
	}
});

```

当然，也可以使用 SWAN 上挂载的`createCanvasContext`方法。
如下，我们调用 SWAN 的接口`createCanvasContext`创建了一个绘制上下文（但请注意，使用 SWAN 上挂载的`createCanvasContext`，会在当前用户可见的 Page 中寻找`canvas`）。

```js
const CanvasContext = swan.createCanvasContext('myCanvas');
```

**2、发送绘制指令**

设置颜色，并画一个圆，填充。

```js
CanvasContext.setFillStyle('#ff0000');

CanvasContext.arc(100, 100, 50, 0, 2 * Math.PI);
CanvasContext.fill();
```

**3、绘制**
执行上面已经发出的指令，进行 canvas 绘制。

```js
CanvasContext.draw();
```



## 坐标系


canvas 坐标系，以左上角为(0, 0)，横轴为 x，纵轴为 y。
如：`CanvasContext.arc(100, 200, 50, 0, 2 * Math.PI);`命令，就是在`x： 100,y: 200`为圆心处，开始画圆。


