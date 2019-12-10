### drawImage()

`drawImage()` 方法提供了在 `Canvas` 画布上绘制图像的方式。

可以使用三组不同的参数调用此方式，每组参数个数和类型不同:

一、在画布的固定位置绘制图像：
```js
context.drawImage(image, dx, dy);
```
二、在画布的固定位置绘制图像，并调整图像大小：
```js
context.drawImage(image, dx, dy, dWidth, dHeight);
```
三、选定图像中某一部分，并在画布的固定位置绘制被选定的部分：
```js
context.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
```

**参数值：**

| 参数          | 类型   | 描述                                         |
| -------------|------- | --------------------------------------------|
| image        | Object | 要绘制的图像，可使用 Image 、 Video 、 Canvas   |
| sx           | number | 可选。 开始绘制的图像左上角的 x 坐标             |
| sy           | number | 可选。 开始绘制的图像左上角的 y 坐标             |
| sWidth       | number | 可选。被选定的图像的宽度                        |
| sHeight      | number | 可选。被选定的图像的高度                        |
| dx           | number | 图像左上角位于画布上的 x 坐标                    |
| dy           | number | 图像左上角位于画布上的 y 坐标                    |
| dWidth       | number | 可选。要绘制的图像的宽度                        |
| dHeight      | number | 可选。要绘制的图像的宽度                        |


**示例：**
使用的图像：
![图片](/img/game/canvas/drawImage-005.jpg)

直接调用绘制该图像的代码示例：
![图片](/img/game/canvas/drawImage-001.png)

```js
var context = canvas.getContext('2d');
var imageObj = new Image();

imageObj.onload = function(){
    context.drawImage(imageObj, 0, 0);
};
imageObj.src = 'drawImage-005.jpg';

```
由于画布比图像尺寸小，导致了一部分图像无法显示。如果想要完整地显示图像，可使用第二种调用方式，绘制图像并调整图像尺寸与画布尺寸一致，则可以完整地显示图像，如示例所示：
![图片](/img/game/canvas/drawImage-002.png)

```js
var context = canvas.getContext('2d');
var imageObj = new Image();

imageObj.onload = function(){
    context.drawImage(imageObj, 0, 0, 500, 300);
};
imageObj.src = 'drawImage-005.jpg';
```

如果只需绘制图像的某一部分，例如突出图像中的某个特定区域。此时可使用第三种调用方式，在画布上绘制该图像的选定区域。下图帮助理解其中各个参数的作用：

```js
context.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
```
![图片](/img/game/canvas/drawImage-003.png)

这样就可以把图像的选定区域按照规定尺寸在画布上绘制：

![图片](/img/game/canvas/drawImage-004.png)
```js
var context = canvas.getContext('2d');
var imageObj = new Image();

imageObj.onload = function(){
    context.drawImage(imageObj, 240, 80, 300, 300, 0, 0, 400, 400);
};
imageObj.src = 'drawImage-005.jpg';

```