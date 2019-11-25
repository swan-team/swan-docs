---
title: swan.onDeviceMotionChange
header: develop
nav: api
sidebar: swan-onDeviceMotionChange
---


 

> 基础库 3.30.2 开始支持，低版本需做兼容处理。在工具和真机中的实现有区别，详见[API 实现差异](https://smartapp.baidu.com/docs/develop/devtools/diff/)

**解释**：监听设备方向变化事件。频率根据 swan.startDeviceMotionListening() 的 interval 参数。可以使用 swan.stopDeviceMotionListening() 停止监听。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_deviceMotion.png"  class="demo-qrcode-image" />

**方法参数**：Function callback

**`callback`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|alpha |Number |是| |当手机坐标 X/Y 和 地球 X/Y 重合时，绕着 Z 轴转动的夹角为 alpha，范围值为 [0, 2*PI)。逆时针转动为正。|
|beta |Number |是| |当手机坐标 Y/Z 和地球 Y/Z 重合时，绕着 X 轴转动的夹角为 beta。范围值为 [-1*PI, PI) 。顶部朝着地球表面转动为正。也有可能朝着用户为正。|
|gamma |Number |是| |当手机 X/Z 和地球 X/Z 重合时，绕着 Y 轴转动的夹角为 gamma。范围值为 [-1*PI/2, PI/2)。右边朝着地球表面转动为正。|

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/onDeviceMotionChange.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：

<a href="swanide://fragment/23ea056d902c300fbb5fa59b7dcd2ef31569483021022" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 js 文件中

```js
Page({
    onLoad() {
        swan.onDeviceMotionChange(function (res) {
            console.log('请在真机中预览效果');
            console.log('onDeviceMotionChange', res);
        });
    }
});
```

