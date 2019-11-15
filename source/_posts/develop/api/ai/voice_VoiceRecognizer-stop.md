---
title: VoiceRecognizer.stop
header: develop
nav: api
sidebar: voice_VoiceRecognizer_stop
---

**解释**： 停止

**方法参数**：无

 **代码示例**


<a href="swanide://fragment/7e4fe85cd2c742caf6eb5a17ef826e421573743143847" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="result">{{result}}</view>
<button type="primary" bindtap="voiceRecognizerStart">点击开始识别语音</button>
<button bindtap="voiceRecognizerStop">点击停止识别</button>
```
* 在 js 文件中

```js
Page({
    data: {
        result: ''
    },
    voiceRecognizerStart() {
        swan.showToast({
            title: '开始识别',
            icon: 'none'
        });
        const voiceRecognizer = swan.ai.getVoiceRecognizer();

        voiceRecognizer.onRecognize(res => {
            console.log('voice recognize', res.result);
            this.setData('result', res.result);
        });
        
        const options = {
            mode: 'dnn',
            // mode: 'touch',
            longSpeech: true
        };

        voiceRecognizer.start(options);
        this.voiceRecognizer = voiceRecognize;
    },
    voiceRecognizerStop() {
        this.voiceRecognizer.stop();
        swan.showToast({
            title: '已停止识别'
        });
    }
})

```