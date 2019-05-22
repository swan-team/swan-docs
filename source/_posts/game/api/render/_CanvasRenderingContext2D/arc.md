### arc()

`arc()` 方法用于绘制圆弧/曲线。绘制圆弧需要六个参数：中心点 x 坐标、中心点 y 坐标、圆弧半径、开始弧度、结束弧度、布尔值。

```js
context.arc(x, y, radius, startAngle, endAngle, anticlockwise);
```

![图片](/img/game/canvas/arc-001.png)

弧线从与原点 `(x, y)` 距离为 `radius`，角度为 `startAngle` 的位置开始，到与原点 `(x, y)` 距离为 `radius`，角度为 `endAngle` 的位置结束。

其中 `startAngle`、`endAngle` 的角度是以弧度为单位的，π 的弧度即为 180 度（半个圆），2π 的弧度为 360 度（一个圆）。

最后一个参数 `anticlockwise` 用于定义绘制弧线的方向，默认为 false 即按照顺时针绘制，如果设为 true，则会按照逆时针绘制。


**参数值**：

| 参数         |  类型 | 描述                                           |
| ------------|--------| -------------------------------------------- |
| x           | number | 中心点的 x 坐标                                |
| y           | number | 中心点的 y 坐标                                |
| r           | number | 圆的半径                                      |
| startAngle  | number | 圆弧的开始点。以弧度为单位，0 度位于时钟三点钟的位置 |
| endAngle    | number | 圆弧的结束点。以弧度为单位                       |
| anticlockwise | boolean  | 可选。绘制弧线的方向，默认为 false 沿逆时针绘制，若为 true 则沿顺时针绘制 |

**示例**：

绘制一个圆弧的代码：

![图片](/img/game/canvas/arc-002.png)

```js
var context = canvas.getContext('2d');

context.beginPath();
context.arc(120, 80, 100, 0, 1*Math.PI);
context.stroke();
```
