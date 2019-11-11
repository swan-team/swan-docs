---
title: RecorderManager.pause
header: develop
nav: api
sidebar:  RecorderManager.pause
---




**解释**： 暂停录音

**方法参数**：无

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
        recorderManager.start(options);
        this.recorderManager = recorderManager;
    },
    RecorderManagerPause() {
        this.recorderManager.pause()
    }
});
```
