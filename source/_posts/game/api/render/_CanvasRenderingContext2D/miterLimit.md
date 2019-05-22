### miterLimit

`miterLimit` 属性用来设置或获取当前斜接长度的最大值，即两条线交汇处内角到外角之间的距离。只有当 `lineJoin` 属性为 miter 时，`miterLimit` 才有效。

连接线的边角越小，斜接长度就越大。如果斜接长度超过 `miterLimit` 的值，边角会以 `lineJoin` 的 `bevel` 类型来显示。

```js
context.miterLimit = value;
```

**属性值**：

| 值     |  类型   | 描述              |
|------- |------  | ---------------- |
| value  | number | 设置的最大斜接长度。初始值是 10。 0、负数、Infinity 和 NaN 会被忽略。 |

**示例**：

如示例所示：前两个连接线 `miterLimit` 值都为 10，但第二个边角更小，则其斜切长度更大。
第三个连接线的 `miterLimit` 值为 1，小于其斜接长度，则边角切换为 `lineJoin` 的 `bevel` 类型显示。

![图片](/img/game/canvas/miterLimit-001.png)

```js
var context = canvas.getContext('2d');
context.lineJoin="miter";
context.lineWidth = 15;
context.strokeStyle = 'red';

context.miterLimit=10;
context.moveTo(10, 100);
context.lineTo(80, 20);
context.lineTo(160, 100);
context.stroke();

context.beginPath();
context.miterLimit=10;
context.moveTo(190, 100);
context.lineTo(220, 20);
context.lineTo(250, 100);
context.stroke();

context.beginPath();
context.miterLimit=1;
context.moveTo(280, 100);
context.lineTo(320, 20);
context.lineTo(360, 100);
context.stroke();
```
