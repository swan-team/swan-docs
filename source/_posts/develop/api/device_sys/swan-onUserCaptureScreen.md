---
title: swan.onUserCaptureScreen
header: develop
nav: api
sidebar: swan-onUserCaptureScreen
---


 

> 在工具和真机中的实现有区别，详见[API 实现差异](https://smartapp.baidu.com/docs/develop/devtools/diff/)

**解释**：监听用户主动截屏事件，用户使用系统截屏按键截屏时触发此事件。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/onUserCaptureScreen.png"  class="demo-qrcode-image" />


**方法参数**：Function callback

**`callback`参数说明**：无

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/onUserCaptureScreen.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：

<a href="swanide://fragment/7698c886c8f28bb55b7b2f0e07c266931569483700129" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    onLoad() {
        swan.onUserCaptureScreen(function (res) {
            console.log('onUserCaptureScreen', res);
        });
    }
});
```
