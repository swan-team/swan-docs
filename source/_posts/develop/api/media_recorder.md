---
title: 录音管理
header: develop
nav: api
sidebar: media_recorder
---


## swan.getRecorderManager

**解释**： 获取全局唯一的录音管理器`recorderManager`。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/getRecorderManager.png"  class="demo-qrcode-image" />

**方法参数**： 无

**返回值**：recorderManager

## RecorderManager

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


## RecorderManager.start 

**解释**： 开始录音

**方法参数**：Object options 

**options 参数说明**：

|参数名 | 类型 | 必填 | 默认值|说明 |
|---- | ---- | ---- | ---|---- |
|duration |Number | 否 |60000| 指定录音的时长（单位：ms），如果传入了合法的 duration，在到达指定的 duration 后会自动停止录音，最大值 600000（10 分钟），默认值 60000（1 分钟）。|
|sampleRate |Number |否 | |采样率，有效值 8000/16000/44100 。|
|numberOfChannels |Number |否 | |录音通道数，有效值 1/2。 |
|encodeBitRate |Number |否 | |编码码率，有效值见下表格。 |
|format |String |否 | |音频格式，支持切仅支持 aac/pcm。 |
|audioSource |string  |  否 | auto|  指定录音的音频输入源，可通过 [swan.getAvailableAudioSources](#swan-getAvailableAudioSources)() 获取当前可用的音频源; 基础库3.80.2开始支持|

其中，采样率和码率有一定要求，具体有效值如下：

|采样率 | 编码码率 |
|---- | ---- |
|8000 | 16000 ~ 48000|
|16000| 24000 ~ 96000|
|44100| 64000 ~ 320000|

## RecorderManager.pause


**解释**： 暂停录音

**方法参数**：无


## RecorderManager.resume

**解释**： 继续录音

**方法参数**：无


## RecorderManager.stop 

**解释**： 停止录音

**方法参数**：无

## RecorderManager.onStart


**解释**： 录音开始事件

**方法参数**：Function callback


## RecorderManager.onPause

**解释**： 监听录音暂停事件

**方法参数**：Function callback

## RecorderManager.onStop

**解释**： 录音停止事件，会回调文件地址。

**方法参数**：Function callback

**callback 回调结果说明**：

|参数名| 类型 | 说明 |
|---- | ---- | ---- |
|tempFilePath |String | 录音文件的临时路径 |

## RecorderManager.onError


**解释**： 录音错误事件, 会回调错误信息 。

**方法参数**：Function callback


**callback 回调结果说明**：

|属性 | 类型 | 说明 |
|---- | ---- | ---- |
|errMsg |String | 错误信息 |
|errCode|Number|错误码信息|

## swan.getAvailableAudioSources
> 基础库3.80.2开始支持，低版本需做兼容处理

**解释**：获取当前支持的音频输入源

**方法参数**：Object data
**`data` 参数说明**：

|参数名 |类型  |是否必填  |默认值|说明|
|---- | ---- | ---- |--|---- |
|success |Function  |  否 |  接口调用成功的回调|
|fail   | Function |   否  | 接口调用失败的回调函数|
|complete  |  Function |   否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**data.success回调函数**
**方法参数**：Object res

|参数名 |类型  |说明|
|---- | ---- |---- |
|audioSources |Array| 支持的音频输入源列表，可在 RecorderManager.start() 接口中使用 |

**res.audioSources合法值**

|返回值|说明  |
|---- | ---- |
|auto |自动设置，默认使用手机麦克风，插上耳麦后自动切换使用耳机麦克风，所有平台适用|
|buildInMic |手机麦克风，仅限 iOS|
|headsetMic |耳机麦克风，仅限 iOS|
|mic |麦克风（没插耳麦时是手机麦克风，插耳麦时是耳机麦克风），仅限 Android|
|camcorder |同 mic，适用于录制音视频内容，仅限 Android|
|voice_communication |同 mic，适用于实时沟通，仅限 Android|
|voice_recognition |同 mic，适用于语音识别，仅限 Android|



**示例**：
<a href="swanide://fragment/bea70d0226e937e1e1ac613ef5a6ec1b1567940572468" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 js 文件中

```js
Page({
    getAvailableAudioSources() {
        swan.getAvailableAudioSources({
            success: function (res) {
	            console.log('当前支持的音频输入源:', res.audioSources);
		    },
		    fail: function (err) {
		        console.log('错误码：' + err.errCode);
		        console.log('错误信息：' + err.errMsg);
		    }
		});
    }
});
```




