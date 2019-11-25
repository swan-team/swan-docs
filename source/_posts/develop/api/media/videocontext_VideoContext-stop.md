---
title: VideoContext.stop
header: develop
nav: api
sidebar: videocontext-stop
---


> 最低支持手百版本 11.16

**解释**: 停止播放视频

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_VideoContextStop.png"  class="demo-qrcode-image" /> 

**方法参数**：无

**代码示例**：
<a href="swanide://fragment/b33d81ef52bfd06e1200edc291ec389f1574006511409" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <video id="myVideo" auto enable-danmu="true" src="https://b.bdstatic.com/swan-temp/940fe716b0eaad38f47b209d61657490.mp4"></video>
    <button bindtap="videoContextStop">点击停止播放</button>
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
    videoContextStop() {
        this.videoContext.stop();
    }
});
```
