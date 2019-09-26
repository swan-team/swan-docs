---
title: 背景音频管理播放
header: develop
nav: api
sidebar: media_backgroundaudiomanager
---


## swan.getBackgroundAudioManager

**解释**：获取全局唯一的背景音频管理器 `backgroundAudioManager`。

**方法参数**：无

##  BackgroundAudioManager

**`backgroundAudioManager`对象的属性列表**：

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


 
**示例**：

<a href="swanide://fragment/baabeadbe2985d54085de54aa8404ff21569416813876" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```javascript

Page({
    onLoad() {
        const backgroundAudioManager = swan.getBackgroundAudioManager();
        backgroundAudioManager.title = '演员';
        backgroundAudioManager.epname = '演员';
        backgroundAudioManager.singer = '薛之谦';
        backgroundAudioManager.coverImgUrl = 'http://c.hiphotos.baidu.com/super/pic/item/8b13632762d0f703e34c0f6304fa513d2797c597.jpg';

        backgroundAudioManager.onPlay(res => {
            swan.showToast({
                title: 'play',
                icon: 'none'
            });
            console.log('onPlay', res);
        });

        backgroundAudioManager.onPause(res => {
            swan.showToast({
                title: 'pause',
                icon: 'none'
            });
            console.log('onPause', res);
        });

        backgroundAudioManager.onStop(res => {
            swan.showToast({
                title: 'stop',
                icon: 'none'
            });
            console.log('onStop', res);
        });

        backgroundAudioManager.onEnded(res => {
            swan.showToast({
                title: 'end',
                icon: 'none'
            });
            console.log('onEnded', res);
        });

        backgroundAudioManager.onTimeUpdate(res => {
            console.log('onTimeUpdate', res);
        });

        backgroundAudioManager.onError(res => {
            swan.showToast({
                title: 'error',
                icon: 'none'
            });
            console.log('onError', res);
        });

        backgroundAudioManager.onWaiting(res => {
            swan.showToast({
                title: 'waiting',
                icon: 'none'
            });
            console.log('onWaiting', res);
        });

        this.backgroundAudioManager = backgroundAudioManager;
    },
    play() {
        this.backgroundAudioManager.src = 'http://vd3.bdstatic.com/mda-ic7mxzt5cvz6f4y5/mda-ic7mxzt5cvz6f4y5.mp3';
        this.backgroundAudioManager.play();
    },
    pause() {
        this.backgroundAudioManager.pause();
    },
    stop() {
        this.backgroundAudioManager.stop();
    },
    seek() {
        this.backgroundAudioManager.seek(10);
    }
});

```

## BackgroundAudioManager.play 

**解释**：播放

**方法参数**：无

## BackgroundAudioManager.pause


**解释**：暂停

**方法参数**：无
 

## BackgroundAudioManager.stop

**解释**：停止 

**方法参数**：无
 

## BackgroundAudioManager.seek

**解释**：跳转到指定位置（单位：s）

**方法参数**：Number position


## BackgroundAudioManager.onCanplay

**解释**：音频进入可以播放状态，但不保证后面可以流畅播放 。

**方法参数**：Function callback
 

## BackgroundAudioManager.onPlay

**解释**：音频播放事件

**方法参数**：Function callback
 

## BackgroundAudioManager.onPause

**解释**： 音频暂停事件

**方法参数**：Function callback
 

## BackgroundAudioManager.onStop

**解释**：音频停止事件

**方法参数**：Function callback
 

## BackgroundAudioManager.onEnded 

**解释**：音频自然播放结束事件

**方法参数**：Function callback
 

## BackgroundAudioManager.onTimeUpdate 

**解释**：音频进度更新事件

**方法参数**：Function callback


## BackgroundAudioManager.onError

**解释**：音频播放错误事件

**方法参数**：Function callback


## BackgroundAudioManager.onWaiting 

**解释**：音频加载中事件，当音频因为数据不足，需要停下来加载时会触发 。

**方法参数**：Function callback


## BackgroundAudioManager.onSeeked

**解释**：监听背景音频完成跳转操作事件，背景音频完成跳转操作事件的回调函数。

**方法参数**：Function callback

## BackgroundAudioManager.onSeeking

**解释**：监听背景音频开始跳转操作事件，背景音频开始跳转操作事件的回调函数。

**方法参数**：Function callback

## BackgroundAudioManager.onNext

**解释**：监听用户在系统音乐播放面板点击下一曲事件，仅支持 Andriod。

**方法参数**：Function callback

## BackgroundAudioManager.onPrev

**解释**：监听用户在系统音乐播放面板点击上一曲事件，仅支持 Andriod。

**方法参数**：Function callback