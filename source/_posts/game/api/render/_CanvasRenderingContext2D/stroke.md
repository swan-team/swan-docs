### stroke()

`stroke()` 是使用当前定义的线条样式描绘路径的方法，默认线条颜色为 #000000 （黑色）。

```js
context.stroke();
```
可配合使用 `strokeStyle` 属性设置所绘制路径的颜色和样式。

**示例**：

创建一个矩形，使用 `stroke()` 方法绘制路径：

![](/img/game/canvas/stroke-001.png)


```js
var context = canvas.getContext('2d');

context.rect(10, 10, 200, 100)
context.stroke();
```
