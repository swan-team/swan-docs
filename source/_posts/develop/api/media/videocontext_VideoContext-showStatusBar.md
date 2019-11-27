---
title: VideoContext.showStatusBar
header: develop
nav: api
sidebar: videocontext_VideoContext-showStatusBar
---


**解释**：显示状态栏，仅在iOS全屏下有效。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_VideoContextShowStatusBar.png"  class="demo-qrcode-image" />


**方法参数**：无

**代码示例**：
<a href="swanide://fragment/a7de73cff4e411bea7533ac41643c47e1574006702541" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <video id="myVideo" enable-danmu="true" src="https://b.bdstatic.com/swan-temp/940fe716b0eaad38f47b209d61657490.mp4"></video>
    <button bindtap="showStatusBar">点击显示状态栏</button>
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
    showStatusBar() {
        this.videoContext.requestFullScreen({direction: 90});
        let that = this;
        setTimeout(function () {
            this.videoContext.showStatusBar();
        })
    }
});
```

 