---
title: RecorderManager.onError
header: develop
nav: api
sidebar: recorder_RecorderManager-onError
---



**解释**： 录音错误事件, 会回调错误信息。
**Web 态说明**： Web 态环境不支持录音相关功能，该事件不会触发。


## 方法参数

Function callback


## 示例

<a href="swanide://fragment/3edb048ed65f02d397a539165711d2ee1574002351482" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_RecorderManagerOnError.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例


<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/RonError.png">
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
    onShow() {
        const recorderManager = swan.getRecorderManager();
        recorderManager.onError(function(e) {
            swan.showModal({
                title: 'onError success',
                content: JSON.stringify(e)
            });
        });
        const options = {
            duration: 10000,
            sampleRate: 44100,
            numberOfChannels: 1,
            encodeBitRate: 96000,
            format: 'aac'
        };
        recorderManager.start(options);
        this.recorderManager = recorderManager;
    }
});
```
