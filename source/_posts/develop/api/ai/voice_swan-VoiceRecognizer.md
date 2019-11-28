---
title: VoiceRecognizer
header: develop
nav: api
sidebar: voice_swan-VoiceRecognizer
---


**解释**：语音识别

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_VoiceRecognizer.png"  class="demo-qrcode-image" />


**object 参数说明**

|属性名 |类型  |默认值 |必填|说明|
|---- | ---- | ---- |---- |---- |
|mode |String  |  dnn| 否  |听音模式，有效值dnn/touch|
|longSpeech   |Boolean  |   false | 否  |是否开启长语音|
|context |String  |   input|否  |语音识别所用的场景值，有效值见下表格。 |

mode有效值如下

|参数值 |说明|
|---- | ---- |
|dnn| 自动听音,默认值 |
|touch| 手动听音(需要手动调用stop方法才会停止语音识别) |

context有效值如下

|参数值 |说明|
|---- | ---- |
|input| 输入法场景|
|search|搜索场景值|






**代码示例**：

<a href="swanide://fragment/cc2100b123bbb0154c277fe6c8f8fa5b1573728427299" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
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

```

### Bug & Tip

1.  长语音时,`mode`参数不生效，默认为`dnn`(自动听音)。 此模式下会自动检测，不断调用`onRecognize`返回中间识别结果，检测到静音（大概5s）会自动断句，断句后调用`onFnish`返回一句话的识别结果并添加标点符号。在调用`stop`后，才正式结束识别；

2. 自动听音&短语音：开始识别后，8s内没有检测到声音，则结束识别并触发`onError`；在说话后，如5s内未检测到声音，判定为静音，会自动结束识别，返回识别结果。如说话超过60s，触发`onError`。

3. 手动听音&短语音：开始识别后，8s内没有检测到声音，则结束识别并触发`onError`；如说话超过60s，触发`onError`；如时间未超过60s，则可以一直记录语音，直到调用`stop`，在`onFinish`中返回识别结果。