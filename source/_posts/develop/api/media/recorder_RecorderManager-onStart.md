---
title: RecorderManager.onStart
header: develop
nav: api
sidebar: RecorderManager.onStart
---





**解释**： 录音开始事件

**方法参数**：Function callback

**示例**：
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
