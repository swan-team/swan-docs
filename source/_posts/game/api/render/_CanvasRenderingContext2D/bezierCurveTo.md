### bezierCurveTo()

`bezierCurveTo()` 方法用于绘制三次贝塞尔曲线。该方法需要三个点来决定所绘制曲线的样式，分别为:第一个控制点（cp1x, cp1y)、第二个控制点 (cp2x, cp2y)、结束点 (x, y)。以当前路径的最新点为开始点，可使用 [`moveTo()`](#moveTo) 方法来设定开始点。

![图片](/img/game/canvas/bezier-001.png)

```js
context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
```

**参数值：**

| 参数  |  类型| 描述                 |
| -----|-------| -------------------|
| cp1x | number| 第一个控制点的 x 坐标 |
| cp1y | number| 第一个控制点的 y 坐标 |
| cp2x | number| 第二个控制点的 x 坐标 |
| cp2Y | number| 第二个控制的 y 坐标   |
| x    | number| 结束点的x坐标        |
| y    | number| 结束点的x坐标        |

**示例：**

绘制一个三次贝塞尔曲线的示例：

![图片](/img/game/canvas/bezier-002.png)

```js
var context = canvas.getContext('2d');

context.beginPath();
context.moveTo(20, 180);
context.bezierCurveTo(100, 20, 180, 300, 260, 100);
context.stroke();
```

`bezierCurveTo()` 与 [`quadraticCurveTo()`](#quadraticCurveTo) 都可用来绘制曲线，除了都能绘制出偏向一侧的曲线，`bezierCurveTo()` 因为有两个控制点，还可以用来绘制复杂的曲线，如绘制 S 形曲线。
