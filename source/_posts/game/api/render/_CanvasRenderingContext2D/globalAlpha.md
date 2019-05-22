### globalAlpha

`globalAlpha` 属性用来设置或获取绘图的透明度。数值范围从 0.0（完全透明） 到 1.0 （完全不透明）。

```js
context.globalAlpha = value;
```
`globalAlpha` 属性必须在绘制图形之前定义才有效，作为全局属性对之后的图形都起作用，直到 `globalAlpha` 被重新定义为其他属性值为止。

**属性值**：

| 值     |  类型   | 描述              |
|------- |------  | ---------------- |
| value  | number | 设置绘图的透明度。初始值为 1.0，数值范围必须要在 0.0（完全透明） 到 1.0 （完全不透明）之间。数值不在该范围内，或者是 Infinity 或 NaN 将无法赋值。|

**示例**：

绘制一个红色矩形，将 `globalAlpha` 属性透明度设为 0.6 之后再绘制一个橙色矩形和一个黄色矩形：

![图片](/img/game/canvas/globalAlpha-001.png)

```js
var context = canvas.getContext('2d');

context.fillStyle = 'red';
context.fillRect(20, 20, 200, 100);

context.globalAlpha = 0.6;   //设置之后所绘制矩形的透明度
context.fillStyle = 'orange';
context.fillRect(120, 70, 200, 100);

context.fillStyle = 'yellow';
context.fillRect(220, 120, 200, 100);
```
