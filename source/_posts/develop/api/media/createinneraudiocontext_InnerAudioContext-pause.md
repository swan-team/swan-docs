---
title: InnerAudioContext.pause
header: develop
nav: api
sidebar: InnerAudioContext.pause
---


**解释**：暂停 

**方法参数**：无

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/InnerAudioContextPause.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：

<a href="swanide://fragment/d397b7c118fce3bf21bcdb255c155ceb1574538135185" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="container">
    <view class="card-area">
        <button type="primary" bindtap="play">play</button>
        <button type="primary" bindtap="pause">pause</button>
    </view>
</view>
```

* 在 js 文件中

```javascript
Page({
    onLoad() {
        const innerAudioContext = swan.createInnerAudioContext();
        innerAudioContext.src = 'http://vd3.bdstatic.com/mda-ic7mxzt5cvz6f4y5/mda-ic7mxzt5cvz6f4y5.mp3';
        innerAudioContext.autoplay = false;
        innerAudioContext.onPlay(res => {
            swan.showModal({
                title: 'onplay',
                content: JSON.stringify(res)
            });
            console.log('onPlay', res);
        });
        innerAudioContext.onPause(res => {
            swan.showModal({
                title: 'onPause',
                content: JSON.stringify(res)
            });
            console.log('onPause', res);
        });
        innerAudioContext.play();
        this.innerAudioContext = innerAudioContext;
    },
    play() {
        this.innerAudioContext.play();
    },
    pause() {
        this.innerAudioContext.pause();
    }
});
```