---
title: swan.createARCameraContext
header: develop
nav: api
sidebar: arcameracontext_swan-createARCameraContext
# webUrl: https://qft12m.smartapps.cn/subPackages/apiPackage/pages/ar-camera/ar-camera
---

 

> 基础库 3.15.104 开始支持，低版本需做兼容处理。 目前只针对百度 APP 开放使用。 

**解释**：创建并返回 ar-camera 上下文 `ARCameraContext`对象，ARCameraContext 与页面的 <a href='/develop/component/media_ar-camera/'>ar-camera</a> 组件绑定，一个页面只能有一个 ar-camera，通过它可以操作对应的组件。使用该 API 需使用该 API 需通过[获取用户权限设置](https://smartprogram.baidu.com/docs/develop/api/open/authorize_set/)申请授权后方可对用户发起授权申请，可在[需授权接口列表](https://smartprogram.baidu.com/docs/develop/api/open/authorize_list/)中查看相关错误码信息。
**Web 态说明**：Web 态暂不支持 AR 相机功能。createARCameraContext 返回的 ARCameraContext 系列方法，在 Web 态会做 **打开百度 App 对应小程序页面** 的降级处理。

 
## 方法参数

无

### 返回值 

ARCameraContext


## 示例

<a href="swanide://fragment/9134657812dc84c371a566bc4a28d58e1573735356397" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/ar-camera.png" class="demo-qrcode-image" />
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




* 在 swan 文件中

```html
<ar-camera ar-key="10298931" ar-type="5" flash="{{flashState}}" class="camera" bindload="loadCameraSuccess" bindmessage="message" binderror="error">
</ar-camera>
```
> 其它代码过长，建议直接<a href="swanide://fragment/c6b6e92b5ef4bc9276cfbc99fddf3dba1557733966512" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>。




* 在 js 文件中

```js
Page({
    data: { },
    onReady() {
       this.ARCameraContext = swan.createARCameraContext();
    }
})
```

