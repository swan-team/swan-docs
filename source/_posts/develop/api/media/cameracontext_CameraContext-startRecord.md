---
title: CameraContext.startRecord
header: develop
nav: api
sidebar: cameracontext_CameraContext-startRecord
---


 

**解释**：开始录像

 
## 方法参数 

Object object

### `object`参数说明  

|参数名 |类型 | 必填 | 默认值|说明|
|---- | ---- | ---- |---- |---|
|success |Function  |  否 |  |接口调用成功的回调函数|
|fail  |  Function |   否  | |接口调用失败的回调函数|
|complete   | Function |   否  || 接口调用结束的回调函数（调用成功、失败都会执行）|

## 示例

<a href="swanide://fragment/398fc8b20a9b3411e7c3a22a6f9876f41573701771835" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_CameraContextRecord.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 
 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/cameraVideo.gif">
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
    <button type="primary" bind:tap="startRecord">开始录像</button>
    <button type="primary" bind:tap="stopRecord">结束录像</button>
    <video s-if="videoSrc" class="video" src="{{videoSrc}}"></video>
</div>
```
* 在 js 文件中

```javascript
Page({
    data: {
        videoSrc: ''
    },
    startRecord() {
        const cameraContext = swan.createCameraContext();
        cameraContext.startRecord({
            success: res => {
                swan.showToast({
                    title: 'startRecord'
                });
            }
        });
    },
    stopRecord() {
        const cameraContext = swan.createCameraContext();
        cameraContext.stopRecord({
            success: res => {
                swan.showModal({
                    title: '提示',
                    content: res.tempVideoPath
                });
                this.setData({
                    videoSrc: res.tempVideoPath
                });
            }
        });
    }
});
```