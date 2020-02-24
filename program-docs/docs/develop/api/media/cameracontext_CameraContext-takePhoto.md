---
title: CameraContext.takePhoto
header: develop
nav: api
sidebar: cameracontext_CameraContext-takePhoto
---



**解释**：拍照，可指定质量，成功则返回图片。

 
## 方法参数 

Object object

### `object`参数说明  

|参数名 |类型 | 必填 | 默认值|说明|
|---- | ---- | ---- |---- |---|
|quality |String  |否  | normal|成像质量，有效值为high, normal, low。|
|success| Function |   否  | |接口调用成功的回调函数，res = { tempImagePath }。|
|fail  |  Function  |  否 |  |接口调用失败的回调函数|
|complete |   Function  |  否  | |接口调用结束的回调函数（调用成功、失败都会执行）|

## 示例

<a href="swanide://fragment/e0c330e454f8e09a92c2851ea5a56eb61573545400501" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_CameraContextTakePhoto.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 


<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/cameraPhoto.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### 代码示例 
 


* 在 swan 文件中

```html
<div class="camera">
    <camera device-position="{{device}}" flash="off" binderror="error" style="width: 100%; height: 500rpx;"></camera>
    <button type="primary" bind:tap="takePhoto">拍照</button>
    <image class="img" mode="widthFix" src="{{src}}"></image>
</div>

```

* 在 js 文件中

```js
Page({
    data: {
        src: ''
    },
    onShow() {
        const cameraContext = swan.createCameraContext();
        this.cameraContext = cameraContext;
    },
    takePhoto() {
        this.cameraContext.takePhoto({
            quality: 'high',
            success: res => {
                this.setData({
                    src: res.tempImagePath
                });
            }
        });
    }
});
```