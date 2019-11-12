---
title: VideoContext.pause
header: develop
nav: api
sidebar:  videocontext_VideoContext-pause
---

 
 
**解释**： 暂停

**方法参数**：无

**示例**：
<a href="swanide://fragment/cfb92be87d8768c48283ff36f5bf08a31573478775059" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 js 文件中

```js
Page({
    data: { },
    onLoad() {
        const videoContext = swan.createVideoContext('myVideo');
        this.videoContext = video;
        this.videoContext.play();
    },
    pause() {
        this.videoContext.pause();
    }
});
```