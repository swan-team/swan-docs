---
title: VideoContext.exitFullScreen 
header: develop
nav: api
sidebar: videocontext_VideoContext-exitFullScreen 
---

  
 
**解释**：退出全屏

**方法参数**：无
 
**示例**：
<a href="swanide://fragment/6fa1bf005963101b3480f3fe549e10af1573718802551" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 js 文件中

```js
Page({
    data: { },
    onLoad() {
        const video = swan.createVideoContext('myVideo');
        this.video = video;
        this.video.play();
        this.video.requestFullScreen({direction: 90});
        let that = this;
        setTimeout(function () {
            that.video.exitFullScreen();
        }, 5000);
    }
});
```