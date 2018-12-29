---
title: 音频组件控制
header: develop
nav: api
sidebar: media_setinneraudiooption
---



setInnerAudioOption
---
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
