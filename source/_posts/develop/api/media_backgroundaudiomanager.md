---
title: 背景音频管理播放
header: develop
nav: api
sidebar: media_backgroundaudiomanager
---


getBackgroundAudioManager
---
**解释：**获取全局唯一的背景音频管理器 `backgroundAudioManager`。

**参数：**无

**backgroundAudioManager 对象的属性列表：**

|属性 | 类型 |  只读 |说明 |
|---- | ---- | ---- | ---- |
|src |String |  否 |音频的数据链接，用于直接播放。|
|startTime |Number | 否 |开始播放的位置（单位：s），默认 0 。|
|duration |Number |是 |当前音频的长度（单位：s），只有在当前有合法的 src 时返回。 |
|currentTime |Number | 是 |当前音频的播放位置（单位：s），只有在当前有合法的 src 时返回，时间不取整，保留小数点后 6 位。 |
|paused |Boolean |是 |当前是否暂停或停止状态，true 表示暂停或停止，false 表示正在播放。 |
|title |String |否 |音频标题，用于做原生音频播放器音频标题。原生音频播放器中的分享功能，分享出去的卡片标题，也将使用该值。 |
|epname |String |否 |专辑名，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值。 |
|singer |String |否 |歌手名，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值。 |
|coverImgUrl |String |否 |封面图url，用于做原生音频播放器背景图。原生音频播放器中的分享功能，分享出去的卡片配图及背景也将使用该图。 |

**backgroundAudioManager 对象的方法列表：**

|方法 | 参数 | 说明 |
|---- | ---- | ---- |
|play | 无 | 播放 |
|pause | 无 | 暂停 |
|stop | 无 | 停止 |
|seek | position | 跳转到指定位置（单位：s） |
|onCanplay | callback | 音频进入可以播放状态，但不保证后面可以流畅播放 。|
|onPlay | callback | 音频播放事件 |
|onPause | callback | 音频暂停事件 |
|onStop | callback | 音频停止事件 |
|onEnded | callback | 音频自然播放结束事件 |
|onTimeUpdate | callback | 音频进度更新事件 |
|onError | callback | 音频播放错误事件 |
|onWaiting | callback | 音频加载中事件，当音频因为数据不足，需要停下来加载时会触发 。|
<!-- |onPrev | callback | 用户在系统音乐播放面板点击上一曲事件（iOS only）。 |
|onNext | callback | 用户在系统音乐播放面板点击下一曲事件（iOS only）。| -->
**示例：**

```javascript

const backgroundAudioManager = swan.getBackgroundAudioManager();

backgroundAudioManager.title = '此时此刻';
backgroundAudioManager.epname = '此时此刻';
backgroundAudioManager.singer = '许巍';
backgroundAudioManager.coverImgUrl = 'xxx';
backgroundAudioManager.src = 'xxx';

```

#### 错误码

**Andriod**

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法 |

**iOS**

|错误码|说明|
|--|--|
|202 |解析失败，请检查参数是否正确|
|204|当前正在播放来源于其他小程序的音频，无权控制|
|1005|播放被打断|
|1006|加载音频失败|
|1007|seek失败，播放器尚未缓冲|