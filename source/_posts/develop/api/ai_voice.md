---
title: 语音识别
header: develop
nav: api
sidebar: ai_voice
---

## swan.ai.getVoiceRecognizer


**解释**：获取全局唯一的语音识别器`voiceRecognizer`。详见[API 实现差异](https://smartprogram.baidu.com/docs/develop/devtools/diff/)。

**方法参数**：无

**返回值**：voiceRecognizer

### voiceRecognizer

**`voiceRecognizer`对象的方法列表**：

|方法 | 参数  |说明|
|---- | ---- | ---- |
|start |  options|  开始|
|stop |  |停止|
|cancel | | 取消|
|onStart | callback| 引擎准备就绪，可以开始说话|
|onRecognize | callback|有识别结果返回|
|onFinish | callback| 识别完成 |
|onError | callback| 识别遇到错误 |

**start(options) 说明**

|属性 |类型  |必填 |默认值 |说明|
|---- | ---- | ---- |---- |---- |
|mode |String  |  否  | dnn|听音模式，有效值dnn/touch|
|longSpeech   |Boolean  |  否  | false | 是否开启长语音|
|context |String  |  否  | input|语音识别所用的场景值，有效值见下表格。 |

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

**onRecognize(callback) 回调结果说明**：

|属性 | 类型 | 说明 |
|---- | ---- | ---- |
|result |String | 小程序语音识别过程中的返回内容 |

**onFinish(callback) 回调结果说明**：

|属性 | 类型 | 说明 |
|---- | ---- | ---- |
|result |String | 小程序语音识别完成后的返回内容 |

**onError(callback) 回调结果说明**：

|属性 | 类型 | 说明 |
|---- | ---- | ---- |
|errCode |String | 错误码 |
|errMsg |String | 错误信息 |

**errCode值说明**：

|errCode|errMsg|
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

**示例**


<a href="swanide://fragment/b0c9408a0e336e47e3c34f167d9703211558355039398" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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