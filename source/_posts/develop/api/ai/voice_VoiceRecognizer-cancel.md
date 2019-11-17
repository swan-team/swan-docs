---
title: VoiceRecognizer.cancel
header: develop
nav: api
sidebar: voice_VoiceRecognizer_cancel
---

**解释**： 取消

**方法参数**：无

**代码示例**


<a href="swanide://fragment/9134657812dc84c371a566bc4a28d58e1573735356397" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>
* 在 swan 文件中

```html
<view class="result">{{result}}</view>
<button type="primary" bindtap="voiceRecognizerStart">点击开始识别语音</button>
<button bindtap="voiceRecognizerCancel">点击取消识别</button>
```
* 在 js 文件中

```js
Page({
    data: {
        result: ''
    },
    voiceRecognizerStart() {
        const voiceRecognizer = swan.ai.getVoiceRecognizer();
        voiceRecognizer.onStart(res => {
            swan.showToast({
                title: '开始识别',
                icon: 'none'
            });
        });

        voiceRecognizer.onRecognize(res => {
            console.log('voice recognize', res.result);
            this.setData('result', res.result);
        });

        const options = {
            mode: 'touch',
            longSpeech: true
        };

        voiceRecognizer.start(options);
        this.voiceRecognizer = voiceRecognizer;
    },
    voiceRecognizerCancel() {
        this.voiceRecognizer.cancel()
        this.setData('result', '');
    }
})
```