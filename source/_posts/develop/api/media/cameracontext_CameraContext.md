---
title: CameraContext
header: develop
nav: api
sidebar: cameracontext_CameraContext
---





**解释**：swan.createCameraContext 的返回值。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/camera.png"  class="demo-qrcode-image" />

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/createCamera.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>


**代码示例**：
 
<a href="swanide://fragment/6087c1da593efa7eece7cc9f4b4e0a3e1573542045061" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```javascript
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
    },
    startRecord() {
        this.cameraContext.startRecord({
            success: res => {
                swan.showToast({
                    title: 'startRecord'
                });
            }
        });
    },
    stopRecord() {
        this.cameraContext.stopRecord({
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



