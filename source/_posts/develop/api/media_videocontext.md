---
title: 视频组件控制
header: develop
nav: api
sidebar: media_videocontext
---
## swan.createVideoContext

**解释**： 创建并返回 video 上下文 `videoContext` 对象。通过 videoId 跟一个 video 组件绑定，通过它可以操作一个 video 组件。

**方法参数**：String videoId

**返回值**：videoContext

## videoContext

**解释**： swan.createVideoContext 的返回值



**示例**：
<a href="swanide://fragment/2a74a56f21b40ba5bc93803d70065cf21556536372261" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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
        const VideoContext = swan.createVideoContext('myVideo');
        this.VideoContext = VideoContext;
    },
    play() {
        this.VideoContext.play();
    },
    pause() {
        this.VideoContext.pause();
    },
    seek() {
        this.VideoContext.seek(10);
    },
    sendDanmu() {
        this.VideoContext.sendDanmu({
            text: '这是一条弹幕',
            color: '#f60'
        });
    },
    fullScreen() {
        if (this.getData('fullScreenText') === 'requestFullScreen') {
            this.VideoContext.requestFullScreen();
            this.setData('fullScreenText', 'exitFullScreen');
        } else {
            this.VideoContext.exitFullScreen();
            this.setData('fullScreenText', 'requestFullScreen');
        }
    }
});
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




## videoContext.play

**解释**：播放

**方法参数**：无
 

## videoContext.pause
 
**解释**： 暂停

**方法参数**：无

## videoContext.seek 
 
**解释**：跳转到指定位置（单位：s）

**方法参数**：Number position

## videoContext.sendDanmu 
 
**解释**：发送弹幕，danmu 包含两个属性 text、color。

**方法参数**：Object danmu

## videoContext.requestFullScreen 
 
> 最低支持基础库版本 3.90.x 。

**解释**：按设置的视频全屏方向进入全屏。不指定视频全屏方向时则根据设备方向判断全屏方向。

**方法参数**：Object direction

**direction 有效值**:

| 值 | 说明 |
| ---- | ---- |
| 0 | 正常竖向 |
| 90 | 屏幕顺时针90度 |
| -90 | 屏幕逆时针90度 |

**示例**
```
videoContext.requestFullScreen({direction: 90});
```

## videoContext.exitFullScreen 
 
**解释**：退出全屏

**方法参数**：无

## videoContext.showStatusBar
 
**解释**：显示状态栏，仅在iOS全屏下有效。

**方法参数**：无

## videoContext.hideStatusBar

 
**解释**：隐藏状态栏，仅在iOS全屏下有效。

**方法参数**：无


