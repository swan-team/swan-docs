---
title: swan.stopDeviceMotionListening
header: develop
nav: api
sidebar: swan-stopDeviceMotionListening
---

 

> 基础库 3.30.2 开始支持，低版本需做兼容处理。  

**解释**：停止监听设备方向的变化。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_deviceMotion.png"  class="demo-qrcode-image" />

**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success |Function  |  否 | |  接口调用成功的回调函数|
|fail  |  Function |   否 | |  接口调用失败的回调函数|
|complete |   Function |   否  | |接口调用结束的回调函数（调用成功、失败都会执行）|

**图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/stopDeviceMotionListening.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**

<a href="swanide://fragment/23ea056d902c300fbb5fa59b7dcd2ef31569483021022" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 js 文件中

```js
Page({
    onLoad() {
        swan.startDeviceMotionListening({
            interval: 'ui'
        });
    },
    stopDeviceMotionListening() {
        swan.stopDeviceMotionListening({
            success: res => {
                console.log('stopDeviceMotionListening success', res);
            },
            fail: err => {
                console.log('stopDeviceMotionListening fail', err);
            }
        });
    }
});
```