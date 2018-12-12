### strokeRect()


`strokeRect()` 是使用当前绘图样式绘制矩形的方法，矩形以左上角坐标 (x, y) 为起点、宽度为 width 高度为 height。

```js
context.strokeRect(x, y, width, height);
```
可配合使用 [`strokeStyle`](#strokeStyle) 属性设置所绘制路径的颜色和样式。

**参数值：**

| 参数    |  类型 | 描述                   |
| -------|------  | ---------------------|
| x      | number | 矩形左上角起点的 x 坐标 |
| y      | number | 矩形左上角起点的 y 坐标 |
| width  | number | 矩形的宽度            |
| height | number | 矩形的高度            |

**示例：**

使用 `strokeRect()` 方法创建一个矩形路径的示例：

![](/img/game/canvas/strokeRect-001.png)

```js
var context = canvas.getContext('2d');

context.strokeStyle = 'red';
context.strokeRect(10, 10, 200, 100)
```

