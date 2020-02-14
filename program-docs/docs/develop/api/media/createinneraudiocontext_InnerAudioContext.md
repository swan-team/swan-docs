---
title: InnerAudioContext
header: develop
nav: api
sidebar: createinneraudiocontext_InnerAudioContext
---



**解释**： swan.createInnerAudioContext 的返回值。
 
## 方法参数
 

|方法 | 参数 | 必填 |说明 |
|:---|:---|:---|:---|
|src |String | 否 |音频的数据链接，用于直接播放，仅支持绝对路径。|
|startTime |Number | 否 | 开始播放的位置（单位：s），默认 0 。|
|autoplay |Boolean| 否 |是否自动开始播放，默认 false 。|
|loop |Boolean |否 |是否循环播放，默认 false。 |
|obeyMuteSwitch |Boolean |否 |是否遵循系统静音开关，默认 true，当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。|
|duration |Number |是 |当前音频的长度（单位：s），只有在当前有合法的 src 时返回 。|
|currentTime |Number |是 |当前音频的播放位置（单位：s），只有在当前有合法的 src 时返回，时间不取整，保留小数点后 6 位 。|
|paused |Boolean |是 |当前状态:true 表示暂停或停止，false 表示正在播放。 |
|volume |Number |否 |音量，范围 0~1。 |


### 支持格式 :

|格式	|iOS|	Android|
|:---|:---|:---|
|flac|	否	|是|
|amr |	否	|是|
|wma |	否	|是|
|ogg |	否	|是|
|ape |	否	|是|
|mp4|	否	|是|
|m4a |是	|是|
|wav 	|是	|是|
|mp3 	|是	|是|
|aac	|是	|是|
|aiff |是|否|
|caf|是|否|

## 示例

 
### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_createInnerAudioContext.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 


<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/createInnerAudioContext.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### 代码示例1 ：

<a href="swanide://fragment/6e677e1f5a5cf14b7a4d56369ae6d49b1569417414184" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```javascript

Page({
    onLoad() {
        //  每次触发就会注册一次回调事件，所以只需把所有回调写在onLoad中即可
        const innerAudioContext = swan.createInnerAudioContext();
        innerAudioContext.src = 'https://vd3.bdstatic.com/mda-ic7mxzt5cvz6f4y5/mda-ic7mxzt5cvz6f4y5.mp3';
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

### 代码示例2 - 设置obeyMuteSwitch为false，否则用户在系统静音的情况下，会认为api不能播放 ：

<a href="swanide://fragment/630e947ea4b925fa576ff51439271a851575218694131" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```javascript

Page({
    onLoad() {
        //  每次触发就会注册一次回调事件，所以只需把所有回调写在onLoad中即可
        const innerAudioContext = swan.createInnerAudioContext();
        innerAudioContext.src = 'https://vd3.bdstatic.com/mda-ic7mxzt5cvz6f4y5/mda-ic7mxzt5cvz6f4y5.mp3';
        innerAudioContext.autoplay = false;
        innerAudioContext.obeyMuteSwitch = false;

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

