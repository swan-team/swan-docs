---
title: VideoContext.playbackRate
header: develop
nav: api
sidebar: videocontext_VideoContext-playbackRate
---
 

> 最低支持基础库版本 3.120.2

**解释**：倍速播放视频

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_VideoContextPlayBackRate.png"  class="demo-qrcode-image" /> 

**方法参数**：Number rate

**Number rate**

倍率，当前支持0.75 / 1.0 / 1.25 / 1.5 / 2.0 倍速。


**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/vplaybackRate.jpeg">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
</div>

**代码示例**：
<a href="swanide://fragment/afe9615c43c4ce4762935353e649b4431574765430075" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <video id="myVideo" auto enable-danmu="true" src="https://b.bdstatic.com/swan-temp/940fe716b0eaad38f47b209d61657490.mp4"></video>
    <button type='primary' data-set="0.75" bindtap="playbackRate">点击0.75倍速播放</button>
    <button type='primary' data-set="1.0" bindtap="playbackRate">点击1.0倍速播放</button>
    <button type='primary' data-set="1.25" bindtap="playbackRate">点击1.25倍速播放</button>
    <button type='primary' data-set="1.5" bindtap="playbackRate">点击1.5倍速播放</button>
    <button type='primary' data-set="2.0" bindtap="playbackRate">点击2.0倍速播放</button>
</view>
```

* 在 js 文件中

```js
Page({
    data: { },
    onLoad() {
        const videoContext = swan.createVideoContext('myVideo');
        this.videoContext = videoContext;
        this.videoContext.play();
    },
    playbackRate(e) {
        console.log(e);
        this.videoContext.playbackRate(+e.target.dataset.set);
    }
});
```