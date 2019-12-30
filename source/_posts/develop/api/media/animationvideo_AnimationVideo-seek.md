---
title: AnimationVideo.seek
header: develop
nav: api
sidebar: videocontext_VideoContext-seek
---



**解释**：跳转到指定位置（单位：s）

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_animation-video.png"  class="demo-qrcode-image" />

**方法参数**：Number position


**图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/seek.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
</div>

**代码示例**

<a href="swanide://fragment/a71d4303d014dc1a93d480a830e11b131577675842297" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

###  代码示例


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

    <button class="btn" type="primary" bindtap="seek">跳转到2s</button>
</view>
```
* 在 js 文件中

```javascript
Page({
    data: {
        path: 'https://b.bdstatic.com/miniapp/animation-video.mp4'
    },
    onLoad() {
        // 创建动画组件实例
        this.myAnimationVideo = swan.createAnimationVideo('myAnimationVideo');
    },
    seek() {
        // 动画跳转到 2 s
        this.myAnimationVideo.seek(2);
    }
});


```