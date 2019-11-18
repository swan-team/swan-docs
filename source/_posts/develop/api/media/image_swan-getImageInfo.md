---
title: swan.getImageInfo
header: develop
nav: api
sidebar: image_swan-getImageInfo
---

  

**解释**：获取图片信息

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_getImageInfo.png"  class="demo-qrcode-image" />

**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|src |String | 是  | | 图片的路径，可以是相对路径、临时文件路径或存储文件路径、网络图片。|
|success| Function  |  否  | | 接口调用成功的回调函数|
|fail  |  Function  |  否  | | 接口调用失败的回调函数|
|complete |   Function |   否  | | 接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明**：

|参数  |类型 | 说明|
|---- | ---- | ---- |
|width |  Number | 图片宽度（单位：px）|
|height | Number | 图片高度（单位：px）|
|path  |  String | 返回图片的本地路径|
|orientation|String|返回图片的方向：<p>**·** up:默认不变；<p>**·**down：180度旋转；<p>**·**left：逆时针90度旋转；<p>**·**right：顺时针90度旋转；<p>**·** up-mirrored：镜像翻转；<p>**·** down-mirrored：镜像180旋转；<p>**·** left-mirrored：逆时针90度镜像旋转；<p>**·** right-mirrored：顺时针90度镜像旋转。|
|type|String|返回图片的格式 |


**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/getImageInfo.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：

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


