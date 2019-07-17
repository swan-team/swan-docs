---
title: 录屏
layout: gamedoc
topic: media
categoryName: api
priority: 08-03
---

> 基础库 swan-game.js 1.4.1 版本开始支持。

### swan.getVideoRecorderManager()
获取全局唯一的 videoRecorderManager。
```
swan.getVideoRecorderManager()
```

### videoRecorderManager
全局唯一的录屏管理器，通过 [`swan.getVideoRecorderManager()`](./#swan-getVideoRecorderManager) 创建。

### videoRecorderManager.start()
开始录屏。可以通过 onStart 接口监听录屏开始事件。
```
videoRecorderManager.start(opts)
```


**参数值：**

|属性 |类型 |默认值 |是否必填 |描述 |
|---|-------|---|-------|-------|
|opts|Object|-|是|调用该方法时，要传入的对象参数|
|opts.duration|number|10 | 否 |录屏的时长，单位 s，最大值 120（2 分钟）|

**示例：**
```javascript
const recorder = swan.getVideoRecorderManager();

recorder.onStart(res => {
  // 录屏开始
  console.log(res);
})

recorder.start({
  duration: 60,
})

```

### videoRecorderManager.onStart()
监听录屏开始事件。

```
videoRecorderManager.onStart(callback)
```

**参数值：**

|属性|类型|是否必填|描述|
|---|-----|-------|-------|
|callback|function|是|监听录屏开始事件的回调函数|


**示例：**

```javascript
const recorder = swan.getVideoRecorderManager();

recorder.onStart(res => {
  // 录屏开始
  console.log(res);
})

recorder.start({
  duration: 60,
})
```


### videoRecorderManager.pause()
暂停录屏。在录屏开始后调用。
```
videoRecorderManager.pause()
```

**示例**

```javascript
const recorder = swan.getVideoRecorderManager();

recorder.onPause(() => {
  // 录屏已暂停;
})

recorder.pause()
```


### videoRecorderManager.onPause()
监听录屏暂停事件。
```
videoRecorderManager.onPause(callback)
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


### videoRecorderManager.resume()
继续录屏，应在录屏被暂停后调用。
```
videoRecorderManager.resume()
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

### videoRecorderManager.onResume()
监听录屏继续事件。

```
 videoRecorderManager.onResume(callback)
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



### videoRecorderManager.stop()
停止录屏，应在录屏开始后调用。可以通过 onStop 接口监听录屏结束事件，获得录屏后的视频地址。
```
videoRecorderManager.stop()
```

**示例**
```javascript
const recorder = swan.getVideoRecorderManager();

recorder.onStop(res => {
  console.log(res.videoPath);
})

recorder.stop();
```


### videoRecorderManager.onStop()
监听录屏结束事件，并获得录屏地址。
```
videoRecorderManager.onStop(callback)
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



### videoRecorderManager.onError()
监听录屏错误事件。
```
videoRecorderManager.onError(callback)
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