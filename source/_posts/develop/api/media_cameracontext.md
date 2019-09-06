---
title: 相机组件控制
header: develop
nav: api
sidebar: media_cameracontext
---



## swan.createCameraContext

**解释**：创建并返回 camera 上下文 `cameraContext`对象，cameraContext 与页面的 camera 组件绑定，一个页面只能有一个 camera，通过它可以操作对应的组件。

**方法参数**：无

**返回值**：cameraContext

## CameraContext

**解释**：swan.createCameraContext 的返回值。

**示例**：
 
<a href="swanide://fragment/21b60b0d38bf33771697da5c7d5149cd1556528875741" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<div class="camera">
    <camera device-position="{{device}}" flash="off" binderror="error" style="width: 100%; height: 500rpx;"></camera>
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

* 在 css 文件中

```css
.camera {
    width: 100%;
    padding: .16rem;
    font-size: .16rem;
}
.preview {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
}
button {
    margin-top: .16rem;
}
.img,
video {
    width: 100%;
    margin-top: 50rpx;
}
```
**图示**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="../../../img/component/camera.jpeg">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

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

## CameraContext.takePhoto

**解释**：拍照，可指定质量，成功则返回图片。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型 | 必填 | 默认值|说明|
|---- | ---- | ---- |---- |---|
|quality |String  |否  | normal|成像质量，值为high, normal, low。|
|success| Function |   否  | |接口调用成功的回调函数 ，res = { tempImagePath }。|
|fail  |  Function  |  否 |  |接口调用失败的回调函数|
|complete |   Function  |  否  | |接口调用结束的回调函数（调用成功、失败都会执行）|

## CameraContext.startRecord

**解释**：开始录像

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型 | 必填 | 默认值|说明|
|---- | ---- | ---- |---- |---|
|success |Function  |  否 |  |接口调用成功的回调函数|
|fail  |  Function |   否  | |接口调用失败的回调函数|
|complete   | Function |   否  || 接口调用结束的回调函数（调用成功、失败都会执行）|

## CameraContext.stopRecord

**解释**：结束录像，成功则返回封面与视频。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型 | 必填 | 默认值|说明|
|---- | ---- | ---- |---- |---|
|success |Function   | 否  || 接口调用成功的回调函数 ，res = { tempThumbPath, tempVideoPath }。|
|fail |   Function |   否  | |接口调用失败的回调函数|
|complete   | Function   | 否  || 接口调用结束的回调函数（调用成功、失败都会执行）|

