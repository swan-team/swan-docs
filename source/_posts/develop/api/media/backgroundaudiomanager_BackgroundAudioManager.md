---
title: BackgroundAudioManager
header: develop
nav: api
sidebar: BackgroundAudioManager
---

**解释**：[swan.getBackgroundAudioManager](/develop/api/media/backgroundaudiomanager_swan-getBackgroundAudioManager/)的返回值。

**`backgroundAudioManager`类的属性列表**：

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




**代码示例**：


<a href="swanide://fragment/7fb2d76b501e08dd2249246b87fbfcfe1573420173331" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```javascript

Page({
    onLoad() {
        const backgroundAudioManager = swan.getBackgroundAudioManager();
        console.log('backgroundAudioManager:', backgroundAudioManager)
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

        backgroundAudioManager.onSeeked(res => {
            swan.showToast({
                title: 'onSeeked',
                icon: 'none'
            });
            console.log('onSeeked', res);
        });
        backgroundAudioManager.onSeeking(res => {
            swan.showToast({
                title: 'onSeeking',
                icon: 'none'
            });
            console.log('onSeeking', res);
        });

        backgroundAudioManager.onNext(res => {
            swan.showToast({
                title: 'onNext',
                icon: 'none'
            });
            console.log('onNext', res);
        });

        backgroundAudioManager.onPrev(res => {
            swan.showToast({
                title: 'onPrev',
                icon: 'none'
            });
            console.log('onPrev', res);
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

