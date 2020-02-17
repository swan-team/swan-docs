---
title: VoiceRecognizer.cancel
header: develop
nav: api
sidebar: voice_VoiceRecognizer-cancel
---

**解释**： 取消
 
## 方法参数

无

## 示例

 
<a href="swanide://fragment/9134657812dc84c371a566bc4a28d58e1573735356397" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_VoiceRecognizerCancel.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>


### 图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/VoiceRecognizerCancel.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### 代码示例 



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