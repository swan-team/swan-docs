### fill()

`fill()` 是使用当前绘图样式填充当前路径的方法，默认填充 #000000（黑色）。采取 [非零环绕](https://en.wikipedia.org/wiki/Nonzero-rule) 或 [奇偶环绕](https://en.wikipedia.org/wiki/Even%E2%80%93odd_rule) 规则。
```js
context.fill();
```
可配合使用 `fillStyle` 属性设置所填充路径的颜色和样式。

**示例**：

绘制一个矩形，使用 `fill()` 方法填充路径：

![图片](/img/game/canvas/fill-001.png)


```js
var context = canvas.getContext('2d');

context.rect(10, 10, 200, 100)
context.fill();
```
如果填充的是一个未闭合路径，则会使用 [非零环绕规则](https://en.wikipedia.org/wiki/Nonzero-rule) ，从路径结束点到开始点填充路径。如下示例，将一个 S 形路径用黑色描边显示，用红色填充。

![图片](/img/game/canvas/fill-002.png)

```js
var context = canvas.getContext('2d');

context.beginPath();
context.moveTo(140, 20);
context.bezierCurveTo(-120, 100, 300, 150, 40, 200);
context.fillStyle = 'red';
context.fill();
context.stroke();
```
