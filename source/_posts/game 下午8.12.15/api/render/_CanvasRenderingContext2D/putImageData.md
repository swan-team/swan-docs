### putImageData()

`putImageData()` 方法可以将已有的 `imageData` 对象的数据绘制到画布上，即输出一张图片的像素数据。

```js
context.putImageData(imagedata, dx, dy);
context.putImageData(imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight);
```
一般先使用 `getImageData()` 方法获取图片的像素数据，然后利用 `putImageData()` 方法将已获得的数据输出。
使用该方法，可以实现图像反转、单色蒙版、黑白等效果。

**参数值：**

| 参数 |  类型  | 描述              |
| ----|------  | ---------------- |
| imagedata  |  Object | 包含像素值的数组对象 |
| dx  | number | 绘制 imageData 对象的开始点的 x 坐标  |
| dy  | number | 绘制 imageData 对象的开始点的 y 坐标   |
| dirtyX  | number |可选。绘制 ImageData 对象的矩形左上角的 x 坐标  |
| dirtyY  | number |可选。绘制 ImageData 对象的矩形左上角的 y 坐标  |
| dirtyWidth  | number |可选。输出 ImageData 对象范围矩形的宽  |
| dirtyHeight  | number |可选。输出 ImageData 对象范围矩形的高   |

**示例：**

通过 `getImageData()` 方法复制画布上指定矩形区域内的像素数据，然后通过 [`putImageData()`](#putImageData) 方法将图像数据绘制到画布：

```js
var context = canvas.getContext('2d');

context.fillStyle="green";
context.fillRect(10,10,200,100);

function copy()
{
var imgData=ctx.getImageData(10,10,200,100);
context.putImageData(imgData,100,70);
}
```
实现图像反转效果，并输出图像数据到新的位置：

原始的图像：
![图片](/img/game/canvas/imageData-001.jpg)

反转后的效果：
![图片](/img/game/canvas/imageData-002.png)

```js

var image = new Image();
image.src = '001.jpg';

image.onload = function(){
    context.drawImage(image, 0, 0);
    var imgData = context.getImageData(0, 0, 400, 361);
    var data = imgData.data;


    //遍历每一个像素
    for(var i = 0; i< data.length; i += 4){
        data[i + 0] = 255 - data[i + 0];
        data[i + 1] = 255 - data[i + 1];
        data[i + 2] = 255 - data[i + 2];
    }
    context.putImageData(imgData, 50, 50);
}
```
示例通过 `getImageData()` 方法拷贝了图像的数据，将数组存储在 `ImageData` 对象的 `data` 属性中，并对数据的 color/alpha 进行反转（用 255 减去图像本身的颜色值）。最后使用 [`putImageData()`](#putImageData) 方法将反转后的图像数据拷贝回画布上即实现。还可以通过 [`putImageData()`](#putImageData) 方法设定输出的图像放在画布上的位置和尺寸。