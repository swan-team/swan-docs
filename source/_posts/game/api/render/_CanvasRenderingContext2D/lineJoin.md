### lineJoin

`lineJoin` 属性用来设置或获取两个线段交接处的样式。

```js
context.lineJoin = "bevel";
context.lineJoin = "round";
context.lineJoin = "miter";
```
**属性值**：

| 值     |  类型   | 描述              |
|------- |------  | ---------------- |
| miter  | string | 默认值。线段交接处的外边缘延伸直至相交于一点，两线段连接处显示为尖角。该设置可作用于 [`miterLimit`](#miterLimit) 属性。 |
| round  | string | 以线段交接处为圆心，线段宽度为半径绘制填充一个圆角，两线段连接处显示为圆角 |
| bevel  | string | 以线段交接末端填充一个斜角，斜角所在正方形的对角线长度等于线段宽度，两线段连接处显示为矩形拐角 |


**示例**：
使用 `lineJoin` 属性设定三个线段连接处的不同样式：

![图片](/img/game/canvas/lineJoin-001.png)

```js
var context = canvas.getContext('2d');
context.lineWidth = 25;
context.strokeStyle = 'red';

// miter lineJoin
context.beginPath();
context.moveTo(20, 140);
context.lineTo(60, 40);
context.lineTo(100, 140);
context.lineJoin = 'miter';
context.stroke();

// round lineJoin
context.beginPath();
context.moveTo(140, 140);
context.lineTo(180, 40);
context.lineTo(220, 140);
context.lineJoin = 'round';
context.stroke();

// bevel lineJoin
context.beginPath();
context.moveTo(260, 140);
context.lineTo(300, 40);
context.lineTo(340, 140);
context.lineJoin = 'bevel';
context.stroke();
```
下方示意图用于说明这三种线段交接样式的原理：
![图片](/img/game/canvas/lineJoin-002.png)