### rotate()

`rotate()` 是将旋转变换添加到变换矩阵的方法，可将图形按照某一角度进行旋转。

```js
context.rotate(angle);
```
**参数值：**

| 参数   |  类型  | 描述                     |
| ------|------  | ------------------------|
| angle | number | 以弧度表示的顺时针旋转角度。 可使用 degree*Math.PI/180 的公式进行计算，将角度转换为弧度。 |

**示例：**

绘制一个橙色矩形，再绘制一个同尺寸的红色矩形，将红色矩形调用 `rotate()` 方法旋转：

![图片](/img/game/canvas/rotate-001.png)

```js
var context = canvas.getContext('2d');

context.fillStyle = 'orange';
context.fillRect(0, 0, 100, 50);

context.rotate(30 * Math.PI / 180);  //旋转第二个矩形
context.fillStyle = 'red';
context.fillRect(0, 0, 100, 50);
```
此时，如图所示红色矩形的部分内容不显示，是因为使用 `rotate()` 方法旋转图形时，会按照 canvas 原点 (0，0) 为旋转中心进行旋转，此时矩形原点为画布左上角，因此旋转后有部分内容将位于画布边界外，下图用于帮助理解。
![图片](/img/game/canvas/rotate-002.png)

如果想要矩形以某一点 (x，y) 为旋转中心，我们需要先使用 [`translate()`](#translate) 方法将图形移动到 (x, y) 位置，然后再使用 `rotate()` 方法进行旋转，如下示例：

![图片](/img/game/canvas/rotate-003.png)

```js
var context = canvas.getContext('2d');

context.translate(25, 0);  //改变矩形位置
context.rotate(30 * Math.PI / 180);
context.fillStyle = 'red';
context.fillRect(0, 0, 100, 50);
```