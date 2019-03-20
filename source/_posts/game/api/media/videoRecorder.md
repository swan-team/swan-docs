---
title: 录屏
layout: gamedoc
topic: media
categoryName: api
---

> 基础库 swan-game.js 1.4.1 版本开始支持。

### swan.getVideoRecorderManager()
获取全局唯一的 VideoRecorderManager。
```
swan.getVideoRecorderManager()
```

### VideoRecorderManager
全局唯一的录屏管理器，通过 [`swan.getVideoRecorderManager()`](./#swan-getVideoRecorderManager) 创建。

### VideoRecorderManager.start()
开始录屏。可以通过 onStart 接口监听录屏开始事件。
```
VideoRecorderManager.start(opts)
```


**参数值：**

|属性 |类型 |默认值 |是否必填 |描述 |
|---|-------|---|-------|-------|
|opts|Object|-|是|调用该方法时，要传入的对象参数|
|opts.duration|number|10 | 否 |录屏的时长，单位 s，最大值 120（2 分钟）|
|opts.microphoneEnabled|boolean|false|否|是否启用麦克风录音|

**示例：**
```javascript
const recorder = swan.getVideoRecorderManager();

recorder.onStart(res => {
  console.log(res.microphoneStatus);
})

recorder.start({
  microphoneEnabled: true,
})

```

### VideoRecorderManager.onStart()
监听录屏开始事件。

```
VideoRecorderManager.onStart(callback)
```

**参数值：**

|属性|类型|是否必填|描述|
|---|-----|-------|-------|
|callback|function|是|监听录屏开始事件的回调函数|

**回调函数参数值：**

| 属性|类型|描述|
|-|-|-|
|res|object|回调函数的参数|
|res.microphoneStatus|number|麦克风状态|

只有在 microphoneEnabled 为 true 时，onStart 回调才会有 microphoneStatus 返回。

res.microphoneStatus 的合法值：

|值|描述|
|---|-------|
|0|麦克风可用|
|1|麦克风被系统禁用|
|2|麦克风被小游戏禁用|


**示例：**

```javascript
const recorder = swan.getVideoRecorderManager();

recorder.onStart(res => {
  // 录屏开始
  console.log(res.microphoneStatus);
})

recorder.start({
  microphoneEnabled: true,
})
```


### VideoRecorderManager.pause()
暂停录屏。在录屏开始后调用。
```
VideoRecorderManager.pause()
```

**示例**

```javascript
const recorder = swan.getVideoRecorderManager();

recorder.onPause(() => {
  // 录屏已暂停;
})

recorder.pause()
```


### VideoRecorderManager.onPause()
监听录屏暂停事件。
```
VideoRecorderManager.onPause(callback)
```

**参数值：**
监听事件的回调函数

|属性|类型|是否必填|描述|
|---|-------|---|-------|-------|
|callback|function|是|监听暂停录屏事件的回调函数|


**示例**

```javascript
const recorder = swan.getVideoRecorderManager();

recorder.onPause(() => {
  // 录屏已暂停;
})

recorder.pause()
```


### VideoRecorderManager.resume()
继续录屏，应在录屏被暂停后调用。
```
VideoRecorderManager.resume()
```


**示例**

```javascript
const recorder = swan.getVideoRecorderManager();

recorder.onPause(() => {
  // 录屏已暂停;
})

recorder.onResume(() => {
  // 录屏已恢复;
})

recorder.pause()

recorder.resume()
```

### VideoRecorderManager.onResume()
监听录屏继续事件。

```
 VideoRecorderManager.onResume(callback)
```

**参数值：**

|属性|类型|是否必填|描述|
|---|-------|---|-------|-------|
|callback|function|是|监听继续录屏事件的回调函数|


**示例**

```javascript
const recorder = swan.getVideoRecorderManager();

recorder.onPause(() => {
  // 录屏已暂停;
})

recorder.onResume(() => {
  // 录屏已恢复;
})

recorder.pause()

recorder.resume()
```



### VideoRecorderManager.stop()
停止录屏，应在录屏开始后调用。可以通过 onStop 接口监听录屏结束事件，获得录屏后的视频地址。
```
VideoRecorderManager.stop()
```

**示例**
```javascript
const recorder = swan.getVideoRecorderManager();

recorder.onStop(res => {
  console.log(res.videoPath);
})

recorder.stop();
```


### VideoRecorderManager.onStop()
监听录屏结束事件，并获得录屏地址。
```
VideoRecorderManager.onStop(callback)
```

**参数值：**

|属性|类型|是否必填|描述|
|---|-------|---|-------|-------|
|callback|function|是|监听录屏结束事件的回调函数|


**回调函数参数值：**

|属性|类型|描述|
|---|-------|---|
|res|Object| 回调函数的参数|
|videoPath|string|录屏文件的临时路径|

示例
```javascript
const recorder = swan.getVideoRecorderManager();

recorder.onStop(res => {
  console.log(res.videoPath);
})

recorder.stop();
```



### VideoRecorderManager.onError()
监听录屏错误事件。
```
VideoRecorderManager.onError(callback)
```

**参数值：**

|属性|类型|是否必填|描述|
|---|-------|---|-------|-------|
|callback|function|是|监听录屏错误事件的回调函数|

**回调函数参数值：**

|属性|类型|描述|
|---|-------|---|
|res| Object| 错误信息|
|res.errMsg|string|错误信息|


**示例**

```javascript
const recorder = swan.getVideoRecorderManager();

recorder.onError(() => {
  // 录屏已暂停;
})
```