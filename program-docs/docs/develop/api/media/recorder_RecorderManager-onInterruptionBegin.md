---
title: RecorderManager.onInterruptionBegin
header: develop
nav: api
sidebar: recorder_RecorderManager-onInterruptionBegin
---

>基础库 3.120.1 开始支持，低版本需做兼容处理。



**解释**： 录音因为受到系统占用而被中断开始事件。以下场景会触发此事件：电话响铃、接听电话。此事件触发后，录音会被暂停。pause 事件在此事件后触发。
**Web 态说明**： Web 态环境不支持录音相关功能，该事件不会触发。


## 方法参数

Function callback

## 示例

<a href="swanide://fragment/a495c8fcde49fe7cdb108088854cb7011573652992453" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_RecorderManagerOnPause.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例


<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/RecorderManagerStart.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
</div>

### 代码示例



 在 js 文件中

```js
Page({
    RecorderManagerStart() {
        const recorderManager = swan.getRecorderManager()
        const options = {
            duration: 10000,
            sampleRate: 44100,
            numberOfChannels: 1,
            encodeBitRate: 96000,
            format: 'aac'
        };
        recorderManager.onInterruptionBegin(function(res) {
            console.log('recorder onInterruptionBegin', res)
            swan.showModal({
                title: 'success',
                content: 'recorder onInterruptionBegin'
            })
        });
        recorderManager.start(options);
        this.recorderManager = recorderManager;
    }
});
```
