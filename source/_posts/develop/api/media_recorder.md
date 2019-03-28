---
title: 录音管理
header: develop
nav: api
sidebar: media_recorder
---


getRecorderManager
---
**解释：** 获取全局唯一的录音管理器`recorderManager`。

**参数：** 无

**recorderManager 对象的方法列表：**

|方法 | 参数 | 说明 |
|---- | ---- | ---- |
|start | options | 开始录音 |
|pause | | 暂停录音 |
|resume | | 继续录音 |
|stop | | 停止录音 |
|onStart | callback | 录音开始事件 |
|onPause | callback | 录音暂停事件 |
|onStop | callback | 录音停止事件，会回调文件地址。 |
|onError | callback | 录音错误事件, 会回调错误信息 。|

**start(options) 说明：**

|属性 | 类型 | 必填 | 说明 |
|---- | ---- | ---- | ---- |
|duration |Number | 否 | 指定录音的时长，（单位：ms） ，如果传入了合法的 duration ，在到达指定的 duration 后会自动停止录音，最大值 600000（10 分钟）,默认值 60000（1 分钟）。|
|sampleRate |Number |否 | 采样率，有效值 8000/16000/44100 。|
|numberOfChannels |Number |否 | 录音通道数，有效值 1/2。 |
|encodeBitRate |Number |否 | 编码码率，有效值见下表格。 |
|format |String |否 | 音频格式，有效值 aac/pcm。 |

其中，采样率和码率有一定要求，具体有效值如下：

|采样率 | 编码码率 |
|---- | ---- |
|8000 | 16000 ~ 48000|
|16000| 24000 ~ 96000|
|44100| 64000 ~ 320000|

**onStop(callback) 回调结果说明：**

|属性 | 类型 | 说明 |
|---- | ---- | ---- |
|tempFilePath |String | 录音文件的临时路径 |

**onError(callback) 回调结果说明：**

|属性 | 类型 | 说明 |
|---- | ---- | ---- |
|errMsg |String | 错误信息 |

**示例：**
<a href="swanide://fragment/e58b40296c7b21d2b18f1792ffc30ae01540398986" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>


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
<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|201|解析失败，请检查参数是否正确|
|1001|执行失败|
|2001|错误调起时机|
|2002|录音执行错误|
|2003|录音调起action错误，无需调用release|
|2004|用户拒绝|

**iOS**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确 |
|2001|错误的调起时机|
|2002|录音执行错误|
|2004|用户拒绝小程序使用麦克风| -->