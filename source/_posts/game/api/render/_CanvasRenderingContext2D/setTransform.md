### setTransform()

`setTransform()` 方法会使用单位矩阵重置当前的变换，并使用相同的参数调用变换。可以对当前 Canvas 进行缩放、旋转、倾斜的操作。

```js
context.setTransform(a, b, c, d, e, f);
```
参考 [`transform()`](#transform) 方法，该方法不会使用矩阵重置当前的变换，而是会多次叠加变换。

变换矩阵的描述：

```js
   a   c   e
[  b   d   f  ]
   0   0   1
```

**参数值：**

| 参数 |  类型  | 描述          |
| ----|------  | ------------ |
| a   | number | 水平缩放绘图   |
| b   | number | 水平倾斜绘图   |
| c   | number | 垂直倾斜绘图   |
| d   | number | 垂直缩放绘图   |
| e   | number | 水平移动绘图   |
| f   | number | 垂直移动绘图   |


**示例：**

使用 `setTransform()` 方法变换矩形的示例：

![图片](/img/game/canvas/transform-001.png)

```js
var context = canvas.getContext('2d');

context.setTransform(1, 0.5, 0, 1, 10, 10 );
context.fillRect(10, 10, 100, 100);

```

绘制一个红色矩形，两次通过 `setTransform()` 方法重置创建新的矩形变换，并绘制另外两个矩形的示例：

![图片](/img/game/canvas/setTransform-002.png)
```js
var context = canvas.getContext('2d');
//绘制第一个初始红色矩形
context.fillStyle = 'red';
context.fillRect(10, 10, 100, 100);

//重置变换并绘制第二个橙色矩形
context.setTransform(1, 0.5, 0, 1, 10, 10 );
context.fillStyle = 'orange';
context.fillRect(10, 10, 100, 100);

//重置变换并绘制第三个黄色矩形
context.setTransform(1, 0.5, 0, 1, 10, 10 );
context.fillStyle = 'yellow';
context.fillRect(10, 10, 100, 100);
```
如上示例，使用 `setTransform()` 方法在绘制第三个黄色矩形时重置了前一个变换矩阵，因此不会显示第二个橙色矩形。该方法不会覆盖当前变换矩阵，而是会多次叠加变换。需与 [`transform()`](#transform) 方法进行区分。

