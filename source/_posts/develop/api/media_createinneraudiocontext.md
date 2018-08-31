---
title: 音频组件控制
header: develop
nav: api
sidebar: media_createinneraudiocontext
---



createInnerAudioContext
---
**解释：**创建并返回内部 audio 上下文 `innerAudioContext` 对象。

**参数：**无

**innerAudioContext 对象的属性列表：**

|方法 | 参数 | 说明 | 只读 |
|---- | ---- | ---- | ---- |
|src |String | 音频的数据链接，用于直接播放。| 否 |
|startTime |Number | 开始播放的位置（单位：s），默认 0 | 否 |
|autoplay |Boolean| 是否自动开始播放，默认 false | 否 |
|loop |Boolean |是否循环播放，默认 false | 否 |
|duration |Number |当前音频的长度（单位：s），只有在当前有合法的 src 时返回 | 是 |
|currentTime |Number |当前音频的播放位置（单位：s），只有在当前有合法的 src 时返回，时间不取整，保留小数点后 6 位 | 是 |
|paused |Boolean |当前是是否暂停或停止状态，true 表示暂停或停止，false 表示正在播放 | 是 |
|buffered |Number |音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲。 | 是 |
|volume |Number |音量。范围 0~1。 | 否 |

**innerAudioContext 对象的方法列表：**

|方法 | 参数 | 说明 |
|---- | ---- | ---- |
|play | 无 | 播放 |
|pause | 无 | 暂停 |
|stop | 无 | 停止 |
|seek | position | 跳转到指定位置（单位：s）|
|destroy | 无 | 销毁当前实例 |
|onCanplay | callback | 音频进入可以播放状态，但不保证后面可以流畅播放 |
|onPlay | callback | 音频播放事件 |
|onPause | callback | 音频暂停事件 |
|onStop | callback | 音频停止事件 |
|onEnded | callback | 音频自然播放结束事件 |
|onTimeUpdate | callback | 音频进度更新事件 |
|onError | callback | 音频播放错误事件 |
|onWaiting | callback | 音频加载中事件，当音频因为数据不足，需要停下来加载时会触发 |
|onSeeking | callback | 音频进行 seek 操作事件 |
|onSeeked | callback | 音频完成 seek 操作事件 |
|offCanplay | callback | 取消监听 onCanplay 事件 |
|offPlay | callback | 取消监听 onPlay 事件 |
|offPause | callback | 取消监听 onPause 事件 |
|offStop | callback | 取消监听 onStop 事件 |
|offEnded | callback | 取消监听 onEnded 事件 |
|offTimeUpdate | callback | 取消监听 onTimeUpdate 事件 |
|offError | callback | 取消监听 onError 事件 |
|offWaiting | callback | 取消监听 onWaiting 事件 |
|offSeeking | callback | 取消监听 onSeeking 事件 |
|offSeeked | callback | 取消监听 onSeeked 事件 |

**示例：**

```javascript

const innerAudioContext = swan.createInnerAudioContext();
innerAudioContext.src = 'xxx';
innerAudioContext.autoplay = true;
innerAudioContext.seek({
    position: 10
});
innerAudioContext.onPlay(function (res) {
    console.log('开始播放')
});

```
