---
title: RecorderManager.onStart
header: develop
nav: api
sidebar: recorder_RecorderManager-onStart
---





**解释**： 录音开始事件

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_RecorderManagerOnStart.png"  class="demo-qrcode-image" /> 


**方法参数**：Function callback

**图片示例**

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

**代码示例**

<a href="swanide://fragment/a495c8fcde49fe7cdb108088854cb7011573652992453" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

**在 js 文件中**

```javascript
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
        recorderManager.onStart(function(res) {
            console.log('recorder onStart', res)
            swan.showModal({
                title: 'success',
                content: 'recorder onStart'
            })
        });
        recorderManager.start(options);
        this.recorderManager = recorderManager;
    }
});
```
