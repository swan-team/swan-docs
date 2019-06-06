### strokeStyle

`strokeStyle` 属性用来设置或获取绘制图形的颜色或样式。

```js
context.fillStyle = color;
context.fillStyle = gradient;
context.fillStyle = pattern;
```
**属性值：**

| 值         |  类型  | 描述              |
| ---------- |------  | ---------------- |
| color      | string | 用于绘制图形的 CSS 颜色值，默认值是 #000000（黑色）|
| gradient   | Object | 用于绘制图形的线性或放射性渐变  |
| pattern    | Object | 用于绘制图形的可重复图像  |

**示例：**

使用 `strokeStyle()` 属性设置绘制矩形的颜色：

![图片](/img/game/canvas/strokeStyle-001.png)

```js
var context = canvas.getContext('2d');

context.strokeStyle = '#FF0000';
context.strokeRect(10, 10, 200, 100);

```
