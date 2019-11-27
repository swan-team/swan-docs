---
title: VoiceRecognizer.onFinish 
header: develop
nav: api
sidebar: voice_VoiceRecognizer-onFinish
---

**解释**： 识别完成 

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_VoiceRecognizerOnFinish.png"  class="demo-qrcode-image" />

**方法参数**：Function callback

**callback 结果说明**：

|属性 | 类型 | 说明 |
|---- | ---- | ---- |
|result |String | 小程序语音识别完成后的返回内容 |

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/VoiceRecognizerOnFinish.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**

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