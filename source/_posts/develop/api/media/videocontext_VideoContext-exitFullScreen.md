---
title: VideoContext.exitFullScreen 
header: develop
nav: api
sidebar: videocontext_VideoContext-exitFullScreen 
---

  
 
**解释**：退出全屏

**方法参数**：无
 
**示例**：
<a href="swanide://fragment/57d35540eadfdeb3d37d3a10cfdfb9cf1573479499167" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 js 文件中

```js
Page({
    data: { },
    onLoad() {
        const videoContext = swan.createVideoContext('myVideo');
        this.videoContext = video;
        this.videoContext.play();
        this.videoContext.requestFullScreen({direction: 90});
    },
    exitFullScreen() {
        this.videoContext.exitFullScreen();
    }
});
```