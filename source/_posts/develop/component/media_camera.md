---
title: camera 相机
header: develop
nav: component
sidebar: media_camera
---

 

**解释**：系统相机


**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/camera.png"  class="demo-qrcode-image" />

**属性说明**：

|属性名 |类型  |默认值  | 必填 |说明|
|---- | ---- | ---- |---- |---- |
|device-position| String | back | 否 | 前置或后置，值为front, back |
|flash|String| auto | 否 |闪光灯，值为auto, on, off|
|bindstop|EventHandle|  | 否 |摄像头在非正常终止时触发，如退出后台等情况|
|binderror|EventHandle| | 否 |用户不允许使用摄像头时触发|

**device-position 有效值**:

| 值 | 说明 |
| ---- | ---- |
| front | 前置摄像头 |
| back | 后置摄像头 |

**flash 有效值**:

| 值 | 说明 |
| ---- | ---- |
| auto | 自动闪光灯 |
| on | 闪光灯开 |
| off | 闪光灯关 |


**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/camera.gif">
    </div> 
</div>

**代码示例**：

<a href="swanide://fragment/e57c71266aac86d6a0f6253f3c0f8de41565512985352" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<div class="camera">
    <camera device-position="{{device}}" 
            flash="off" 
            bindstop="stop"
            binderror="error" 
            style="width: 100%; height: 3rem;">
    </camera>
    <button type="primary" bind:tap="switchCamera">切换摄像头</button>
    <button type="primary" bind:tap="takePhoto">拍照</button>
    <button type="primary" bind:tap="startRecord">开始录像</button>
    <button type="primary" bind:tap="stopRecord">结束录像</button>
    <view class="preview">预览</view>
    <image s-if="src" class="img" mode="widthFix" src="{{src}}"></image>
    <video s-if="videoSrc" class="video" src="{{videoSrc}}"></video>
</div>

```

* 在 js 文件中

```javascript
Page({
    data: {
        src: '',
        device: 'back',
        videoSrc: ''
    },
    onShow() {
         console.log("目前此组件的录像功能在安卓端不能播放，请在开发者工具中查看完整效果");
    },
    switchCamera() {
        const devices = this.getData('device');
        if (devices === 'back') {
            this.setData({
                device: 'front'
            });
        } else {
            this.setData({
                device: 'back'
            });
        }
    },
    takePhoto() {
        const ctx = swan.createCameraContext();
        ctx.takePhoto({
            quality: 'high',
            success: res => {
                this.setData({
                    src: res.tempImagePath
                });
            }
        });
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
    },
    error(e) {
        console.log(e.detail);
    }
});
```
 

**Bug & Tip**：
* camera 组件是由客户端创建的原生组件，它的层级是最高的，不能通过 z-index 控制层级。可使用 cover-view cover-image 覆盖在上面(在基础库3.0.0之前需要先创建camera，再通过的方式方 `s-if="{ {true} }"`可在camera上创建NA组件）。
* 同一页面只能插入一个 camera 组件。
* 请勿在 scroll-view、swiper、picker-view、movable-view 中使用 camera 组件。
* 相关API：<a href='https://smartprogram.baidu.com/docs/develop/api/media_cameracontext/#createCameraContext/'>createCameraContext</a>。