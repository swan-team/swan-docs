### closePath()


`closePath()` 方法可以从路径的当前点到开始点绘制一条直线将路径闭合。该方法仅适用于对未闭合的路径进行操作。

```js
context.closePath();
```
`closePath()` 方法是闭合路径，而  [`beginPath()`](#beginPath) 方法是结束路径并开始新的路径，二者是不同的。

**示例：**

绘制一个圆弧，使用 `closePath()` 方法将圆弧路径闭合：

![图片](/img/game/canvas/closePath-001.png)

```js
var context = canvas.getContext('2d');

context.beginPath();
context.arc(120, 80, 100, 0, 1*Math.PI);
context.closePath();
context.stroke();
```
