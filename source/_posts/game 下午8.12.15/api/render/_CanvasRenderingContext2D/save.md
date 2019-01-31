### save()

`save()` 是将当前 canvas 的状态保存到堆栈中的方法。可使用 `save()` 方法保存状态 ，并配合 [`restore()`](#restore)  方法恢复并使用已保存的状态。

```js
context.save();
```
`save()` 方法可保存用于描述画布绘图状态的全部属性：当前的变换矩阵、当前的裁剪的区域、以下属性的当前值：`strokeStyle`、 `fillStyle`、 `lineWidth`、` lineCap`、 `lineJoin`、 `miterLimit`、 `shadowOffsetX`、 `shadowOffsetY`、 `shadowBlur`、 `shadowColor`、`globalAlpha`、`globalCompositeOperation`、`font`、`textAlign`、 `textBaseline`。

**示例：**

使用 `save()` 方法保存初始状态，设置和绘制第一个红色矩形，使用 [`restore()`](#restore) 方法方法恢复到 [`save()`](#save) 保存的初始状态再绘制一个矩形路径。此时，第二个矩形将不再受第一个红色矩形设置样式的影响，而会以默认的样式绘制一个黑色的矩形 ：

![图片](/img/game/canvas/restore-001.png)


```js
var context = canvas.getContext('2d');

context.save(); //保存默认状态

context.fillStyle="red";
context.shadowOffsetX = 10;
context.shadowOffsetY = 10;
context.shadowBlur = 5;
context.shadowColor = 'rgba(255, 0, 0, 0.2)';
context.fillRect(10, 10, 100, 100);

context.restore();  //恢复到 save 之前的初始状态
context.fillRect(130, 10, 100, 100);

```
每次使用 `save()` 方法都会将当前的 canvas 的状态推入堆栈中，可多次调用 `save()` 方法按照先到先入的顺序推入状态，而每次调用 [`restore()`](#restore) 方法都是从堆栈的顶端按照后到先出的顺序，弹出最近一次保存的状态。

示例使用 `save()` 方法依次保存了三个状态，然后使用 [`restore()`](#restore) 方法依次调用了三次保存的状态：
![图片](/img/game/canvas/save-002.png)

```js
var context = canvas.getContext('2d');

context.save();   //保存初始状态

context.fillStyle="red";
context.shadowOffsetX = 5;
context.shadowOffsetY = 5;
context.shadowBlur = 5;
context.shadowColor = 'rgba(255, 0, 0, 0.2)';
context.fillRect(10, 10, 40, 70);
context.save();   //作为第二个状态保存到堆栈中

context.fillStyle="orange";
context.shadowOffsetX = 10;
context.shadowOffsetY = 10;
context.shadowBlur = 5;
context.shadowColor = 'rgba(255, 165, 0, 0.4)';
context.fillRect(70, 10, 40, 100);
context.save();   //作为第三个状态保存到堆栈中

context.restore();   //从堆栈中取出第三个状态
context.fillRect(140, 10, 30, 100);

context.restore();   //从堆栈中取出第二个状态
context.fillRect(190, 10, 30, 70);

context.restore();   //从堆栈中取出初始状态
context.fillRect(240, 10, 30, 70);
```