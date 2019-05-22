### scale()


`scale()` 方法用于缩放变换当前图形。参数 x 表示在水平方向上缩放的倍数，参数 y 表示在垂直方向上缩放的倍数。

```js
context.scale(x, y);
```
**参数值**：

| 参数 |  类型  | 描述                         |
|-----|------  | ---------------------------|
| x   | number | 水平方向缩放到当前绘画（0.5 = 50% ，1 = 100% ，2 = 200% ）  |
| y   | number | 垂直方向缩放到当前绘画（0.5 = 50% ，1 = 100% ，2 = 200% ）  |


**示例**：

先绘制一个矩形，使用 `scale()` 方法缩放 200%，再绘制矩形的示例：

![](/img/game/canvas/scale-001.png)

```js
var context = canvas.getContext('2d');

context.strokeRect(10, 10, 40, 40);
context.scale(2, 2);
context.strokeRect(10, 10, 40, 40);
```