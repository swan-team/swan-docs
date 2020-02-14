---
title: BackgroundAudioManager
header: develop
nav: api
sidebar: backgroundaudiomanager_BackgroundAudioManager 
---

**解释**：[swan.getBackgroundAudioManager](/develop/api/media/backgroundaudiomanager_swan-getBackgroundAudioManager/)的返回值。

## 方法参数 

### `backgroundAudioManager`类的属性列表 ：

|属性 | 类型 |  只读 |说明 |
|---- | ---- | ---- | ---- |
|startTime |Number | 否 |开始播放的位置（单位：s），默认 0 。|
|duration |Number |是 |当前音频的长度（单位：s），只有在当前有合法的 src 时返回。 |
|currentTime |Number | 是 |当前音频的播放位置（单位：s），只有在当前有合法的 src 时返回，时间不取整，保留小数点后 6 位。 |
|paused |Boolean |是 |当前是否暂停或停止状态，true 表示暂停或停止，false 表示正在播放。 |
|title |String |否 |音频标题，用于做原生音频播放器音频标题。原生音频播放器中的分享功能，分享出去的卡片标题，也将使用该值。 |
|epname |String |否 |专辑名，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值。 |
|singer |String |否 |歌手名，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值。 |
|coverImgUrl |String |否 |封面图url，用于做原生音频播放器背景图。原生音频播放器中的分享功能，分享出去的卡片配图及背景也将使用该图。 |
|src |String |  否 |音频的数据链接，用于直接播放，请在上述属性设置完成后使用该属性。有效值：m4a, aac, mp3, wav。|

## 示例

<a href="swanide://fragment/4546806675c2ecbdb645a0f4c51459731573617109560" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_BackgroundAudioManager.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 


<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/getBackgroundAudioManager.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### 代码示例 



* 在 js 文件中

```javascript

Page({
    onLoad() {
        const backgroundAudioManager = swan.getBackgroundAudioManager();
        console.log('backgroundAudioManager:', backgroundAudioManager)
        backgroundAudioManager.title = '演员';
        backgroundAudioManager.epname = '演员';
        backgroundAudioManager.singer = '薛之谦';
        backgroundAudioManager.coverImgUrl = 'https://c.hiphotos.baidu.com/super/pic/item/8b13632762d0f703e34c0f6304fa513d2797c597.jpg';

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
        this.backgroundAudioManager.src = 'https://vd3.bdstatic.com/mda-ic7mxzt5cvz6f4y5/mda-ic7mxzt5cvz6f4y5.mp3';
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

