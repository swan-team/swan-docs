### quadraticCurveTo()

`quadraticCurveTo()` 方法用于绘制二次贝塞尔曲线。该方法需要两个点来决定所绘制曲线的样式，分别为:控制点（cpx, cpy)、结束点 (x, y)。以当前路径的最新点为开始点，可使用 [`moveTo()`](#moveTo) 方法来设定开始点。

![图片](/img/game/canvas/quadratic-001.png)

```js
context.bezierCurveTo(cpx, cpy, x, y);
```

**参数值：**

| 参数   |  类型| 描述             |
| ------|-------| ---------------|
| cpx   | number| 控制点的 x 坐标  |
| cpy   | number| 控制点的 y 坐标  |
| x     | number| 结束点的 x 坐标    |
| y     | number| 结束点的 y 坐标    |

**示例：**

绘制一个二次贝塞尔曲线的示例：

![图片](/img/game/canvas/quadratic-002.png)

```js
var context = canvas.getContext('2d');

context.beginPath();
context.moveTo(40, 40);
context.quadraticCurveTo(300, 40, 40, 180)
context.stroke();
```
`quadraticCurveTo()` 方法用来绘制二次被赛尔曲线，[`bezierCurveTo()`](#bezierCurveTo) 方法用来绘制三次贝塞尔曲线。
