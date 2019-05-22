### fillText()

`filltext()` 方法会在 (x, y) 位置填充文本，还可以通过设置参数 `maxWidth` 来限定文本的最大宽度。。

```js
context.fillText(text, x, y, maxWidth);
```
`fillText()` 是对文本填充，绘制实心的文本的方法。[`strokeText()`](#strokeText) 是对文本进行描边，绘制空心的文本的方法。

**参数值**：

| 参数         |  类型  | 描述              |
| ------------|------  | ---------------- |
| text        | string | 需要绘制的文本     |
| x           | number | 文本起点的 x 坐标  |
| y           | number | 文本起点的 y 坐标  |
| maxWidth    | number | 可选。绘制文本允许的最大宽度（以像素为单位），如超出则文本宽度会被压缩至 `maxWidth`   |


**示例**：

使用 `fillText` 属性填充文本，并限定文本的最大宽度为 100 像素：

![图片](/img/game/canvas/fillText-001.png)

```js
var context = canvas.getContext('2d');

context.font = '48px serif';
context.fillText('Canvas', 20, 60, 100)
```
