---
title: 音频组件控制
header: develop
nav: api
sidebar: media_createinneraudiocontext
---



## createInnerAudioContext

**解释：** 创建并返回内部 audio 上下文 `innerAudioContext` 对象。

**参数：** 无

**innerAudioContext 对象的属性列表：**

|方法 | 参数 | 只读 |说明 |
|---- | ---- | ---- | ---- |
|src |String | 否 |音频的数据链接，用于直接播放，仅支持绝对路径。|
|startTime |Number | 否 | 开始播放的位置（单位：s），默认 0 。|
|autoplay |Boolean| 否 |是否自动开始播放，默认 false 。|
|loop |Boolean |否 |是否循环播放，默认 false。 |
|obeyMuteSwitch |Boolean |否 |是否遵循系统静音开关，默认 true，当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。|
|duration |Number |是 |当前音频的长度（单位：s），只有在当前有合法的 src 时返回 。|
|currentTime |Number |是 |当前音频的播放位置（单位：s），只有在当前有合法的 src 时返回，时间不取整，保留小数点后 6 位 。|
|paused |Boolean |是 |当前状态:true 表示暂停或停止，false 表示正在播放。 |
|volume |Number |否 |音量，范围 0~1。 |

**innerAudioContext 对象的方法列表：**

|方法 | 参数 | 说明 |
|---- | ---- | ---- |
|play | 无 | 播放 |
|pause | 无 | 暂停 |
|stop | 无 | 停止 |
|seek | position | 跳转到指定位置（单位：s）|
|destroy | 无 | 销毁当前实例 |
|onCanplay | callback | 音频进入可以播放状态，但不保证后面可以流畅播放 。|
|onPlay | callback | 音频播放事件 |
|onPause | callback | 音频暂停事件 |
|onStop | callback | 音频停止事件 |
|onEnded | callback | 音频自然播放结束事件 |
|onTimeUpdate | callback | 音频进度更新事件 |
|onError | callback | 音频播放错误事件 |
|onWaiting | callback | 音频加载中事件，当音频因为数据不足，需要停下来加载时会触发 。|
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

#### 错误码

**Andriod**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确 |
|1001|执行失败|

**iOS**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确 |

## setInnerAudioOption

**解释：** 对`innerAudioContext`进行小程序内部的全局设置。

**参数：** Object

|属性 | 类型 | 必填 | 说明 | 最低版本 |
|---- | ---- | ---- | ---- | ---- |
|mixWithOther |Boolean | 否 |设置是否与其他音频混播，默认为false| 11.3 <p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/tutorial/compatibility/">兼容性处理</a>|
|success  | Function |否 | 接口调用成功的回调函数| |
|fail  | Function |否 | 接口调用失败的回调函数| |
|complete  | Function |否 | 接口调用结束的回调函数（调用成功、失败都会执行）| | |




**示例：**

```javascript

    swan.setInnerAudioOption({
        mixWithOther: true,
        success: res => {
            console.log('设置音频混播成功')
        }，
        fail: err => {
            console.log('设置音频混播失败', err)
        }
    })

```
<!-- 
#### 错误码


|错误码|说明|
|--|--|
|1001|执行失败 |
|202|解析失败，请检查参数是否正确 | -->