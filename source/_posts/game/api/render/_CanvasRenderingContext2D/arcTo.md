### arcTo()

`arcTo()` 方法用于绘制两条切线之间的弧/曲线。由开始点、结束点、弧的半径决定了所绘制弧线。

```js
context.arcTo(x1, y1, x2, y2, r);
```


**参数值**：

| 参数        | 类型 | 描述                    |
| -----------|------- | ----------------------- |
| x1         | number | 弧的开始点的 x 坐标       |
| y1         | number | 弧的开始点的 y 坐标       |
| x2         | number | 弧的结束点的 x 坐标       |
| y2         | number | 弧的结束点的 y 坐标       |
| r          | number | 弧的半径                 |

**示例**：

使用 `arcTo()` 方法绘制一个弧线的代码：

![图片](/img/game/canvas/arcto-001.png)

```js
var context = canvas.getContext('2d');

context.moveTo(20, 50);
context.lineTo(160, 50);
context.arcTo(240, 50, 240, 80, 80);
context.lineTo(240, 260);
context.stroke();

```
