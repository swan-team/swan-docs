### translate()


`translate()` 方法用于将 Canvas 原点 (0, 0) 在 x 水平方向和 y 垂直方向添加位移变换。

```js
context.translate(x, y);
```
**参数值：**

| 参数  |  类型  | 描述            |
| -----|------  | ---------------|
| x    | number | 水平方向的位移距离|
| y    | number | 垂直方向的位移距离|

**示例：**

在 (0, 0) 位置绘制一个矩形，位移设置 (0, 0) 为 (60, 60) 位置，再绘制一个矩形（实际相当于从(60, 60) 位置开始绘制）的示例：

![](/img/game/canvas/translate-001.png)

```js
var context = canvas.getContext('2d');

context.fillStyle = 'red';
context.fillRect(0, 0, 100, 50);

context.translate(60, 60);
context.fillRect(0, 0, 100, 50);
```
