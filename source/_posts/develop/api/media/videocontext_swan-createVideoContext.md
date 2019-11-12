---
title: swan.createVideoContext
header: develop
nav: api
sidebar: videocontext_swan-createVideoContext
---
 

**解释**： 创建并返回 video 上下文 `videoContext` 对象。通过 videoId 跟一个 video 组件绑定，通过它可以操作一个 video 组件。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/video.png"  class="demo-qrcode-image" />


**方法参数**：String videoId

**返回值**：videoContext

**示例**：
<a href="swanide://fragment/9c93370ee6d59177ca696966033540261570533594995" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 js 文件中

```js
Page({
    data: { },
    onLoad() {
        const videoContext = swan.createVideoContext('myVideo');
        this.videoContext = videoContext;
    }
});
```
