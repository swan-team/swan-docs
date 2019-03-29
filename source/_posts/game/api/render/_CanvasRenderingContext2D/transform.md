### transform()


`transform()` 方法使用参数矩阵叠加当前的变换矩阵。可以对当前 Canvas 进行缩放、旋转、倾斜的操作。

```js
context.transform(a, b, c, d, e, f);
```
参见 [`setTransform()`](#setTransform) 方法，该方法会使用矩阵重置当前的变换并且会调用 `transform()`。

变换矩阵的描述：

```js
   a   c   e
[  b   d   f  ]
   0   0   1
```


**参数值：**

| 参数 |  类型   | 描述          |
| ----|-------- | -------------|
| a   | number  | 水平缩放绘图   |
| b   | number  | 水平倾斜绘图   |
| c   | number  | 垂直倾斜绘图   |
| d   | number  | 垂直缩放绘图   |
| e   | number  | 水平移动绘图   |
| f   | number  | 垂直移动绘图   |


**示例：**

使用 `transform()` 方法变换矩形的示例：

![图片](/img/game/canvas/transform-001.png)

```js
var context = canvas.getContext('2d');

context.transform(1, 0.5, 0, 1, 10, 10 );
context.fillRect(10, 10, 100, 100);

```

绘制一个红色矩形，两次通过 `transform()` 方法添加新的矩形变换，并再次绘制另外两个矩形的示例：

![图片](/img/game/canvas/transform-002.png)
```js
var context = canvas.getContext('2d');
//绘制第一个初始红色矩形
context.fillStyle = 'red';
context.fillRect(10, 10, 100, 100);

//添加变换并绘制第二个橙色矩形
context.transform(1, 0.5, 0, 1, 10, 10 );
context.fillStyle = 'orange';
context.fillRect(10, 10, 100, 100);

//添加变换并绘制第三个黄色矩形
context.transform(1, 0.5, 0, 1, 10, 10 );
context.fillStyle = 'yellow';
context.fillRect(10, 10, 100, 100);
```
如上示例，使用 `transform()` 方法绘制第三个黄色矩形时，相当于在第二个橙色矩形水平和垂直方向分别移动 10 像素的基础上，再水平和垂直方向分别移动 10 像素，结果第三个矩形将在两个方向上分别移动了 20 像素。需与 `setTransform()` 方法进行区分。

