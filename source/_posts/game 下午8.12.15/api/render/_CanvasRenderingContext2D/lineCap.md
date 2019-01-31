### lineCap

`lineCap` 属性用来设置或获取线段末端的样式。使用 `round`、 `square` 设置会增加末端内容并改变线条长度，使用 `butt` 设置不会影响线条长度。

```js
context.lineCap = "butt";
context.lineCap = "round";
context.lineCap = "square";
```
**属性值：**

| 值     |  类型   | 描述              |
|------- |------  | ---------------- |
| butt   | string | 默认值。线段末端为方形|
| round  | string | 向线段末端增加一个半径为线条厚度一半的半圆，线条末端为圆形|
| square | string | 向线段末端增加一个长度为线条厚度一半，宽度与线宽一致的矩形，线段末端为方形 |

**示例：**

使用 `lineCap` 属性设置三个线段不同的末端样式：

![图片](/img/game/canvas/lineCap-001.png)

```js
var context = canvas.getContext('2d');
context.lineWidth = 20;
context.strokeStyle = 'red';

// butt lineCap
context.beginPath();
context.moveTo(20, 20);
context.lineTo(150, 20);
context.lineCap = 'butt';
context.stroke();

// round lineCap
context.beginPath();
context.moveTo(20, 60);
context.lineTo(150, 60);
context.lineCap = 'round';
context.stroke();

// square lineCap
context.beginPath();
context.moveTo(20, 100);
context.lineTo(150, 100);
context.lineCap = 'square';
context.stroke();
```

 使用 `lineCap` 属性设置的线段样式只对线段开始和结束的两端起作用，如果用于定义一个连续的复杂路径如下示例 W，则 `lineCap` 对于 W 的线段链接处将不起作用。

![图片](/img/game/canvas/lineCap-002.png)

```js
var context = canvas.getContext('2d');

//绘制一个连续的 W 路径
context.moveTo(10, 30);
context.lineTo(50, 130);
context.lineTo(90, 30);
context.lineTo(130, 130);
context.lineTo(170, 30);

context.lineWidth = 20;
context.lineCap = 'round'
context.strokeStyle = "red";
context.stroke();
```
如果需要设置线段链接处的样式，需使用 [`lineJoin`](#lineJoin) 属性定义。