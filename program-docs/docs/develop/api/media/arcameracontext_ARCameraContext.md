---
title: ARCameraContext
header: develop
nav: api
sidebar: arcameracontext_ARCameraContext
---

 
**解释**：swan.createARCameraContext 的返回值。
**Web 态说明**：Web 态暂不支持 AR 相机功能。调用 ARCameraContext 相关方法，在 Web 态会做 **打开百度 App 对应小程序页面** 的降级处理。

 
## 示例

<a href="swanide://fragment/7252adaa401a613c9f359713a920d48d1574494178977" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_ARCameraContext.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 


<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/ar-camera.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### 代码示例 



```js
Page({
    data: {
        src: ''
    },
    onShow() {
        const cameraContext = swan.createCameraContext();
        this.cameraContext = cameraContext
        swan.showModal({
            title: '这是ARCameraContext创建的实例对象',
            content: JSON.stringify(cameraContext)
        })
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


