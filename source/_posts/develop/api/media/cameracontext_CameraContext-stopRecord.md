---
title: CameraContext.stopRecord
header: develop
nav: api
sidebar: cameracontext_CameraContext-stopRecord
---

 

**解释**：结束录像，成功则返回封面与视频。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型 | 必填 | 默认值|说明|
|---- | ---- | ---- |---- |---|
|success |Function   | 否  || 接口调用成功的回调函数，res = { tempThumbPath, tempVideoPath }。|
|fail |   Function |   否  | |接口调用失败的回调函数|
|complete   | Function   | 否  || 接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：
 
<a href="swanide://fragment/6964b37034ded8170df9dcc2bb15461c1573545722656" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```javascript
Page({
    data: {
        videoSrc: ''
    },
    startRecord() {
        const ctx = swan.createCameraContext();
        ctx.startRecord({
            success: res => {
                swan.showToast({
                    title: 'startRecord'
                });
            }
        });
    },
    stopRecord() {
        const ctx = swan.createCameraContext();
        ctx.stopRecord({
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