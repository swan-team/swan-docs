---
title: InnerAudioContext.destroy
header: develop
nav: api
sidebar: InnerAudioContext.destroy
---

**解释**：销毁当前实例 

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_InnerAudioContextDestroy.png"  class="demo-qrcode-image" />

**方法参数**：无

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/InnerAudioContextDestroy.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：

<a href="swanide://fragment/504c1063ac766751147918582186edc51574733738550" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="container">
    <view class="card-area">
        <button type="primary" 
        bindtap="onTap">创建并销毁一个新实例</button>
    </view>
</view>
```

* 在 js 文件中

```javascript
Page({
    data: {
        disabled: true
    },
    onLoad() {
        const innerAudioContext = swan.createInnerAudioContext();
        innerAudioContext.src = 'http://vd3.bdstatic.com/mda-ic7mxzt5cvz6f4y5/mda-ic7mxzt5cvz6f4y5.mp3';
        innerAudioContext.autoplay = false;
        innerAudioContext.onEnded(() => {

        })
        innerAudioContext.play();
    },
    onTap() {
        // 在实际项目中，若一个页面有两种形式的语音播放，如：一个是播放语音列表里的语音，一个是预听待提交的语音。这两种的onPlay和onEnd回调内部执行的不一样，不可能在onLoad里面用同一个回调,所以需要创建两个innerAudioContext实例对象时，可在当前音频播放结束的onEnd的回调事件里面和音频播放错误onError回调事件里，调用destory方法销毁该实例。
        createInnerAudioContextTask = new Promise((resolve, reject) => {
            const innerAudioContext = swan.createInnerAudioContext();
            innerAudioContext.src = 'http://vd3.bdstatic.com/mda-ic7mxzt5cvz6f4y5/mda-ic7mxzt5cvz6f4y5.mp3';
            innerAudioContext.autoplay = false;
            innerAudioContext.onEnded(() => {
                innerAudioContext.destroy();
            })
            innerAudioContext.play();
            innerAudioContext.onPlay(res => {
                resolve();
                console.log('onPlay', res);
            });
            this.innerAudioContext = innerAudioContext;
        })
        .then(destroyTask => {
            swan.showModal({
                title: 'destroy',
                content: '销毁实例成功'
            });
            this.innerAudioContext.destroy();
        })
    }
});
```