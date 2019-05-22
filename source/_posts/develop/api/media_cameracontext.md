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

## cameraContext

**`cameraContext`对象的方法列表**：

|方法 | 参数  |说明|
|---- | ---- | ---- |
|takePhoto |  Object|  拍照，可指定质量，成功则返回图片。|
|startRecord |Object  |开始录像|
|stopRecord | Object | 结束录像，成功则返回封面与视频。|


**takePhoto 的 Object 参数列表**：

|参数  |类型 | 必填 | 说明|
|---- | ---- | ---- |---- |
|quality |String  |否  | 成像质量，值为high, normal, low，默认normal。|
|success| Function |   否  | 接口调用成功的回调函数 ，res = { tempImagePath }。|
|fail  |  Function  |  否 |  接口调用失败的回调函数|
|complete |   Function  |  否  | 接口调用结束的回调函数（调用成功、失败都会执行）|


**startRecord 的 Object 参数列表**：

|参数 | 类型 | 必填 | 说明|
|---- | ---- | ---- |---- |
|success |Function  |  否 |  接口调用成功的回调函数|
|fail  |  Function |   否  | 接口调用失败的回调函数|
|complete   | Function |   否  | 接口调用结束的回调函数（调用成功、失败都会执行）|


**stopRecord 的 Object 参数列表**：

|参数 | 类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success |Function   | 否  | 接口调用成功的回调函数 ，res = { tempThumbPath, tempVideoPath }。|
|fail |   Function |   否  | 接口调用失败的回调函数|
|complete   | Function   | 否  | 接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：
 
<a href="swanide://fragment/21b60b0d38bf33771697da5c7d5149cd1556528875741" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

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
