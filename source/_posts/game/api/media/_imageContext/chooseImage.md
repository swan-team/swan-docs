### swan.chooseImage()

从本地相册选择图片或使用相机拍照。

```js
swan.chooseImage(opts)
```

**参数值**：

|属性|类型|是否必填|描述|
|-|-|-|-|
|count|Number|是|最多可以选择的图片张数，默认 9|
|sizeType|Array.<`string`>|是|original 原图，compressed 压缩图，默认二者都有|
|sourceType|Array.<`string`>|是|album 从相册选图，camera 使用相机，默认二者都有|
|success|function|否|接口调用成功的回调函数|
|fail|function|否|接口调用失败的回调函数|
|complete|function|否|接口调用完成的回调函数（接口成功、失败都会执行）|

object.sizeType 的合法值：

|值|描述|
|-|-|
|['original']|原图|
|['compressed']|压缩图|
|['original', 'compressed']|原图和压缩图都有|

object.sourceType 的合法值：

|值|描述|
|-|-|
|['album']|从相册选图|
|['camera']|使用相机拍照|
|['album', 'camera']|可从本地相册选择图片或使用相机拍照|

**返回值**：

`success` 回调函数：

形如 `function (res) {...}`，其中：

|属性|类型|描述|
|-|-|-|
|res.tempFilePath|Array.<`string`>|图片的本地文件路径列表|
|res.tempFiles|Array.<`Object`>|图片的本地文件列表，每一项是一个 File 对象|

tempFiles 对象结构：

|字段|类型|描述|
|-|-|-|
|tempFiles.path|string|本地文件路径|
|tempFiles.size|number|本地文件大小（单位：B）|

**示例**：

```js
swan.chooseImage({
    count: 1,
    sizeType: ['original', 'compressed'],
    sourceType: ['album', 'camera'],
    success: function (res) {
        console.log(res.tempFilePaths);
        console.log(res.tempFiles);
    },
    fail: function () {
        console.log('接口调用失败');
    }
});
```