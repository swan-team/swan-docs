
### canvas.toTempFilePathSync()

`canvas.toTempFilePath()` 的同步版本。在异步版本中，执行 fail 回调的，在同步版本中都会抛异常。

```js
canvas.toTempFilePathSync(opts);
```

**参数值：**

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|opts|Object||是|调用该方法时，传入的对象参数|
|opts.x|number|0|否|截取保存的 canvas 左上角横坐标|
|opts.y|number|0|否|截取保存的 canvas 左上角纵坐标|
|opts.width|number|canvas 的宽度|否|截取保存的 canvas 宽度。宽度为 0 或负值等异常值时，会抛异常|
|opts.height|number|canvas 的高度|否|截取保存的 canvas 高度。高度为 0 或负值等异常值时，会抛异常|
|opts.destWidth|number|canvas 的宽度|否|目标文件的宽度，会将截取的 canvas 部分拉伸或压缩至该数值。宽度为 0 或负值等异常值时，会抛异常|
|opts.destHeight|number|canvas 的高度|否|目标文件的高度，会将截取的 canvas 部分拉伸或压缩至该数值。高度为 0 或负值等异常值时，会抛异常|
|opts.fileType|string|png|否|目标文件的类型，只能为 jpg 或 png 两种类型|
|opts.quality|number|1.0|否|jpg 图像的质量，仅当 fileType 为 jpg 时才有效。取值范围为 0.0（最低）~ 1.0（最高），不含 0，不在范围内时当作 1.0|

**返回值：**

|类型|描述|
|-|-|
|string|生成的临时文件路径|

**示例：**

```js
const tempFilePath = canvas.toTempFilePathSync({
    x: 10,
    y: 10,
    width: 40,
    height: 30,
    destWidth: 200,
    destHeight: 300,
    fileType: 'jpg',
    quality: 0.2
});
const image = swan.createImage();
image.src = tempFilePath;
image.onload = () => {
    ctx.drawImage(image, 80, 50);
};
```