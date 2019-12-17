---
title: swan.createLivePlayerContext
header: develop
nav: api
sidebar:  liveplayercontext_swan-createLivePlayerContext
---

 

**解释**： 操作对应的 `<live-player/>` 组件。 创建并返回 live-player 上下文 LivePlayerContext 对象。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/live-player.png"  class="demo-qrcode-image" />


**方法参数**： String domId

**`domId`参数说明**：要获取 live-player 组件的 id。

**返回值**：livePlayerContext

**图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/liveplayer.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**

<a href="swanide://fragment/703092891fd158851d3920c29e31113d1573523316988" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 swan 文件中

```html
<view class="live-play">
    <live-player id="myLive" src="{{src}}">
    </live-player>
    <div class="section">
        <button type="primary" bind:tap="livePlay">开始播放 play</button>
        <button type="primary" bind:tap="liveStop">停止播放 stop</button>
        <button type="primary" bind:tap="liveMute">静音</button>
        <button type="primary" bind:tap="livePause">暂停</button>
        <button type="primary" bind:tap="liveResume">恢复</button>
        <button type="primary" bind:tap="requestFullScreen">进入全屏</button>
    </div>
</view>
```

* 在 js 文件中

```js
Page({
    data: { },
    onLoad() {
       swan.createLivePlayerContext('myLive');
    }
});
```