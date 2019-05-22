### lineWidth

`lineWideh` 属性用来设置或获取线段的宽度（厚度），该属性取值为整数。

```js
context.lineWidth = value;

```
**属性值**：

| 值    |  类型  | 描述              |
|-------|------ | ---------------- |
| value |number | 线段的宽度（厚度）。默认 1px，以像素为单位，取值为整数。 |

**示例**：

使用 `lineWidth` 属性设置两个线段不同的线段宽度：

![图片](/img/game/canvas/lineWidth-001.png)

```js
var context = canvas.getContext('2d');

//绘制第一根线段，使用默认线条宽度为1px
context.beginPath();
context.moveTo(10, 20);
context.lineTo(150, 20);
context.stroke();

//绘制第二个线段，并设定线条宽度为20px
context.beginPath();
context.lineWidth = 20;
context.moveTo(10, 60);
context.lineTo(150, 60);
context.stroke();
```
