### fillStyle

`fillStyle` 属性用来设置或获取填充图形的颜色、渐变、样式。

```js
context.fillStyle = color;
context.fillStyle = gradient;
context.fillStyle = pattern;
```
**属性值：**

| 值         |  类型  | 描述              |
| ---------- |------  | ---------------- |
| color      | string | 用于填充图形的 CSS 颜色值，默认值是 #000000 （黑色）|
| gradient   | Object | 用于填充图形的线性或放射性渐变  |
| pattern    | Object | 用于填充图形的可重复图像  |

**示例：**

使用 `fillStyle` 属性的 CSS 颜色值填充第一个矩形，使用线性渐变填充第二个矩形的示例：

![图片](/img/game/canvas/fillStyle-001.png)

```js
var context = canvas.getContext('2d');

//使用 CSS 颜色值填充矩形
context.fillStyle = '#FF0000';
context.fillRect(10, 10, 200, 100);

//使用线性渐变填充矩形
var gradient = context.createLinearGradient(0, 0, 200, 0);
gradient.addColorStop(0, 'red');
gradient.addColorStop(1, 'white');
context.fillStyle = gradient;
context.fillRect(10, 130, 200, 100);
```

所使用的图像：
![图片](/img/game/canvas/fillStyle-002.png)

使用该图像填充矩形的示例：
![图片](/img/game/canvas/fillStyle-003.png)

```js
var context = canvas.getContext('2d');
var image = new Image();

image.onload = function(){
    var pattern = context.createPattern(image, 'repeat');
    context.fillStyle = pattern;
    context.fillRect(10, 10, 200, 100);
};
image.src = 'fillStyle-002.png';

```