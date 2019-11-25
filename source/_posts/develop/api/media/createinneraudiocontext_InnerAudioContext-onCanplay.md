---
title: InnerAudioContext.onCanplay
header: develop
nav: api
sidebar: InnerAudioContext.onCanplay
---



**解释**：音频进入可以播放状态，但不保证后面可以流畅播放 。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_InnerAudioContextOnCanplay.png"  class="demo-qrcode-image" />

**方法参数**：Function callback

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/InnerAudioContextOnCanplay.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：

<a href="swanide://fragment/13677f55a97df5fa34de6e4f537181081574012321977" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="container">
    <view class="card-area">
        <button type="primary" bindtap="onTap">destroy</button>
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
        innerAudioContext.onCanplay(res => {
            swan.showModal({
                title: 'onCanplay',
                content: JSON.stringify(res)
            });
            console.log('onPlay', res);
        });
        this.innerAudioContext = innerAudioContext;
        this.innerAudioContext.play();
    }
});
```