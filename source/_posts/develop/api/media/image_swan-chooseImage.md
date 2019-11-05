---
title: swan.chooseImage
header: develop
nav: api
sidebar: image_swan-chooseImage
---




**解释**：从本地相册选择图片或使用相机拍照。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/api-image.png"  class="demo-qrcode-image" />

**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|count  | Number | 否 |9| 最多可以选择的图片张数 。|
|sizeType  |`Array.<string>`| 否 || original 原图，compressed 压缩图，默认二者都有。|
|sourceType | ` Array.<string> ` |否 | |  album 从相册选图，camera 使用相机，默认二者都有。|
|success |Function  |  否 ||成功则返回图片的本地文件路径列表 tempFilePaths。|
|fail  |  Function |   否  | | 接口调用失败的回调函数|
|complete   | Function  |  否 | |  接口调用结束的回调函数（调用成功、失败都会执行）|

**说明**：
文件的临时路径，在智能小程序本次启动期间可以正常使用，如需持久保存，需在主动调用 swan.saveFile，在智能小程序下次启动时才能访问得到。


**success返回参数说明**：

|参数  |类型|  说明 |
|---- | ---- | ---- |
|tempFilePaths  | `Array.<string>` |图片的本地文件路径列表 。|
|tempFiles  | ` Array.<object> ` |图片的本地文件列表，每一项是一个 File 对象。|

**tempFiles 对象结构如下:**

|字段 | 类型  |说明|
|---- | ---- | ---- |
|path  |  String  |本地文件路径|
|size   | Number | 本地文件大小（单位：B）|


**示例**：

<a href="swanide://fragment/25ee1bf808f49aeae2975827d0fd654e1569416277213" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
swan.chooseImage({
    count: 1,
    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
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

#### 错误码

* Andriod

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确   |
|1002|用户取消操作错误码|

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确  |
|1002|用户取消操作错误码|
|1003|用户没有授权百度使用相册|
|1003|小程序文件目录为空|	

