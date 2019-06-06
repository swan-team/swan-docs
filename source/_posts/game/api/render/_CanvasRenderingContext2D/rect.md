### rect()


`rect()` 是创建矩形路径的方法，矩形路径以左上角坐标 (x, y) 为起点、宽度为 width 高度为 height。

```js
context.rect(x, y, width, height);
```
**参数值：**

| 参数        |  类型 | 描述                              |
| ------------|------  | -------------------------------|
| x           | number | 矩形左上角起点的 x 坐标           |
| y           | number | 矩形左上角起点的 y 坐标           |
| width       | number | 矩形的宽度                      |
| height      | number | 矩形的高度                      |

**示例：**

使用 `rect()` 方法创建两个矩形路径的示例：

![图片](/img/game/canvas/rect-001.png)

```js
var context = canvas.getContext('2d');

//绘制黑色矩形边框
context.lineWidth="7";
context.rect(10, 10, 200, 100);
context.stroke();

//绘制红色矩形
context.beginPath();
context.fillStyle="red";
context.rect(20, 20, 180, 80);
context.fill();
```

一般 `rect()` 方法需配合使用 `fill()` 或 `stroke()` 方法绘制使路径可见。还可以直接使用 `fillRect()` 或 `strokeRect()` 方法，只需一步即可实现矩形的绘制 。
