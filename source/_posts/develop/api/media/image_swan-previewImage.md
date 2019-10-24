---
title: swan.previewImage
header: develop
nav: api
sidebar: image_swan-previewImage
---



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

**图示**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="../../../../img/api/media/previewImage2.jpg">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src="../../../../img/api/media/previewImage1.jpg">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>



#### 错误码

* Andriod

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确 |

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确  |


