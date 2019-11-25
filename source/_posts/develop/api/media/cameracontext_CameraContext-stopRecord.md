---
title: CameraContext.stopRecord
header: develop
nav: api
sidebar: cameracontext_CameraContext-stopRecord
---

 

**解释**：结束录像，成功则返回封面与视频。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_CameraContextRecord.png"  class="demo-qrcode-image" />

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型 | 必填 | 默认值|说明|
|---- | ---- | ---- |---- |---|
|success |Function   | 否  || 接口调用成功的回调函数，res = { tempThumbPath, tempVideoPath }。|
|fail |   Function |   否  | |接口调用失败的回调函数|
|complete   | Function   | 否  || 接口调用结束的回调函数（调用成功、失败都会执行）|

**图片示例**：

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

**代码示例**：
 
<a href="swanide://fragment/d6e4c23348cc8dc4a639b6c5e0670ca61573701710321" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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