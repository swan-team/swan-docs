### clearRect()

`clearRect()` 方法用于清除以左上角坐标 (x, y) 为起点、宽度为 width 高度为 height 的指定矩形区域内的所有像素内容。

```js
context.clearRect(x, y, width, height);
```

**参数值：**

| 参数         |  类型 | 描述                              |
| ------------|------  | ---------------------------------|
| x           | number | 矩形左上角起点的 x 坐标             |
| y           | number | 矩形左上角起点的 y 坐标             |
| width       | number | 矩形的宽度                         |
| height      | number | 矩形的高度                         |


**示例：**

绘制一个圆形，再使用 `clearRect()` 方法清除一个矩形区域内的像素内容：

![图片](/img/game/canvas/clearRect-001.png)

```js
var context = canvas.getContext('2d');

context.beginPath();
context.arc(120, 120, 100, 0, 2*Math.PI);
context.fillStyle='#6D6D6D';
context.fill();

context.clearRect(60, 60, 120, 120)

```