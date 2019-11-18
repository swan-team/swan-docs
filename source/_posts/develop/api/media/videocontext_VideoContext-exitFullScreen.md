---
title: VideoContext.exitFullScreen 
header: develop
nav: api
sidebar: videocontext_VideoContext-exitFullScreen 
---

  
 
**解释**：退出全屏

**方法参数**：无
 
**代码示例**：
<a href="swanide://fragment/1be020daed52e503c2048d1b70d5fd881573759781574" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <video id="myVideo" auto enable-danmu="true" src="https://b.bdstatic.com/swan-temp/940fe716b0eaad38f47b209d61657490.mp4"></video>
    <view>设置5s内自动退出全屏</view>
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
        this.videoContext.requestFullScreen({direction: 90});
        let that = this;
        setTimeout(function () {
            that.videoContext.exitFullScreen();
        }, 5000);
    }
});
```