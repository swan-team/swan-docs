---
title: RecorderManager.onPause
header: develop
nav: api
sidebar: RecorderManager.onPause
---




**解释**： 监听录音暂停事件

**方法参数**：Function callback

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
        const options = {
            duration: 10000,
            sampleRate: 44100,
            numberOfChannels: 1,
            encodeBitRate: 96000,
            format: 'aac'
        };
        recorderManager.onPause(function(res) {
            console.log('recorder onPause', res)
            swan.showModal({
                title: 'recorder onPause',
                content: JSON.stringify(res)
            })
        });
        recorderManager.start(options);
        this.recorderManager = recorderManager;
    },
    RecorderManagerPause() {
        this.recorderManager.pause()
    }
});
```

