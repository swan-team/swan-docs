---
title: VoiceRecognizer.onStart
header: develop
nav: api
sidebar: voice_VoiceRecognizer_onStart
---

**解释**： 引擎准备就绪，可以开始说话

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_VoiceRecognizerOnStart.png"  class="demo-qrcode-image" />

**方法参数**：Function callback


**代码示例一：短语音识别（与长语音使用方式一致） - 自动听音**


<a href="swanide://fragment/8684b30fe9e56affafe11a8da47c9b421573730973671" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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
            mode: 'dnn',
            // longSpeech: true
            longSpeech: false

        };

        voiceRecognizer.start(options);
    }
})

```

**代码示例二：短语音识别 （与长语音使用方式一致）- 自动听音**


<a href="swanide://fragment/10c7cb67d731d71da77b176a205ae3d11573731084892" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>
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

        const voiceRecognizer = swan.ai.getVoiceRecognizer();

        voiceRecognizer.onStart(res => {
            swan.showToast({
                title: '开始识别',
                icon: 'none'
            });
        });

        voiceRecognizer.onFinish(res => {
            console.log('voice onFinish', res.result);
            this.setData('result', res.result);
        });

        const options = {
            mode: 'dnn',
            // longSpeech: true
            longSpeech: false
        };

        voiceRecognizer.start(options);
    }
})

```

**代码示例三：短语音识别 - 手动听音**


<a href="swanide://fragment/10c7cb67d731d71da77b176a205ae3d11573731084892" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>
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
            longSpeech: false
        };

        voiceRecognizer.start(options);
    }
})

```

 