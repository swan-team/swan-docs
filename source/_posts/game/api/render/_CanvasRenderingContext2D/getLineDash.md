### getLineDash()

`getLineDash()` 是获取当前线条虚线样式的方法。

```js
context.getLineDash();
```

**返回值：**
将返回一个 Array 数组，数组为一组描述交替绘制线段和间距长度的数字。不同的虚线样式将会返回不同的数组及排列顺序。数组元素可以是多个，并且会被复制并重复使用。

**示例：**

使用 `getLineDash()` 方法获得虚线返回的数组：

![图片](/img/game/canvas/getLineDash-001.png)

```js
var context = canvas.getContext('2d');

context.setLineDash([10, 20, 30]);
console.log(context.getLineDash());  // [10, 20, 30, 10, 20, 30]  获得虚线返回的数组

context.beginPath();
context.moveTo(10, 40);
context.lineTo(300, 40);
context.lineWidth = 2;
context.stroke();
```



