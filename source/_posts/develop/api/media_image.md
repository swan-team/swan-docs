---
title: 图片
header: develop
nav: api
sidebar: media_image
---


## swan.chooseImage

**解释**：从本地相册选择图片或使用相机拍照。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/api-image.png"  class="demo-qrcode-image" />

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|count  | Number | 否  |  -|最多可以选择的图片张数，默认 9。|
|sizeType  |`Array.<string>`| 否  |  -|original 原图，compressed 压缩图，默认二者都有。|
|sourceType | ` Array.<string> ` |否 | -|  album 从相册选图，camera 使用相机，默认二者都有。|
|success |Function  |  否 |  -|成功则返回图片的本地文件路径列表 tempFilePaths。|
|fail  |  Function |   否  | -| 接口调用失败的回调函数|
|complete   | Function  |  否 | -|  接口调用结束的回调函数（调用成功、失败都会执行）|

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

## swan.previewImage

**解释**： 预览图片。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/previewImage.png"  class="demo-qrcode-image" />

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|current |String | 否  |  -|当前显示图片的链接，不填则默认为 urls 的第一张。|
|urls   | `Array.<string>` |是 | -|  需要预览的图片链接列表|
|images| `Array.<object>` | 否 | - | 支持原图的图片链接列表 |
|success| Function |   否  | -| 接口调用成功的回调函数|
|fail  |  Function  |  否 |  -| 接口调用失败的回调函数|
|complete  |  Function  |  否 |  -| 接口调用结束的回调函数（调用成功、失败都会执行）|


**示例**：

<a href="swanide://fragment/f894cd9bd5137023f6820041d829c12e1569391306305" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
swan.previewImage({
    current: 'https://b.bdstatic.com/miniapp/image/swan-preview-image-zip.png',// current需与urls中链接一致
    urls: ['https://b.bdstatic.com/miniapp/image/swan-preview-image-zip.png'], 
    images: [
        {
            "url": 'https://b.bdstatic.com/miniapp/image/swan-preview-image-zip.png', 
            "origin_url": 'https://b.bdstatic.com/miniapp/image/swan-preview-image-origin.png'
        }
    ],
    success: res => {
        console.log('previewImage success', res);
    },
    fail: err => {
        console.log('previewImage fail', err);
    }
});

```

**说明**

* 开发者工具 1.8.0 current 参数为当前显示图片的索引值。
* 不支持预览本地文件。


#### 错误码

* Andriod

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确 |

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确  |

## swan.getImageInfo

**解释**：获取图片信息

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|src |String | 是  | -| 图片的路径，可以是相对路径、临时文件路径或存储文件路径、网络图片。|
|success| Function  |  否  | -| 接口调用成功的回调函数|
|fail  |  Function  |  否  | -| 接口调用失败的回调函数|
|complete |   Function |   否  | -| 接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明**：

|参数  |类型 | 说明|
|---- | ---- | ---- |
|width |  Number | 图片宽度（单位：px）|
|height | Number | 图片高度（单位：px）|
|path  |  String | 返回图片的本地路径|
|orientation|String|返回图片的方向：<p>**·** up:默认不变；<p>**·**down：180度旋转；<p>**·**left：逆时针90度旋转；<p>**·**right：顺时针90度旋转；<p>**·** up-mirrored：镜像翻转；<p>**·** down-mirrored：镜像180旋转；<p>**·** left-mirrored：逆时针90度镜像旋转；<p>**·** right-mirrored：顺时针90度镜像旋转。|
|type|String|返回图片的格式 |


**示例**：

<a href="swanide://fragment/b439e751ff3f4f8002c24abb715bdda11569391409791" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 js 文件中

```js
    getImageInfo() {
        swan.getImageInfo({
            src: 'https://smartprogram.baidu.com/xxx.png',
            success: res => {
                console.log('getImageInfo success', res);
            },
            fail: err => {
                console.log('getImageInfo fail', err);
            }
        });
    }
```

#### 错误码

* Andriod

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法|
|202|解析失败，请检查参数是否正确|
|1001|执行失败|

* iOS

|错误码|说明|
|--|--|
|202  |解析失败，请检查参数是否正确|
|1003|读取图片内容为空(小程序文件夹为空或读取图片失败)|

## swan.saveImageToPhotosAlbum

**解释**： 保存图片到系统相册，需要用户授权。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|filePath  |  String  |是 | -|  图片文件路径，可以是临时文件路径也可以是永久文件路径，不支持网络图片路径。|
|success |Function |   否  | -| 接口调用成功的回调函数|
|fail  |  Function  |  否  | -| 接口调用失败的回调函数|
|complete |   Function |   否  |  -|接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：

<a href="swanide://fragment/1493fabbbf98659284ff1d4837d9cb7f1569416506836" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    swan.downloadFile({
        // 仅为示例，并非真实的资源
        url: 'https://b.bdstatic.com/miniapp/xxxx',
        header: {
            'content-type': 'application/json'
        },
        success: res => {
            let filePath = res.tempFilePath;
            swan.saveImageToPhotosAlbum({
                filePath, // 暂不支持网络图片地址，需与swan.downloadFile一起使用
                success: res => {
                    swan.showToast({
                        title: '已保存到本地相册',
                        icon: 'none'
                    });
                    console.log('saveImageToPhotosAlbum success', res);
                },
                fail: err => {
                    swan.showToast({
                        title: '',
                        icon: 'none'
                    });
                    console.log('saveImageToPhotosAlbum fail', err);
                }
            });
        },
        fail: err => {
            console.log('错误码：' + err.errCode);
            console.log('错误信息：' + err.errMsg);
        }
    });
});
```


## swan.chooseAlbum

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
<a href="swanide://fragment/e0984aa8374449ead4cfb885dbf0ce331569502073433" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

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




