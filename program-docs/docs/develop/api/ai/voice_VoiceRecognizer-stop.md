---
title: VoiceRecognizer.stop
header: develop
nav: api
sidebar: voice_VoiceRecognizer-stop
---

**解释**： 停止
**Web 态说明**：受宿主环境限制，Web 态暂不支持 AI 能力相关接口。调用 VoiceRecognizer 对象上的方法时，Web 态会做 **打开百度 App 对应小程序页面** 的降级处理。


## 方法参数

无

## 示例

<a href="swanide://fragment/ce41dccf650950cc3526c0df6a066e701581342635293" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_VoiceRecognizerStop.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/VoiceRecognizerStop.gif">
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
<button bindtap="voiceRecognizerStop">点击停止识别</button>
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
        }
        else {
            swan.showToast({
                title: '此api目前仅可在百度App上使用',
                icon: 'none'
            });
        }
    },
    voiceRecognizerStop() {
        let host = swan.getSystemInfoSync().host;
        if (host === 'baiduboxapp') {
            this.voiceRecognizer.stop();
            swan.showToast({
                title: '已停止识别'
            });
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
