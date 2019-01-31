### canvas.toDataURL()

该方法将画布上的内容以支持图片展示的 data URI 的格式返回。

```js
canvas.toDataURL();
```

**参数值：**

|参数|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|type|string|`'image/png'`|否|图片的格式，默认值为 `image/png`|
|encoderOptions|number||否|在指定图片格式为 `image/jpeg` 时，可以从 0 到 1 的区间内选择图片的质量。如果超出取值范围，将会使用默认值 0.92|

**返回值：**

|类型|描述|
|-|-|
|string| data URI 格式的字符串|

**示例：**

```js
let dataURL = canvas.toDataURL();
console.log(dataURL);
```