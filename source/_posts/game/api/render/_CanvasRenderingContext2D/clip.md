### clip()

`clip()` 方法可以裁切出一个任意形状和尺寸的区域，用于限制所显示的图像范围。该方法通过 [非零环绕规则](https://en.wikipedia.org/wiki/Nonzero-rule) 计算当前裁选区域和完整路径区域的交点来创建新的限幅区域。

```js
context.clip();
```
**示例**：

绘制一个深灰色矩形，使用 `clip()` 方法裁选出该区域，之后再绘制一个红色矩形。此时只有位于裁选区内的内容是可见的，红色矩形位于裁选区外的被遮蔽部分将不可见。

![图片](/img/game/canvas/clip-001.png)

```js
var context = canvas.getContext('2d');

context.rect(20, 20, 150, 150)
context.fillStyle = '#6d6d6d';
context.fill();
context.clip();
context.fillStyle = '#FE4343';
context.fillRect(30, 30, 100, 200);
```

利用 `clip()` 方法可以选择只展画布上某一特定区域绘制的内容，并将某些区域遮蔽掉不显示，从而制作很多有趣的效果。

