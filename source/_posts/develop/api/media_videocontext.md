---
title: 视频组件控制
header: develop
nav: api
sidebar: media_videocontext
---
## swan.createVideoContext

**解释：** 创建并返回 video 上下文 `videoContext` 对象。通过 videoId 跟一个 video 组件绑定，通过它可以操作一个 video 组件。

**方法参数：**String videoId

**返回值：**videoContext

### videoContext

**`videoContext`对象的方法列表：**

|方法 | 参数 | 说明 |
|---- | ---- | ---- |
|play  |  无 |  播放  |
|pause |  无  | 暂停  |
|seek  |  position   | 跳转到指定位置（单位：s）    |
|sendDanmu |  danmu  | 发送弹幕，danmu 包含两个属性 text、color。  |
|requestFullScreen  | 无  | 进入全屏  |
|exitFullScreen | 无 |  退出全屏|
|showStatusBar | 无 |  显示状态栏，仅在iOS全屏下有效。|
|hideStatusBar | 无 |  隐藏状态栏，仅在iOS全屏下有效。|

**示例：**
<a href="swanide://fragment/2a74a56f21b40ba5bc93803d70065cf21556536372261" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <video id="myVideo" auto src="https://b.bdstatic.com/swan-temp/940fe716b0eaad38f47b209d61657490.mp4"></video>

    <button type="primary" bindtap="play">play</button>
    <button type="primary" bindtap="pause">pause</button>
    <button type="primary" bindtap="seek">seek</button>
    <button type="primary" bindtap="sendDanmu">sendDanmu</button>
    <button type="primary" bindtap="fullScreen">{{fullScreenText}}</button>
</view>
```

* 在 js 文件中

```js
Page({
    data: {
        fullScreenText: 'requestFullScreen'
    },
    onLoad() {
        const video = swan.createVideoContext('myVideo');
        this.video = video;
    },
    play() {
        this.video.play();
    },
    pause() {
        this.video.pause();
    },
    seek() {
        this.video.seek(10);
    },
    sendDanmu() {
        this.video.sendDanmu({
            text: '这是一条弹幕',
            color: '#f60'
        });
    },
    fullScreen() {
        if (this.getData('fullScreenText') === 'requestFullScreen') {
            this.video.requestFullScreen();
            this.setData('fullScreenText', 'exitFullScreen');
        } else {
            this.video.exitFullScreen();
            this.setData('fullScreenText', 'requestFullScreen');
        }
    }
});
```

* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}

.wrap video {
    width: 100%;
    margin-bottom: 30rpx;
}

.wrap button {
    margin-bottom: 50rpx;
}
```

**图示**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="../../../img/api/media/createVideoContext.png">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>




