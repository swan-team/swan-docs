---
title: swan.chooseAlbum
header: develop
nav: api
sidebar: image_chooseAlbum
---



> 基础库 3.30.3开始支持，低版本需做兼容处理

**解释**：打开本地相册，相册内可以同时包含图片和视频。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/chooseAlbum.png"  class="demo-qrcode-image" />

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|count  | Number | 否  |  -|最多可以选择的图片/视频数量，默认 9。|
|mode  | String| 否  |  -|打开相册后可选择资源类型设置, 可选择模式为： single/both; single: 打开相册后只能选择图片或视频； both： 打开相册后，可以同时选择图片和视频; 默认为single。|
|compressed | Boolean |否 | -|  是否压缩所选的视频源文件，默认值为true，需要压缩。|
|success |Function  |  是 |  -|成功则返回图片或视频的本地文件路径列表 tempFilePaths。|
|fail  |  Function |   否  | -| 接口调用失败的回调函数|
|complete   | Function  |  否 | -|  接口调用结束的回调函数（调用成功、失败都会执行）|

**说明**：
文件的临时路径，在智能小程序本次启动期间可以正常使用，如需持久保存，需在主动调用 swan.saveFile，在智能小程序下次启动时才能访问得到。


**success返回参数说明**：

|参数  |类型|  说明 |
|---- | ---- | ---- |
|tempFilePaths  | `Array.<string>` |选择资源(图片或视频)的本地文件路径列表 。|
|tempFiles  | ` Array.<object> ` |选择资源(图片或视频)本地文件列表，每一项是一个 File 对象。|

**tempFiles 对象结构如下:**

|字段 | 类型  |说明|
|---- | ---- | ---- |
|path  |  String  |本地文件路径|
|size   | Number | 本地文件大小（单位：B）|
|type|文件类型|photo、video|
|duration|Number|选定视频的时间长度 (单位：s)|

**示例**
<a href="swanide://fragment/9e816c3b680f03a8ebc74b23a831b06a1569416597656" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

**示例 1 打开相册只选择图片或视频**
* 在 js 文件中

```js
 swan.chooseAlbum({
    count: 2,
    mode: 'single',
    compressed: true,
    success: res => {
        // 成功则返回图片的本地文件路径列表 tempFilePaths
        console.log(res.tempFilePaths);
        // 文件列表对象
        console.log(res.tempFiles);
    },
    fail: err => {
        console.log('错误码：' + err.errCode);
        console.log('错误信息：' + err.errMsg);
    }
});

```

**示例 2 打开相册只选择图片和视频**
* 在 js 文件中

```js
swan.chooseAlbum({
    count: 3,
    mode: 'both',
    compressed: false,
    success: res => {
        console.log(res.tempFilePaths);
        console.log(res.tempFiles);
    },
    fail: err => {
        console.log('错误码：' + err.errCode);
        console.log('错误信息：' + err.errMsg);
    }
});

```




