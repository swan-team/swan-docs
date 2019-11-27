---
title: swan.createCameraContext
header: develop
nav: api
sidebar: cameracontext_swan-createCameraContext
---





**解释**：创建并返回 camera 上下文 `cameraContext`对象，cameraContext 与页面的 camera 组件绑定，一个页面只能有一个 camera，通过它可以操作对应的组件。使用该 API 需通过[获取用户权限设置](http://smartprogram.baidu.com/docs/develop/api/open/authorize_set/)申请授权后方可对用户发起授权申请，可在[需授权接口列表](http://smartprogram.baidu.com/docs/develop/api/open/authorize_list/)中查看相关错误码信息。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/camera.png"  class="demo-qrcode-image" />


**方法参数**：无

**返回值**：cameraContext

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
<a href="swanide://fragment/21b60b0d38bf33771697da5c7d5149cd1556528875741" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
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

```js
Page({
    data: { },
    onLoad() {
        swan.createCameraContext();
    }
});
```

