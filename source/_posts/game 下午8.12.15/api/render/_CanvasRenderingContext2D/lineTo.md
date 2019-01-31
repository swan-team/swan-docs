### lineTo()

`lineTo()` 是绘制连接当前点与新坐标点(x, y)的路径的方法。

```js
context.lineTo(x, y);
```
**参数值：**

| 参数         |  类型  | 描述              |
| ------------|------  | ---------------- |
| x           | number | 直线终点的 x 坐标  |
| y           | number | 直线终点的 y 坐标  |

**示例：**

先使用 [`beginPath()`](#beginPath) 方法声明要开始绘制一个新路径，再使用 [`moveTo()`](#moveTo) 方法设定路径开始点，再使用 `lineTo()` 方法绘制连接当前点与新坐标点的路径，最后使用 [`stroke()`](#stroke) 方法使该路径（默认线条颜色为黑色）可见。

![图片](/img/game/canvas/lineTo-001.png)

```js
var context = canvas.getContext('2d');

context.beginPath();
context.moveTo(0, 0);
context.lineTo(200, 100)
context.stroke();
```

`lineTo()` 的方法是可以重复使用的。前一次使用后，画笔自动移动到终点坐标，下次使用时，会把上次的终点坐标作为此次的起点坐标，然后开始绘制。因此，我们也可以绘制由条直线组成的简单的图形，如示例：

![图片](/img/game/canvas/lineTo-002.png)

```js
var context = canvas.getContext('2d');

context.beginPath();
context.moveTo(10, 20);
context.lineTo(50, 130);

context.moveTo(50, 130);
context.lineTo(90, 20);

context.moveTo(90, 20);
context.lineTo(130, 130);

context.moveTo(130, 130);
context.lineTo(170, 20);
context.strokeStyle = "red";
context.stroke();

```