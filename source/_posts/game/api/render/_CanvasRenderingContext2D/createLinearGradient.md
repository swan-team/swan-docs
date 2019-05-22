### createLinearGradient()

`createLinearGradient()` 方法可沿指定的直线创建线性渐变的方法。渐变可用于填充形状、线条、文本等。

```js
context.createLinearGradient(x0, y0, x1, y1);
```


**参数值**：

| 参数   | 类型  | 描述                 |
| ------|------ | --------------------|
| x0    | number | 渐变开始点的 x 坐标    |
| y0    | number | 渐变开始点的 y 坐标    |
| x1    | number | 渐变结束点的 x 坐标    |
| y1    | number | 渐变结束点的 y 坐标    |


使用 `createLinearGradient()` 方法会返回一个 CanvasGradient 对象，可以使用该对象本身的 `addColorStop()` 方法指定渐变的颜色。 `addColorStop()` 方法有两个参数: 颜色偏移值（ 0 表示起点，1 表示终点）、使用的颜色值。

**示例**：

使用从红色到白色的线性渐变，填充矩形：

![图片](/img/game/canvas/LinearGradient-001.png)

```js
var context = canvas.getContext('2d');
var gradient = context.createLinearGradient(0, 0, 200, 0);
gradient.addColorStop(0, 'red');
gradient.addColorStop(1, 'white');
context.fillStyle = gradient;
context.fillRect(10, 10, 200, 100);

```

改变开始点 (x0, y0) 和结束点 (x1, y1) 的参数，可以改变填充线性渐变的角度。还可以使用 `addColorStop()` 给线性渐变不同位置增加中间色,如下示例：

![图片](/img/game/canvas/LinearGradient-002.png)

```js
var context = canvas.getContext('2d');
var gradient = context.createLinearGradient(0, 0, 200, 200);
gradient.addColorStop(0, 'red');
gradient.addColorStop(0.5, 'yellow');
gradient.addColorStop(1, 'green');
context.fillStyle = gradient;
context.fillRect(10, 10, 200, 100);

```