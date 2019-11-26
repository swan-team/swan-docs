---
title: VideoContext.stop
header: develop
nav: api
sidebar: videocontext_VideoContext-stop
---


> 最低支持手百版本 11.16

**解释**: 停止播放视频

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_VideoContextStop.png"  class="demo-qrcode-image" /> 

**方法参数**：无

**代码示例**：
<a href="swanide://fragment/29a896daf5efea6c76444ebe4471c82e1574763945881" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <video id="myVideo" enable-danmu="true" src="https://b.bdstatic.com/swan-temp/940fe716b0eaad38f47b209d61657490.mp4"></video>
    <button type='primary' bindtap="videoContextStop">点击停止播放</button>
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
