---
title: swan.ai.getVoiceRecognizer
header: develop
nav: api
sidebar: voice_swan-ai-getVoiceRecognizer
---




**解释**：获取全局唯一的语音识别器`voiceRecognizer`。其在工具和真机中的实现有区别，详见[API 实现差异](https://smartprogram.baidu.com/docs/develop/devtools/diff/)。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/getVoiceManager.png"  class="demo-qrcode-image" />


**方法参数**：无

**返回值**：voiceRecognizer

**代码示例**：

<a href="swanide://fragment/6e0d43a789932418eb363dbcd6f43d241573102069062" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
Page({
    onShow() {
        this.voiceManager = swan.ai.getVoiceRecognizer();
    },
    onStart() {
        this.voiceManager.onStart(() => { 
            swan.showToast({
                title: 'start'
            });
        });
    }
    
});
```