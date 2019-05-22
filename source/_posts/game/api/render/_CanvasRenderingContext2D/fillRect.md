### fillRect()

`fillRect()` 是使用当前绘图样式绘制填充矩形的方法，以左上角坐标 (x, y) 为起点、宽度为 width 高度为 height 设定矩形填充区域。

```js
context.fillRect(x, y, width, height);
```
可配合使用 [`fillStyle`](#fillStyle) 属性设置所填充路径的颜色和样式。

**参数值**：

| 参数    |  类型 | 描述                    |
| -------|------  | ----------------------|
| x      | number | 矩形左上角起点的 x 坐标  |
| y      | number | 矩形左上角起点的 y 坐标  |
| width  | number | 矩形的宽度             |
| height | number | 矩形的高度             |

**示例**：

使用 `fillRect()` 方法填充一个矩形：

![图片](/img/game/canvas/fillRect-001.png)

```js
var context = canvas.getContext('2d');

context.fillStyle = "red";
context.fillRect(10, 10, 200, 100);
```