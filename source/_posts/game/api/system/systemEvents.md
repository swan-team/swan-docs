---
title: 系统事件
layout: gamedoc
topic: system
categoryName: api
---


### swan.onAudioInterruptionBegin()

当播放音频被系统中断（如：电话、闹钟等）时，调用回调函数 `callback`。

```js
swan.onAudioInterruptionBegin(callback)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|callback|function|回调函数|


### swan.offAudioInterruptionBegin()

撤销播放音频中断的回调函数，传入的 `callback` 即为调用 `swan.onAudioInterruptionBegin` 传入的 `callback` 对象。

```js
swan.offAudioInterruptionBegin(callback)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|callback|function|回调函数|


### swan.onAudioInterruptionEnd()

当播放音频从系统中断（如：电话、闹钟等）恢复时，调用回调函数 `callback`。

```js
swan.onAudioInterruptionEnd(callback)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|callback|function|回调函数|


### swan.offAudioInterruptionEnd()

撤销播放音频中断恢复的回调函数，传入的 `callback` 即为调用 `swan.onAudioInterruptionEnd` 传入的 `callback` 对象。

```js
swan.offAudioInterruptionEnd(callback)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|callback|function|回调函数|



### swan.onError()

全局错误监听。

```js
swan.onError(callback)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|callback|function|回调函数|

`callback` 回调参数：

|参数|类型|描述|
|-|-|-|
|res|Object|res 对象|
|res.message|string|错误信息并且包含错误调用栈|

**示例：**

```js
swan.onError(function (res) {
    console.log(res.message);
});
swan.getFileSystemManager().readFileSync();
```


### swan.offError()

```js
swan.offError(callback)
```

撤销全局错误监听，传入的 `callback` 即为调用 `swan.onError` 传入的 `callback` 对象。

**参数值：**

|参数|类型|描述|
|-|-|-|
|callback|function|回调函数|

**示例：**

```js
const handler = function (res) {
    console.log(res.message);
};
swan.onError(handler);
swan.offError(handler);
swan.getFileSystemManager().readFileSync();
```
