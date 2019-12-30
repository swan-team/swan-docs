---
title: animation-video 透明视频动画
header: develop
nav: component
sidebar: animation-video
---



**解释**：animation-video 属于前端组件。它为百度小程序提供了将特定视频资源渲染为透明背景动效的能力，可以帮助开发者低成本实现更为沉浸，丰富的动画效果。

##  属性说明

|属性名 |类型  |默认值  |必填 |说明|最低版本|
|:---- |: ---- | :--- | :---- |:---- | :---|
|resource-width | Number  | 800 |是 |组件使用的video视频资源的宽度，单位px| 3.130.10 |
|resource-height| Number | 400 |是 |组件使用的video视频资源的高度，单位px| 3.130.10 |
|canvas-style| String | 'width:400px;height:400px' |是 |用于设置动画画布的css样式| 3.130.10 |
|path| String |  |是 |动画资源地址，支持相对路径以及远程地址| 3.130.10 |
|loop| Boolean | false |否 |动画是否循环播放| 3.130.10 |
|autoplay| Boolean | false |否 |动画是否自动播放| 3.130.10 |
|bindstarted| EventHandle |  |否|动画开始播放的回调| 3.130.10 |
|bindended| EventHandle |  |否|当播放到末尾时触发 ended 事件（自然播放结束会触发回调，循环播放结束及暂停动画不会触发。）| 3.130.10 |

## 组件 api

组件提供丰富的 api 来控制动画的播放，暂停，跳到指定位置等，详见[swan.createAnimationVideo](https://smartprogram.baidu.com/docs/develop/api/media/animationvideo_swan-createAnimationVideo/)

## 设计方法

动画资源设计方法详见[透明视频AFX](https://smartprogram.baidu.com/docs/design/resource/animationVideo/)


## 代码示例

<a href="swanide://fragment/a71d4303d014dc1a93d480a830e11b131577675842297" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_animation-video.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>


###  图片示例

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

###  代码示例


* 在 swan 文件中

```html
<view class="container">
   <animation-video
        id ="myAnimationVideo"
        path = "{{path}}"
        bindstarted = "started"
        bindended = "ended"
        loop = "{{loop}}"
        resource-width="800"
        resource-height="400"
        canvas-style ="width: 100%"
    >
    </animation-video>

    <button class="btn" type="primary" bindtap="play">播放动画</button>
    <button class="btn" type="primary" bindtap="pause">暂停动画</button>
    <button class="btn" type="primary" bindtap="seek">跳转到2s</button>
</view>

```
* 在 js 文件中

```javascript
Page({
    data: {
        loop: false,
        path: 'https://b.bdstatic.com/miniapp/animation-video.mp4'
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
    },

    seek() {
        // 动画跳转到 2 s
        this.myAnimationVideo.seek(2);
    },

    started() {
        console.log('动画开始播放');
    },

    ended() {
        console.log('动画结束播放');
    }
});


```

##  Bug & Tip

* Tip：为避免出现画面被拉伸的情况，建议将animation-view组件的长宽比设置的与动画长宽比一致。
* Tip：因为最终动画渲染在页面上实际上是一个canvas，可通过 canvas-style 控制它的 css 样式，例如，支持响应式可以设置 canvas-style ="width:100%;"。
