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

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|current |String | 否 || 当前显示图片的链接，不填则默认为 urls 的第一张。|
|urls   | Array.&lt;string&gt;|是 | |  需要预览的图片链接列表|
|images| Array.&lt;object&gt; | 否 | - | 支持原图的图片链接列表 |
|success| Function |   否  | | 接口调用成功的回调函数|
|fail  |  Function  |  否 || 接口调用失败的回调函数|
|complete  |  Function  |  否 || 接口调用结束的回调函数（调用成功、失败都会执行）|


**图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/previewImage.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例1 - 基本示例**

<a href="swanide://fragment/523172fb38fd75a5a2a93081d15d091c1576345594021" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="container">
    <view class="card-area">
        <view class="top-image">
            <image src="https://b.bdstatic.com/miniapp/image/swan-preview-image-2-zip.png" mode="widthFix" bindtap="previewImage"></image>
        </view>
        <view class="tip-week">点击图片，预览大图</view>
    </view>
</view>
```

* 在 js 文件中

```js
Page({
    previewImage() {
        swan.previewImage({
            current: 'https://b.bdstatic.com/miniapp/image/swan-preview-image-2-zip.png',
            urls: ['https://b.bdstatic.com/miniapp/image/swan-preview-image-2-zip.png','https://b.bdstatic.com/miniapp/image/swan-preview-image-zip.png'], 
            success: res => {
                console.log('previewImage success', res);
            },
            fail: err => {
                console.log('previewImage fail', err);
            }
        });
    }
});
```

**代码示例2 - images属性**

<a href="swanide://fragment/51954f01c233f0ec9b6ae6b1c66312991576346402909" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="container">
    <view class="card-area">
        <view class="middle-image">
            <image src="https://b.bdstatic.com/miniapp/image/swan-preview-image-zip.png" mode="aspectFit" bindtap="previewOriginImage"></image>
        </view>
        <view class="tip-week">点击图片，预览大图, 并可查看原图</view>
    </view>
</view>
```

* 在 js 文件中

```js
Page({
    previewOriginImage() {
        swan.previewImage({
            current: 'https://b.bdstatic.com/miniapp/image/swan-preview-image-zip.png',
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
    }
});
```

**代码示例3 - 多个urls，images属性的使用**

<a href="swanide://fragment/cb85f5f7008a9d446e9ff65fd2fd0df31576346808639" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="container">
    <view class="card-area">
        <view class="middle-image">
            <image src="https://b.bdstatic.com/miniapp/image/swan-preview-image-zip.png" mode="aspectFit" bindtap="previewOriginImage"></image>
        </view>
        <view class="tip-week">点击图片，预览大图, 并可查看原图</view>
    </view>
</view>
```

* 在 js 文件中

```js
Page({
    previewOriginImage() {
        swan.previewImage({
            current: 'https://b.bdstatic.com/miniapp/image/swan-preview-image-zip.png',
            urls: ['https://b.bdstatic.com/miniapp/image/swan-preview-image-zip.png','https://b.bdstatic.com/miniapp/image/swan-preview-image-2-zip.png'], 
            images: [
                {
                    "url": 'https://b.bdstatic.com/miniapp/image/swan-preview-image-zip.png', // 顺序需与urls中一致
                    "origin_url": 'https://b.bdstatic.com/miniapp/image/swan-preview-image-origin.png'
                },{
                    "url": 'https://b.bdstatic.com/miniapp/image/swan-preview-image-2-zip.png', // 顺序需与urls中一致
                    "origin_url": 'https://b.bdstatic.com/miniapp/image/swan-preview-image-2-zip.png'
                }
            ],
            success: res => {
                console.log('previewImage success', res);
            },
            fail: err => {
                console.log('previewImage fail', err);
            }
        });
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


