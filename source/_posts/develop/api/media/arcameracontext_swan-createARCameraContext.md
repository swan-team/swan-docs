---
title: swan.createARCameraContext
header: develop
nav: api
sidebar: arcameracontext_swan-createARCameraContext
---

 

> 基础库 3.15.104 开始支持，低版本需做兼容处理。**目前只针对百度 APP 开放使用。**

**解释**：创建并返回 ar-camera 上下文 `ARCameraContext`对象，ARCameraContext 与页面的 <a href='/develop/component/media_ar-camera/'>ar-camera</a> 组件绑定，一个页面只能有一个 ar-camera，通过它可以操作对应的组件。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/ar-camera.png"  class="demo-qrcode-image" />


**方法参数**：无

**返回值**：ARCameraContext

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
|10003|用户拒绝
|200101|相机权限-用户拒绝|
|200102|相机权限-系统权限拒绝|
|200103|相机被抢占打断|
|200201|录音权限-用户拒绝|
|200202|录音权限-系统权限拒绝|

**代码示例**


<a href="swanide://fragment/9134657812dc84c371a566bc4a28d58e1573735356397" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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