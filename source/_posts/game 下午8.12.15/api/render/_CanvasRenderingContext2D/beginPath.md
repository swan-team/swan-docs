### beginPath()

`beginPath()` 方法用于重新开始一条路径，或重置当前路径。

```js
context.beginPath();
```

**示例：**

使用 `beginPath()` 方法绘制蓝色、红色两个路径：

![图片](/img/game/canvas/beginPath-001.png)

```js
var context = canvas.getContext('2d');

context.beginPath();
context.moveTo(20, 40);
context.lineTo(200, 40);
context.lineWidth = 2;
context.strokeStyle = 'blue';
context.stroke();

context.beginPath();
context.moveTo(20, 80);
context.lineTo(200, 100);
context.lineWidth = 4;
context.strokeStyle = 'red';
context.stroke();
```

尝试去掉第二个路径绘制前的 `beginPath()` 方法，结果将会绘制两个红色路径。因为 [`stroke()`](#stroke) 方法会绘制其到上次  `beginPath()` 之间的所有路径。此时，第一个 [`stroke()`](#stroke) 绘制了第一条 2px 宽的蓝色路径，而第二个 [`stroke()`](#stroke) 将绘制它和 `beginPath()` 之间的两条 4px 宽的红色路径，并且覆盖了第一条蓝色路径。

![图片](/img/game/canvas/beginPath-002.png)

```js
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

context.beginPath();
context.moveTo(20, 40);
context.lineTo(200, 40);
context.lineWidth = 2;
context.strokeStyle = 'blue';
context.stroke();

context.moveTo(20, 80);
context.lineTo(200, 100);
context.lineWidth = 4;
context.strokeStyle = 'red';
context.stroke();
```