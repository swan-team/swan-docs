### createImageData()

`createImageData()` 方法用于创建一个新的、空白的 `ImageData` 对象。

```js
context.createImageData(width, height);
context.createImageData(imagedata);
```

此处的 `ImageData` 对象不是图像，而是规定了画布上的一部分（矩形），并保存了该部分每个像素的信息。`ImageData` 对象中的每个像素都包含 RGBA 四方面的值。

<ol>
<li> R - 红色（0-255）</li>
<li> G - 绿色（0-255）</li>
<li> B - 蓝色（0-255）</li>
<li> A - alpha通明度（0-255）</li>

**参数值：**

| 参数          |  类型  | 描述                                           |
| -------------|------ | ---------------------------------------------- |
| width        | number | 生成的新的 `ImageData` 对象的宽度                |
| height       | number | 生成的新的 `ImageData` 对象的高度                |
| imagedata    | Object | 从现有 `ImageData` 对象中，复制一个新的 `ImageData` 对象 |


**示例：**

使用 `createImageData(width, height)` 方法，以指定尺寸创建新的 `imageData` 对象的示例：

![图片](/img/game/canvas/createImageData-001.png)

```js
var context = canvas.getContext('2d');

var imageData = context.createImageData(100, 100);

for (var i=0; i<imageData.data.length; i+=4){
    imageData.data[i+0] = 0;
    imageData.data[i+1] = 255;
    imageData.data[i+2] = 0;
    imageData.data[i+3] = 255;
    }

context.putImageData(imageData, 100, 100);

```
[`createImageData()`](#createImageData) 方法会返回一个空的 `ImageData` 对象，需要先对其像素赋值才能显示到画布上。其具体操作步骤为：
 1、 使用 [`createImageData()`](#createImageData) 方法新建像素。
 2、 对 `imageData` 进行赋值，将 `ImageData` 对象中的每个像素 RGBA 四方面的值，以数组形式存储于 `ImageData` 对象的 `data` 属性中；
 3、 使用 [`putImageData()`](#putImageData) 方法，将 `ImageData` 画到画布上。


如下示例，使用 `createImageData()` 方法创建与基础 ImageData 对象尺寸相同的新的 ImageData 对象，并显示对象宽度，此示例生成的新 ImageData 对象将是黑色透明的：

![图片](/img/game/canvas/createImageData-002.png)

```js
var context = canvas.getContext('2d');

var image01 = context.createImageData(200, 100);
var image02 = context.createImageData(image01);
    context.fillText(image02.width, 40, 40);
```
