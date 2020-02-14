### moveTo()

`moveTo()` 是将一个新路径的起点移动到坐标点(x, y)的方法。

```js
context.moveTo(x, y);
```
**参数值：**

| 参数  |  类型  | 描述         |
| -----|------  | ------------|
| x    | number | 点的 x 坐标  |
| y    | number | 点的 y 坐标  |

**示例：**

先使用 [`beginPath()`](#beginPath) 方法声明要开始绘制一个新路径，再使用 `moveTo()` 方法设定路径开始点，再使用 [`lineTo()`](#lineTo) 方法绘制连接当前点与新坐标点的路径，最后使用 [`stroke()`](#stroke) 方法使该路径（默认线条颜色为黑色）可见。
![图片](/img/game/canvas/lineTo-001.png)

```js
var context = canvas.getContext('2d');

context.beginPath();
context.moveTo(0, 0);
context.lineTo(200, 100)
context.stroke();
```
