### textBaseLine

`textBaseLine` 属性用来设置或获取当前文本垂直方向的对齐方式。默认值为 `top`，可以设置，更改文本对齐方式。

```js
context.textBaseLine = value;
```
**有效值**：

| 值     |  类型   | 描述              |
|------- |------  | ---------------- |
| top   | string |默认值。文本基线在 em 方框的顶端 |
| middle | string |文本基线在 em 方框的中间 |
| bottom   | string |文本基线在 em 方框的底端 |
| hanging  | string |文本基线是悬挂基线 |
| alphabetical  | string |文本基线是普通英文字母的基线。暂未支持|
| ideographic  | string |文本基线是表意基线。暂未支持 |


**示例**：

创建一条横向参考线，使用 `textBaseline` 属性设置文本垂直方向不同对齐方式：

![](/img/game/canvas/textBaseline-001.png)

```js
var context = canvas.getContext('2d');
//在纵坐标 60 处设置参考线
context.strokeStyle = '#FF0000';
context.moveTo(10, 60);
context.lineTo(555, 60);
context.stroke();
context.font = '20px Areal';

//设置文本在垂直方向不同的对齐方式
context.textBaseline = 'alphabetic';
context.fillText('alphabetic', 30, 60);
context.textBaseline = 'top';
context.fillText('top', 135, 60);
context.textBaseline = 'middle';
context.fillText('middle', 180, 60);
context.textBaseline = 'bottom';
context.fillText('bottom', 255, 60);
context.textBaseline = 'hanging';
context.fillText('hanging', 335, 60);
context.textBaseline = 'ideographic';
context.fillText('ideographic', 420, 60);
```
