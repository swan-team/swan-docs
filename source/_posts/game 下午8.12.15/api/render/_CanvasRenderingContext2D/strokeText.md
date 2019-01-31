### strokeText()

`strokeText()` 是在 (x, y) 位置来描边绘制文本的方法，可以通过参数 `maxWidth` 来限定文本的最大宽度。

```js
context.strokeText(text, x, y, maxWidth);
```
`strokeText()` 方法是对文本进行描边，绘制空心的文本。[`fillText()`](#fillText) 方法是对文本填充，绘制实心的文本。

**参数值：**

| 参数         |  类型  | 描述              |
| ------------|------  | ---------------- |
| text        | string | 需要绘制的文本。   |
| x           | number | 文本起点的 x 坐标  |
| y           | number | 文本起点的 y 坐标  |
| maxWidth    | number | 可选。绘制文本允许的最大宽度（以像素为单位），如超出则文本宽度会被压缩至 `maxWidth`   |


**示例：**

使用 `strokeText()` 方法描边绘制文本，并限定文本的最大宽度为 100 像素：

![](/img/game/canvas/strokeText-001.png)

```js
var context = canvas.getContext('2d');

context.font = '48px serif';
context.fillText('Canvas', 20, 60, 100)
```