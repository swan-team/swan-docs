---
title: CameraContext
header: develop
nav: api
sidebar: cameracontext_CameraContext
---





**解释**：swan.createCameraContext 的返回值。

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

#### 错误码

* Andriod

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法|
|1001|执行失败|
|200101|相机权限-用户拒绝|
|200102|相机权限-系统权限拒绝|
|200201|录音权限-用户拒绝|
|200201|录音权限-系统权限拒绝|

* iOS

|错误码|说明|
|--|--|
|202  |解析失败，请检查参数是否正确|
|10002|网络请求失败|
|200101|相机权限-用户拒绝限|
|200102|相机权限-系统权限拒绝|
|200201|录音权限-用户拒绝|
|200202|录音权限-系统权限拒绝|

