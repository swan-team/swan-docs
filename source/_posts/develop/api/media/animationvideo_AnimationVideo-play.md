---
title:  AnimationVideo.play
header: develop
nav: api
sidebar:  animationvideo_AnimationVideo-play
---



**解释**：播放

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_VideoContextPlay.png"  class="demo-qrcode-image" />


**方法参数**：无

**图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/vplay.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
</div>

**代码示例**
<a href="swanide://fragment/b7bd33e7aefbb0526e097e32b83568421573478521706" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 swan 文件中

```html
<view class="container">
   <animation-video
        id ="myAnimationVideo"
        path = "{{path}}"
        bindstarted = "started"
        bindended = "ended"
        resource-width="800"
        resource-height="400"
        canvas-style ="width: 100%"
    >
    </animation-video>

    <button class="btn" type="primary" bindtap="play">播放动画</button>
</view>

```
* 在 js 文件中

```javascript
Page({
    data: {
        path: '../../anims/animation-video.mp4'
    },
    onLoad() {
        // 创建动画组件实例
        this.myAnimationVideo = swan.createAnimationVideo('myAnimationVideo');
    },

    play() {
        // 动画播放
        this.myAnimationVideo.play();
    }
});
```
