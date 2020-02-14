### textAlign

`textAlign` 属性用来设置或获取当前文本在水平方向的对齐方式。默认值为 `start`，可以设置，更改文本对齐方式。

```js
context.textAlign = value;
```
**有效值：**

| 值     |  类型   | 描述              |
|------- |------  | ---------------- |
| start  | string |默认值。文本在指定的位置开始 |
| end    | string |文本在指定的结位置结束 |
| center | string |文本居中对齐 |
| left   | string |文本左对齐  |
| right  | string |文本右对齐 |

`start` 和 `end` 与文字的 `direction`（显示方向）有关，如果 `direction` 属性设置为 `ltr`（从左到右），文本 `left` 和 `start` 的效果相同，`right` 和 `end` 的效果相同，如果 `direction` 属性设置为 `rtl`（从右到左），则 `left` 和 `end` 的效果相同，`right` 和 `start` 的效果相同。

**示例：**

创建一条纵向参考线，使用 `textAlign` 属性设置文本水平方向不同对齐方式：

![](/img/game/canvas/textAlign-001.png)

```js
var context = canvas.getContext('2d');
//在横坐标 140 处设置参考线
context.strokeStyle = '#FF0000';
context.moveTo(140, 10);
context.lineTo(140, 230);
context.stroke();
context.font = '20px Areal';

//设置文本在水平方向不同的对齐方式
context.textAlign = 'start';
context.fillText('textAlign=start', 140, 50);
context.textAlign = 'end';
context.fillText('textAlign=end', 140, 90);
context.textAlign = 'center';
context.fillText('textAlign=center', 140, 130);
context.textAlign = 'left';
context.fillText('textAlign=left', 140, 170);
context.textAlign = 'right';
context.fillText('textAlign=right', 140, 210);
```
