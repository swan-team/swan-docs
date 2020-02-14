### canvas.toTempFilePath()

该方法将当前 canvas 保存为一个临时图像文件。注意，当参数中的 x, y, width, height 组成的截取矩形，与当前 canvas 无交集，那么截取的内容为空，会执行 fail 回调函数，并且回调函数的参数 res.tempFilePath 为 null。

```js
canvas.toTempFilePath(opts);
```

**参数值：**

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|opts|Object||是|调用该方法时，传入的对象参数|
|opts.x|number|0|否|截取保存的 canvas 左上角横坐标|
|opts.y|number|0|否|截取保存的 canvas 左上角纵坐标|
|opts.width|number|canvas 的宽度|否|截取保存的 canvas 宽度。宽度为 0 或负值等异常值时，会执行 fail 回调，返回的 res.tempFilePath 为 null|
|opts.height|number|canvas 的高度|否|截取保存的 canvas 高度。 高度为 0 或负值等异常值时，会执行 fail 回调，返回的 res.tempFilePath 为 null|
|opts.destWidth|number|canvas 的宽度|否|目标文件的宽度，会将截取的 canvas 部分，拉伸或压缩至该数值。宽度为 0 或负值等异常值时，会执行 fail 回调，返回的 res.tempFilePath 为 null|
|opts.destHeight|number|canvas 的高度|否|目标文件的高度，会将截取的 canvas 部分，拉伸或压缩至该数值。高度为 0 或负值等异常值时，会执行 fail 回调，返回的 res.tempFilePath 为 null|
|opts.fileType|string|png|否|目标文件的类型，只能为 jpg 或 png 两种类型|
|opts.quality|number|1.0|否|jpg 图像的质量，仅当 fileType 为 jpg 时才有效。取值范围为 0.0（最低）~ 1.0（最高），不含 0，不在范围内时当作 1.0|
|opts.success|function| |否|接口调用成功的回调函数|
|opts.fail|function| |否|接口调用失败的回调函数|
|opts.complete|function| |否|接口调用完成的回调函数（接口成功、失败都会执行）|

`success` 回调函数：

形如 `function (res) {...}`, 其中:

|属性|类型|描述|
|-|-|-|
|res|Object|回调函数参数对象|
|res.tempFilePath|string|生成的临时文件路径|

`fail` 回调函数：

形如 `function (res) {...}`, 其中:

|属性|类型|描述|
|-|-|-|
|res|Object|回调函数参数对象|
|res.errMsg|string|报错信息|
|res.tempFilePath|string|一般 fail 回调里面，该项值都为 null|

`complete` 回调函数：

当接口调用成功时，其返回值与 `success` 回调函数的返回值相同；
当接口调用失败时，其返回值与 `fail` 回调函数的返回值相同。


**示例：**

```js
canvas.toTempFilePath({
    x: 10,
    y: 10,
    width: 40,
    height: 30,
    destWidth: 200,
    destHeight: 200,
    success: res => {
        const image = swan.createImage();
        image.src = res.tempFilePath;
        image.onload = () => {
            ctx.drawImage(image, 50, 80);
        };
    }
});
```