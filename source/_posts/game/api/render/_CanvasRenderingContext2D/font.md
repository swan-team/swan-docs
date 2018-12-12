### font

`font` 属性用来设置或获取当前文本的字体样式。

```js
context.font = value;
```
使用符合 CSS [font](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font) 语法的 [DOMString](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMString) 字符串。默认字体是 10px sans-serif。

**属性值：**

| 值     |  类型   | 描述              |
|------- |------  | ---------------- |
| font-style  | string |设置字体样式  |
| font-variant  | string |设置字体大小写 |
| font-weight | string |设置字体粗细 |
| font-size  | string |设置字体尺寸  |
| font-height  | string |设置字体行高  |
| font-family | string |设置字体系列  |

**示例：**

使用 `font` 定义文本的尺寸和字体样式：

![图片](/img/game/canvas/font-001.png)

```js
var context = canvas.getContext('2d');

context.font = '40px Arial';
context.fillText('canvas', 20, 60);
```
