---
title: swan.getRecorderManager
header: develop
nav: api
sidebar: swan-getRecorderManager
---



**解释**： 获取全局唯一的录音管理器`recorderManager`。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_getRecorderManager.png"  class="demo-qrcode-image" />

**方法参数**： 无

**返回值**：recorderManager



**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/getRecorderManager.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：

<a href="swanide://fragment/7c14ca3d4e36f07aed3f68185333b6d91569392187260" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 js 文件中

```js
Page({
    onShow() {
        swan.getRecorderManager()
    }
});
```
