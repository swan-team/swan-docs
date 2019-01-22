---
title: 图片
header: develop
nav: api
sidebar: media_image
---


chooseImage
---
**解释：**从本地相册选择图片或使用相机拍照。

**参数：**Object

**Object参数说明：**

|参数 | 类型  |必填 | 说明|
|---- | ---- | ---- | ----|
|count  | Number | 否  | 最多可以选择的图片张数，默认 9。|
|sizeType  |  String Array| 否  | original 原图，compressed 压缩图，默认二者都有。|
|sourceType | String Array |否 |  album 从相册选图，camera 使用相机，默认二者都有。|
|success |Function  |  是 | 成功则返回图片的本地文件路径列表 tempFilePaths。|
|fail  |  Function |   否  | 接口调用失败的回调函数|
|complete   | Function  |  否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**说明**：
文件的临时路径，在智能小程序本次启动期间可以正常使用，如需持久保存，需在主动调用 swan.saveFile，在智能小程序下次启动时才能访问得到。


**success返回参数说明：**

|参数  |类型|  说明 |
|---- | ---- | ---- |
|tempFilePaths  | String Array |图片的本地文件路径列表 。|
|tempFiles  | Object Array |图片的本地文件列表，每一项是一个 File 对象。|

**tempFiles 对象结构如下:**

|字段 | 类型  |说明|
|---- | ---- | ---- |
|path  |  String  |本地文件路径|
|size   | Number | 本地文件大小（单位：B）|


**示例：**
<a href="swanide://fragment/25d4a08064aa160d2986a38e3f9311921548069510198" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>
```js
swan.chooseImage({
    count: 1,
    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    success: function (res) {
        // 成功则返回图片的本地文件路径列表 tempFilePaths
        console.log(res.tempFilePaths);
        // 文件列表对象
        console.log(res.tempFiles);
    },
    fail: function (err) {
        console.log('错误码：' + err.errCode);
        console.log('错误信息：' + err.errMsg);
    }
});

```

previewImage
---
**解释：** 预览图片。

**参数：** Object

**Object参数说明：**

|参数 | 类型 | 必填  |说明|
|---- | ---- | ---- | ----|
|current |String | 否  | 当前显示图片的链接，不填则默认为 urls 的第一张。|
|urls   | String Array |是 |  需要预览的图片链接列表|
|success| Function |   否  | 接口调用成功的回调函数|
|fail  |  Function  |  否 |  接口调用失败的回调函数|
|complete  |  Function  |  否 |  接口调用结束的回调函数（调用成功、失败都会执行）|


**示例：**

```js
swan.previewImage({
    current: '', // 当前显示图片的http链接
    urls: [], // 需要预览的图片http链接列表
    fail: function (err) {
        console.log('错误码：' + err.errCode);
        console.log('错误信息：' + err.errMsg);
    }
});
```

**说明**

* 开发者工具 1.8.0 current 参数为当前显示图片的索引值。
* 不支持预览本地文件。

getImageInfo
---
**解释：**获取图片信息

**参数：**Object

**Object参数说明：**

|参数  |类型|  必填 | 说明|
|---- | ---- | ---- | ----|
|src |String | 是  | 图片的路径，可以是相对路径、临时文件路径或存储文件路径、网络图片。|
|success| Function  |  否  | 接口调用成功的回调函数|
|fail  |  Function  |  否  | 接口调用失败的回调函数|
|complete |   Function |   否  | 接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明：**

|参数  |类型 | 说明|
|---- | ---- | ---- |
|width |  Number | 图片宽度（单位：px）|
|height | Number | 图片高度（单位：px）|
|path  |  String | 返回图片的本地路径|
|orientation|String|返回图片的方向：<p>**·** up:默认不变；<p>**·**down：180度旋转；<p>**·**left：逆时针90度旋转；<p>**·**right：顺时针90度旋转；<p>**·** up-mirrored：镜像翻转；<p>**·** down-mirrored：镜像180旋转；<p>**·** left-mirrored：逆时针90度镜像旋转；<p>**·** right-mirrored：顺时针90度镜像旋转。|
|type|String|返回图片的格式 |


**示例：**


```js
swan.getImageInfo({
    src: '/xxx/xxx.jpg',
    success: function (res) {
        // 成功则返回图片高，宽，本地路径
        console.log(res.width);
        console.log(res.height);
        console.log(res.path);
    },
    fail: function (err) {
        console.log('错误码：' + err.errCode);
        console.log('错误信息：' + err.errMsg);
    }
});

```

saveImageToPhotosAlbum
---
**解释：** 保存图片到系统相册，需要用户授权。

**参数：** Object

**Object参数说明：**

|参数名| 类型 | 必填 | 说明|
|---- | ---- | ---- |---- |
|filePath  |  String  |是 |  图片文件路径，可以是临时文件路径也可以是永久文件路径，不支持网络图片路径。|
|success |Function |   否  | 接口调用成功的回调函数|
|fail  |  Function  |  否  | 接口调用失败的回调函数|
|complete |   Function |   否  | 接口调用结束的回调函数（调用成功、失败都会执行）|


<!-- **success返回参数说明：**

|参数名| 类型|  说明|
|---- | ---- | ---- |
|errMsg  |String | 调用结果| -->


**示例：**

```js
swan.saveImageToPhotosAlbum({
    'filePath': '/xxx/xxx.jpg',
    success: function (res) {
        console.log(res);
    },
    fail: function (err) {
        console.log('错误码：' + err.errCode);
        console.log('错误信息：' + err.errMsg);
    }
});
```
