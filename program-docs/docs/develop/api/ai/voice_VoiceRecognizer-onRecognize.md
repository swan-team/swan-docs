---
title: VoiceRecognizer.onRecognize
header: develop
nav: api
sidebar: voice_VoiceRecognizer-onRecognize
---

**解释**： 有识别结果返回

 
## 方法参数

Function callback

### callback 结果说明 ：

|属性 | 类型 | 说明 |
|---- | ---- | ---- |
|result |String | 小程序语音识别过程中的返回内容 |

## 示例

<a href="swanide://fragment/d1b51ad6259e1b12cb0d3226998a0e0c1581342519887" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_VoiceRecognizerOnRecognize.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/VoiceRecognizerOnRecognize.gif">
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
        else {
            swan.showToast({
                title: '此api目前仅可在百度App上使用',
                icon: 'none'
            });
        }
    }
})
```