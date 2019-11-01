---
title: RecorderManager
header: develop
nav: api
sidebar: RecorderManager
---




**解释**：swan.getRecorderManager 的返回值。

**示例**：
<a href="swanide://fragment/7c14ca3d4e36f07aed3f68185333b6d91569392187260" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

**在 js 文件中**

```javascript
const recorderManager = swan.getRecorderManager()

recorderManager.onStart(function() {
    // 开始录音事件
    console.log('recorder start')
});
recorderManager.onPause(function() {
    // 暂停录音事件
    console.log('recorder pause')
});
recorderManager.onStop(function(res) {
    // 停止录音事件
    console.log('recorder stop', res)
    const { tempFilePath } = res
});

const options = {
    duration: 10000,
    sampleRate: 44100,
    numberOfChannels: 1,
    encodeBitRate: 96000,
    format: 'aac'
};

recorderManager.start(options);

```
#### 错误码

* Andriod

|错误码|说明|
|--|--|
|201|解析失败，请检查参数是否正确|
|1001|执行失败|
|2001|错误调起时机|
|2002|录音执行错误|
|2003|录音调起action错误，无需调用release|
|2004|用户拒绝|

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确  |
|2001|错误的调起时机|
|2002|录音执行错误|
|2004|用户拒绝小程序使用麦克风|
