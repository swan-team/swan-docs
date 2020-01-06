---
title: VoiceRecognizer.start
header: develop
nav: api
sidebar: voice_VoiceRecognizer-start
---

**解释**：  开始

 
## 方法参数

Object object

## 示例

 

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_VoiceRecognizerStart.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/VoiceRecognizerStart.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### 代码示例 1 ：

短语音识别（与长语音使用方式一致） - 自动听音 

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
            // longSpeech: true
            longSpeech: false

        };

        voiceRecognizer.start(options);
    }
})

```

### 代码示例 2 ：

短语音识别 （与长语音使用方式一致）- 自动听音 


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
        swan.showToast({
            title: '开始识别',
            icon: 'none'
        });
        const voiceRecognizer = swan.ai.getVoiceRecognizer();

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

### 代码示例 3 ：

短语音识别 - 手动听音 


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
            mode: 'touch',
            longSpeech: false
        };

        voiceRecognizer.start(options);
    }
})

```