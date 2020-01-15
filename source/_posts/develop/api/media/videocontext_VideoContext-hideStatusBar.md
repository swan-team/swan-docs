---
title: VideoContext.hideStatusBar
header: develop
nav: api
sidebar: videocontext_VideoContext-hideStatusBar
---


 
 
**解释**：隐藏状态栏，仅在iOS全屏下有效。

 
## 方法参数
  无


## 示例

<a href="swanide://fragment/56fc24cd0778d7afef2ded4d49f0d9f91574006905425" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_VideoContextHideStatusBar.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>
 

### 代码示例 


* 在 swan 文件中

```html
<view class="wrap">
    <video id="myVideo" enable-danmu="true" src="https://b.bdstatic.com/swan-temp/940fe716b0eaad38f47b209d61657490.mp4"></video>
    <button bindtap="hideStatusBar">点击隐藏状态栏</button>
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
    hideStatusBar() {
        this.videoContext.requestFullScreen({direction: 90});
        let that = this;
        setTimeout(function () {
            this.videoContext.hideStatusBar();
        })
    }
});
```

 