---
title: VoiceRecognizer.onRecognize
header: develop
nav: api
sidebar: voice_VoiceRecognizer_onRecognize
---

**解释**： 有识别结果返回

**方法参数**：Function callback

**callback 结果说明**：

|属性 | 类型 | 说明 |
|---- | ---- | ---- |
|result |String | 小程序语音识别过程中的返回内容 |

**代码示例**


<a href="swanide://fragment/93c00ae29b0cd0b086a0425ac254853c1573731767284" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="result">{{result}}</view>
<button bindtap="voiceRecognizerStart">点击开始识别语音</button>
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
            // longSpeech: true
            longSpeech: false

        };

        voiceRecognizer.start(options);
    }
})

```