---
title: ARCameraContext.takePhoto
header: develop
nav: api
sidebar: arcameracontext_ARCameraContext-takePhoto
---



 

**解释**：拍照，成功则返回图片。

 
## 方法参数 

Object object

### `object`参数说明  

|参数  |类型 | 必填 | 默认值|说明|
|---- | ---- | ---- |---- |---|
|success| Function |   否  | |接口调用成功的回调函数|
|fail  |  Function  |  否 |  |接口调用失败的回调函数|
|complete |   Function  |  否  | |接口调用结束的回调函数（调用成功、失败都会执行）|

### success 返回参数说明  


|参数名 |类型  |说明|
|---- | ---- | ---- |
|tempImagePath  | String | 图片的临时路径 |

## 示例

<a href="swanide://fragment/e60cfcd18d6831e0dc63c740b747e3061574330923900" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_ARCameraContextTakePhoto.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 


<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/ARCameraContextTakePhoto.gif">
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
<ar-camera ar-key="10298931" ar-type="5" flash="{{flashState}}" class="camera" bindload="loadCameraSuccess" bindmessage="message" binderror="error">
    <cover-view class="cameraState" bindtap="switchToPhoto"> 拍摄 </cover-view>
    <cover-image src="{{photoSrc}}">  </cover-image>
</ar-camera>
```
* 在 js 文件中

```js
Page({
    data: {
        photoSrc: ''
    },
    onShow() {
        const ARCameraContext = swan.createARCameraContext();
        this.ARCameraContext = ARCameraContext
    },
    takePhoto() {
        this.ARCameraContext.takePhoto({
            quality: 'high',
            success: res => {
                this.setData({
                    photoSrc: res.tempImagePath
                });
            },
            fail: res => {
                swan.showToast({
                    title: '请检查设备',
                    icon: 'none'
                });
            }
        });
    }
```
