---
title: VoiceRecognizer
header: develop
nav: api
sidebar: voice_swan-VoiceRecognizer
---


**解释**：语音识别
**Web 态说明**：受宿主环境限制，Web 态暂不支持 AI 能力相关接口。调用该对象上的方法时，Web 态会做 **打开百度 App 对应小程序页面** 的降级处理。


## 方法参数

Object object


### object 参数说明

|属性名 |类型  |默认值 |必填|说明|
|---- | ---- | ---- |---- |---- |
|mode |String  |  dnn| 否  |听音模式，有效值dnn/touch|
|longSpeech   |Boolean  |   false | 否  |是否开启长语音|
|context |String  |   input|否  |语音识别所用的场景值，有效值见下表格。 |

### mode有效值如下

|参数值 |说明|
|---- | ---- |
|dnn| 自动听音,默认值 |
|touch| 手动听音(需要手动调用stop方法才会停止语音识别) |

### context有效值如下

|参数值 |说明|
|---- | ---- |
|input| 输入法场景|
|search|搜索场景值|

## 示例


<a href="swanide://fragment/d17a7dd720a33f268064ab9abd665b321581337654130" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_VoiceRecognizer.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/getVoiceRecognizer2.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/getVoiceRecognizer3.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/getVoiceRecognizer.gif">
    </div>
</div>

### 代码示例


:::codeTab
```js
// AI系列的api有宿主使用限制,只可在百度App中使用,建议使用时加一层判断防止代码报未知错误
let host = swan.getSystemInfoSync().host;
if (host === 'baiduboxapp') {
    const voiceRecognizer = swan.ai.getVoiceRecognizer();
    voiceRecognizer.onStart(() => {
        console.log('voice start');
    });
    voiceRecognizer.onRecognize(res => {
        console.log('voice recognize', res);
    });
    voiceRecognizer.onFinish(res => {
        console.log('voice end', res);
    });
    voiceRecognizer.onError(err => {
        console.log('voice error', err);
    });
    const options = {
        mode: 'dnn',
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
```
:::

## Bug & Tip

*  长语音时,`mode`参数不生效，默认为`dnn`(自动听音)。 此模式下会自动检测，不断调用`onRecognize`返回中间识别结果，检测到静音（大概5s）会自动断句，断句后调用`onFnish`返回一句话的识别结果并添加标点符号。在调用`stop`后，才正式结束识别；

* 自动听音&短语音：开始识别后，8s内没有检测到声音，则结束识别并触发`onError`；在说话后，如5s内未检测到声音，判定为静音，会自动结束识别，返回识别结果。如说话超过60s，触发`onError`。

* 手动听音&短语音：开始识别后，8s内没有检测到声音，则结束识别并触发`onError`；如说话超过60s，触发`onError`；如时间未超过60s，则可以一直记录语音，直到调用`stop`，在`onFinish`中返回识别结果。