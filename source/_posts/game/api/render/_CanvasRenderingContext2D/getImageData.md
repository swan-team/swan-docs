### getImageData()

`getImageData()` 方法用于获取指定矩形区域内每个像素的图像数据。

```js
context.getImageData(sx, sy, sw, sh);
```
**参数值**：

| 参数 |  类型  | 描述              |
| ----|------  | ---------------- |
| sx  | number | 要被获取图像数据的矩形区域左上角的 x 坐标  |
| sy  | number | 要被获取图像数据的矩形区域左上角的 y 坐标  |
| sw  | number | 要被获取图像数据的矩形区域的宽度   |
| sh  | number | 要被获取图像数据的矩形区域的宽度   |


**示例**：

使用 `getImageData()` 方法获取矩形数据：

```js
var context = canvas.getContext('2d');
context.fillRect( 10, 10, 200, 100)
context.fill();

console.log(context.getImageData(50, 50, 100, 100));
// ImageData {data: Uint8ClampedArray(40000), width: 100, height: 100}
```
`getImageData()` 方法返回的是一个用 `imageData` 保存的画布上指定矩形的图像数据的对象， 然后从 `data` 属性访问像素数据。`imageData` 对象的 `data` 属性保存了包含 RGBA 顺序的图片像素数据的一维数组。数组取值方式为 [r1, g1, b1, a1, r2, g2, b2, a2,...]

获得被返回的 `imageData` 对象中的第一个像素的 `data` 值的方法为：
```js
red = imgData.data[0];
green = imgData.data[1];
blue = imgData.data[2];
alpha = imgData.data[3];
```