---
title: RecorderManager.start 
header: develop
nav: api
sidebar: RecorderManager.start 
---



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