---
title: VideoContext.play
header: develop
nav: api
sidebar:  videocontext_VideoContext-play
---

 

**解释**：播放

**方法参数**：无
 
**示例**：
<a href="swanide://fragment/b7bd33e7aefbb0526e097e32b83568421573478521706" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 js 文件中

```js
Page({
    data: { },
    onLoad() {
        const video = swan.createVideoContext('myVideo');
        this.video = video;
    },
    play() {
        this.video.play();
    }
});
```