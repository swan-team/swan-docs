### shadowOffsetY

`shadowOffsetY` 属性用来设置或获取阴影与图形在垂直方向的偏移量。

```js
context.shadowOffsetY = offset;
```
`offset` 偏移量是 float 精度的数字，初始值为 0。

**属性值**：

| 值     |  类型   | 描述              |
|------- |------  | ---------------- |
| offset | number | 阴影与图形在垂直方向的偏移值，初始值是 0。大于 0 时向下偏移，小于 0 时向上偏移。Infinity 或 NaN 会被忽略 |

**示例**：

设置矩形的阴影在垂直方向的偏移：

![](/img/game/canvas/shadowOffsetY-001.png)

```js
var context = canvas.getContext('2d');

context.shadowBlur = 20;
context.shadowColor = 'black';
context.shadowOffsetY = 10;

context.fillStyle = 'red';
context.fillRect(30, 30, 200, 100);
```
要实现更丰富的阴影效果，可配合使用 [`shadowColor`](#shadowColor) 与 [`shadowBlur`](#shadowBlur) 属性创建阴影，使用 `shadowOffsetX` 与 [`shadowOffsetY`](#shadowOffsetY) 属性来设置阴影的偏移。

![](/img/game/canvas/shadow-001.png)

```js
var context = canvas.getContext('2d');

//设置阴影及阴影样式
context.shadowBlur = 10;
context.shadowColor = 'rgba(255, 0, 0, 0.3)';
context.shadowOffsetX = 10;
context.shadowOffsetY = 10;

context.fillStyle = 'red';
context.fillRect(30, 30, 200, 100);
```
