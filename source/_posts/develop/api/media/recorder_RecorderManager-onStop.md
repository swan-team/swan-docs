---
title: RecorderManager.onStop
header: develop
nav: api
sidebar: RecorderManager.onStop
---


**解释**： 录音停止事件，会回调文件地址。

**方法参数**：Function callback

**callback 回调结果说明**：

|参数名| 类型 | 说明 |
|---- | ---- | ---- |
|tempFilePath |String | 录音文件的临时路径 |


**图片示例**：

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

**代码示例**：

<a href="swanide://fragment/ee2d08e058696342496cd34fcc302dc61573418403441" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

**在 js 文件中**

```javascript
Page({
    RecorderManagerStart() {
        const recorderManager = swan.getRecorderManager()
        // 可以用背景音频播放返回的录音文件
        // const backgroundAudioManager = swan.getBackgroundAudioManager()
        const options = {
            duration: 10000,
            sampleRate: 44100,
            numberOfChannels: 1,
            encodeBitRate: 96000,
            format: 'aac'
        };
        recorderManager.onStop(function(res) {
            console.log('recorder onStop', res)
            swan.showModal({
                title: 'success',
                content: JSON.stringify(res)
            })
            // backgroundAudioManager.src = res.tempFilePath;
        });
        recorderManager.start(options);
        this.recorderManager = recorderManager;
    },
    RecorderManagerStop() {
        this.recorderManager.stop();
    }
});
```

