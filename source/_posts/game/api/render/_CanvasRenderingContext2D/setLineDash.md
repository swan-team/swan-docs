### setLineDash()


`setLineDash()` 方法用于设置线条的虚线样式。

```js
context.setLineDash(segments);
```
**参数值**：

| 参数      |  类型  | 描述              |
| ---------|------  | ---------------- |
| segments |Array.<number\>|一组描述交替绘制线段和间距长度的数字|

**示例**：
使用 `setLineDash()` 方法绘制四条不同样式的虚线：

![](/img/game/canvas/setLineDash-001.png)


```js
var context = canvas.getContext('2d');
context.lineWidth = 2;

context.beginPath();
context.moveTo(10, 10);
context.lineTo(300, 10);
context.setLineDash([10]);
context.stroke();

context.beginPath();
context.moveTo(10, 60);
context.lineTo(300, 60);
context.setLineDash([10, 20]);
context.stroke();

context.beginPath();
context.moveTo(10, 120);
context.lineTo(300, 120);
context.setLineDash([10, 20, 30]);
context.stroke();

context.beginPath();
context.moveTo(10, 190);
context.lineTo(300, 190);
context.setLineDash([10, 20, 30, 40]);
context.stroke();

```
`setLineDash()` 方法的数组元素可以是多个，数组元素会被复制并重复使用，不同的数组及排列顺序可以绘制不同的虚线样式。如下图所示：

![](/img/game/canvas/setLineDash-002.png)




