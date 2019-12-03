---
title: VideoContext.seek 
header: develop
nav: api
sidebar: videocontext_VideoContext-seek 
---

 
 
**解释**：跳转到指定位置（单位：s）

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_VideoContextSeek.png"  class="demo-qrcode-image" />

**方法参数**：Number position


**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/vseek.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：
<a href="swanide://fragment/722c7d08ecf8bbf86bb2d76f49e3b9411573478866443" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <video id="myVideo" enable-danmu="true" src="https://b.bdstatic.com/swan-temp/940fe716b0eaad38f47b209d61657490.mp4"></video>
    <button type="primary" bindtap="seek">seek</button>
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
    seek() {
        this.videoContext.seek(180);
    }
});
```