---
title: swan.createAnimationVideo
header: develop
nav: api
sidebar: animationvideo_swan-createAnimationVideo
---


**解释**： 创建并返回 animation-video 上下文 `animationVideo` 对象。通过 animationVideoId 跟一个 animation-video 组件绑定，通过它可以操作一个 animation-video 组件。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_animation-video.png"  class="demo-qrcode-image" />


**方法参数**：String animationVideoId

**返回值**：animationVideo

**图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/play.gif">
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

* 在 swan 文件中

```html
<view class="wrap">
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
</view>
```

* 在 js 文件中

```js
Page({
    data: {
        path: 'https://b.bdstatic.com/miniapp/animation-video.mp4'
    },
    onLoad() {
        // 创建动画组件实例
        this.myAnimationVideo = swan.createAnimationVideo('myAnimationVideo');
    }
});
```
