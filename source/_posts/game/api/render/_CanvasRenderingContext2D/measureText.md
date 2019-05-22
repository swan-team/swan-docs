### measureText()

`measureText()` 方法将在文本输出到画布之前，返回包含关于文本尺寸的信息（如文本宽度）。

```js
context.measureText(text);
```
**参数值**：

| 参数  |  类型  | 描述         |
| -----|------  | ------------|
| text | string | 需要测量的文本|

**返回值**：

返回 `TextMetrics` 对象，目前仅返回文本的宽度，以像素为单位。

**示例**：

使用 `measureText()` 方法，获得文本 Game Over 返回的文本宽度：

```js
var context = canvas.getContext('2d');

var text = context.measureText('Game Over');
text.width;  // 52
```
