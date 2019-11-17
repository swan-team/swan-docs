---
title: RecorderManager.onError
header: develop
nav: api
sidebar: recorder_RecorderManager-onError
---



**解释**： 录音错误事件, 会回调错误信息 。

**方法参数**：Function callback

**图片示例**：

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

**代码示例**：

<a href="swanide://fragment/3edb048ed65f02d397a539165711d2ee1574002351482" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

**在 js 文件中**

```javascript
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