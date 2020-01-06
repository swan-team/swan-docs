---
title: VoiceRecognizer.onError
header: develop
nav: api
sidebar: voice_VoiceRecognizer-onError
---

**解释**： 识别遇到错误

 
## 方法参数

Function callback

### callback 结果说明 

|属性 | 类型 | 说明 |
|---- | ---- | ---- |
|errorCode |String | 错误码 |
|errorMsg |String | 错误信息 |

### errorCode值说明 

|errorCode|errorMsg|
|---- | ---- |
|1001|	DNS解析失败|
|1002|	请求超时|
|1003|	网络不稳定|	
|1004|	网络不可用|	
|2001|	录音设备异常|
|2002|	用户未说话|
|2003|	用户说话时间太短|
|2004|	无录音权限|
|2005|	用户拒绝授权录音权限|
|2006|	识别被打断|
|2007|	获取鉴权信息失败|
|2008|	语音鉴权失败|
|2009|	初始化失败|
|3001|	请求参数错误|
|3002|	识别引擎忙|
|3003|	错误的调起时机|
|4001|	识别过程出错|
|4002|	语音过长|
|4003|	没有匹配的识别结果|
|4004|	返回结果异常|
|9000|	未知错误|

## 代码示例

<a href="swanide://fragment/7d1e8fc4330a304c903d2e9321e5e0151573734651295" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_VoiceRecognizerOnError.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/VoiceRecognizerOnError.gif">
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
<view>点击开始，不说话即可触发</view>
```
* 在 js 文件中

```js
Page({
    data: {
        result: ''
    },
    voiceRecognizerStart() {
        const voiceRecognizer = swan.ai.getVoiceRecognizer();
        voiceRecognizer.onError(res => {
            console.log('voice onError', res.result);
            swan.showModal({
                title: 'onError',
                content: JSON.stringify(res)
            })
        });

        const options = {
            mode: 'dnn',
            longSpeech: false
        };

        voiceRecognizer.start(options);
    }
})

```