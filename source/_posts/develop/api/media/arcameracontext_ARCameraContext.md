---
title: ARCameraContext
header: develop
nav: api
sidebar: media_arcameracontext_ARCameraContext
---

 
**解释**：swan.createARCameraContext 的返回值。
 
**代码示例**：

<a href="swanide://fragment/c6b6e92b5ef4bc9276cfbc99fddf3dba1557733966512" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
Page({
    data: {
        src: ''
    },
    onShow() {
        const cameraContext = swan.createCameraContext();
        this.cameraContext = cameraContext
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


