---
title: innerAudioContext
header: develop
nav: api
sidebar: innerAudioContext
---



**解释**： swan.createInnerAudioContext 的返回值。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_createInnerAudioContext.png"  class="demo-qrcode-image" />

**属性列表**：

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


**代码示例**：

<a href="swanide://fragment/6e677e1f5a5cf14b7a4d56369ae6d49b1569417414184" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```javascript

Page({
    onLoad() {
        //  每次触发就会注册一次回调事件，所以只需把所有回调写在onLoad中即可
        const innerAudioContext = swan.createInnerAudioContext();
        innerAudioContext.src = 'http://vd3.bdstatic.com/mda-ic7mxzt5cvz6f4y5/mda-ic7mxzt5cvz6f4y5.mp3';
        innerAudioContext.autoplay = false;

        innerAudioContext.onPlay(res => {
            swan.showToast({
                title: 'play',
                icon: 'none'
            });
            console.log('onPlay', res);
        });

        innerAudioContext.onPause(res => {
            swan.showToast({
                title: 'pause',
                icon: 'none'
            });
            console.log('onPause', res);
        });

        innerAudioContext.onStop(res => {
            swan.showToast({
                title: 'stop',
                icon: 'none'
            });
            console.log('onStop', res);
        });

        innerAudioContext.onEnded(res => {
            swan.showToast({
                title: 'end',
                icon: 'none'
            });
            console.log('onEnded', res);
        });

        innerAudioContext.onTimeUpdate(res => {
            console.log('onTimeUpdate', res);
        });

        innerAudioContext.onError(res => {
            swan.showToast({
                title: 'error',
                icon: 'none'
            });
            console.log('onError', res);
        });

        innerAudioContext.onWaiting(res => {
            swan.showToast({
                title: 'waiting',
                icon: 'none'
            });
            console.log('onWaiting', res);
        });

        this.innerAudioContext = innerAudioContext;
    },
    play() {
        this.innerAudioContext.play();
    },
    pause() {
        this.innerAudioContext.pause();
    },
    stop() {
        this.innerAudioContext.stop();
    },
    seek() {
        this.innerAudioContext.seek(10);
    },
    destroy() {
        this.innerAudioContext.destroy();
    },
    offTimeUpdate() {
        this.innerAudioContext.offTimeUpdate(res => {
            swan.showToast({
                title: 'offTimeUpdate',
                icon: 'none'
            });
            console.log('offTimeUpdate', res);
        });
    }
});

```

