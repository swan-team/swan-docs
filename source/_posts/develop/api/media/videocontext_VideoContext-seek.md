---
title: VideoContext.seek 
header: develop
nav: api
sidebar: videocontext_VideoContext-seek 
---

 
 
**解释**：跳转到指定位置（单位：s）

**方法参数**：Number position


**示例**：
<a href="swanide://fragment/722c7d08ecf8bbf86bb2d76f49e3b9411573478866443" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 js 文件中

```js
Page({
    data: { },
    onLoad() {
        const video = swan.createVideoContext('myVideo');
        this.video = video;
        this.video.play();
    },
    seek() {
        this.video.seek(180);
    }
});
```