### lineDashOffset

`lineDashOffset` 属性用来设置或获取虚线偏移量。

```js
context.lineDashOffset = value;
```
偏移量是 float 精度的数字。 初始值为 0。

**属性值**：

| 值    |  类型   | 描述                |
|-------|------  | ------------------ |
| value | number | 虚线偏移量。初始值为 0 |


**示例**：

使用 `lineDashOffset` 属性设置绘制的虚线的偏移量：

![图片](/img/game/canvas/lineDashOffset-001.png)

```js
var context = canvas.getContext('2d');

context.setLineDash([4, 10]);
context.lineDashOffset = 2;

context.beginPath();
context.moveTo(20, 20);
context.lineTo(300, 20);
context.stroke();
```
