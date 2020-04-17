---
title: VoiceRecognizer.onStart
header: develop
nav: api
sidebar: voice_VoiceRecognizer-onStart
---

**解释**： 引擎准备就绪，可以开始说话

 
## 方法参数

Function callback

## 示例

 

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_VoiceRecognizerOnStart.png" class="demo-qrcode-image" />
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

<a href="swanide://fragment/4ad4103de74334a6c85a71ede03682111581343043934" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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
        // AI系列的api有宿主使用限制,只可在百度App中使用,建议使用时加一层判断防止代码报未知错误
        let host = swan.getSystemInfoSync().host;
        if (host === 'baiduboxapp') {
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
        else {
            swan.showToast({
                title: '此api目前仅可在百度App上使用',
                icon: 'none'
            });
        }
    }
})
```

### 代码示例 2 ：

短语音识别 （与长语音使用方式一致）- 自动听音 


<a href="swanide://fragment/680bf5c03ed9bddca193a9c20e0abb7a1581343126675" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>
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
        // AI系列的api有宿主使用限制,只可在百度App中使用,建议使用时加一层判断防止代码报未知错误
        let host = swan.getSystemInfoSync().host;
        if (host === 'baiduboxapp') {
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
        else {
            swan.showToast({
                title: '此api目前仅可在百度App上使用',
                icon: 'none'
            });
        }
    }
})
```


### 代码示例 3 ：

短语音识别 - 手动听音 


<a href="swanide://fragment/a52601c81505558b63527a250a6a41461581343209551" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>
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
        // AI系列的api有宿主使用限制,只可在百度App中使用,建议使用时加一层判断防止代码报未知错误
        let host = swan.getSystemInfoSync().host;
        if (host === 'baiduboxapp') {
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
        else {
            swan.showToast({
                title: '此api目前仅可在百度App上使用',
                icon: 'none'
            });
        }
    }
})
```

 