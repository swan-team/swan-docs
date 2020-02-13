---
title: AnimationVideo.pause
header: develop
nav: api
sidebar:  videocontext_VideoContext-pause
---



**解释**： 暂停

 
## 方法参数

无
## 示例

<a href="swanide://fragment/ab0b71caf387bc59ae9a4190d6a750261578455636683" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_animation-video.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/pause.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
</div>


### 代码示例 



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
    <button class="btn" type="primary" bindtap="pause">暂停动画</button>
</view>

```
* 在 js 文件中

```javascript
Page({
    data: {
        path: 'https://efe-h2.cdn.bcebos.com/ceug/resource/res/2020-1/1577964961344/003e2f0dcd81.mp4'
    },
    onLoad() {
        // 创建动画组件实例
        this.myAnimationVideo = swan.createAnimationVideo('myAnimationVideo');
    },

    play() {
        // 动画播放
        this.myAnimationVideo.play();
    },
    pause() {
        // 动画暂停
        this.myAnimationVideo.pause();
    }
});


```