---
title: 录音管理
header: develop
nav: api
sidebar: media_recorder
---


## swan.getRecorderManager

**解释**： 获取全局唯一的录音管理器`recorderManager`。

**方法参数**： 无

**返回值**：recorderManager

## recorderManager

**解释**：swan.getRecorderManager 的返回值。

**示例**：
<a href="swanide://fragment/9594161131c27e789538f1e4bb99f4b51559049882382" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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


## recorderManager.start 

**解释**： 开始录音

**方法参数**：Object options 

**options 参数说明**：

|参数名 | 类型 | 必填 | 默认值|说明 |
|---- | ---- | ---- | ---|---- |
|duration |Number | 否 |60000| 指定录音的时长，（单位：ms） ，如果传入了合法的 duration ，在到达指定的 duration 后会自动停止录音，最大值 600000（10 分钟）,默认值 60000（1 分钟）。|
|sampleRate |Number |否 | |采样率，有效值 8000/16000/44100 。|
|numberOfChannels |Number |否 | |录音通道数，有效值 1/2。 |
|encodeBitRate |Number |否 | |编码码率，有效值见下表格。 |
|format |String |否 | |音频格式，支持切仅支持 aac/pcm。 |

其中，采样率和码率有一定要求，具体有效值如下：

|采样率 | 编码码率 |
|---- | ---- |
|8000 | 16000 ~ 48000|
|16000| 24000 ~ 96000|
|44100| 64000 ~ 320000|

## recorderManager.pause


**解释**： 暂停录音

**方法参数**：无


## recorderManager.resume

**解释**： 继续录音

**方法参数**：无


## recorderManager.stop 

**解释**： 停止录音

**方法参数**：无

## recorderManager.onStart


**解释**： 录音开始事件

**方法参数**：Fiction callback


## recorderManager.onPause

**解释**： 录音暂停事件

**方法参数**：Fiction callback

## recorderManager.onStop

**解释**： 录音停止事件，会回调文件地址。

**方法参数**：Fiction callback

**callback 回调结果说明**：

|参数名| 类型 | 说明 |
|---- | ---- | ---- |
|tempFilePath |String | 录音文件的临时路径 |

## recorderManager.onError


**解释**： 录音错误事件, 会回调错误信息 。

**方法参数**：Fiction callback


**callback 回调结果说明**：

|属性 | 类型 | 说明 |
|---- | ---- | ---- |
|errMsg |String | 错误信息 |

