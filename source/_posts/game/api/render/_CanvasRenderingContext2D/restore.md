### restore()

`restore()` 是将 canvas 恢复到最近的保存状态的方法。如果没有保存的状态，则调用 `restore()` 方法将不执行任何操作。

```js
context.restore();
```
`restore()` 和 [`save()`](#save) 方法要配合使用。如果想避免对 A 执行的设置会影响 B 的绘制，需在对 A 设置前使用 [`save()`](#save) 方法保存初始态，并在开始设定 B 之前使用 `restore()` 方法返回之前保存的状态。

**示例：**

使用 [`save()`](#save) 方法保存初始状态，设置和绘制第一个红色矩形，使用 `restore()` 方法恢复到 [`save()`](#save) 保存的初始状态再绘制一个矩形路径。此时，第二个矩形将不再受第一个红色矩形设置样式的影响，而会以默认的样式绘制一个黑色的矩形 ：

![图片](/img/game/canvas/restore-001.png)

```js
var context = canvas.getContext('2d');

context.save(); //保存默认状态

context.fillStyle = "red";
context.shadowOffsetX = 10;
context.shadowOffsetY = 10;
context.shadowBlur = 5;
context.shadowColor = 'rgba(255, 0, 0, 0.2)';
context.fillRect(10, 10, 100, 100);

context.restore();  //恢复到 save 之前的初始状态
context.fillRect(130, 10, 100, 100);

```

尝试去掉 `restore()` 方法绘制第二个矩形，则第二个矩形将会使用第一个矩形设置的样式：


![图片](/img/game/canvas/restore-002.png)


```js
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

context.save(); //保存初始状态

context.fillStyle="red";
context.shadowOffsetX = 10;
context.shadowOffsetY = 10;
context.shadowBlur = 5;
context.shadowColor = 'rgba(255, 0, 0, 0.2)';
context.fillRect(10, 10, 100, 100);

//context.restore();
context.fillRect(130, 10, 100, 100);

```