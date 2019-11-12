---
title: VideoContext.requestFullScreen 
header: develop
nav: api
sidebar: videocontext_VideoContext-requestFullScreen 
---

 
> 最低支持基础库版本 3.90.x 。

**解释**：按设置的视频全屏方向进入全屏。不指定视频全屏方向时则根据设备方向判断全屏方向。

**方法参数**：Object object

**object 参数说明**：

|参数名	|类型	|是否必填	|默认值	|说明|
|---|---|---|---|---|
|direction|object|否|当前方向|角度，有效值为0，90，-90|

**direction 有效值**:

| 值 | 说明 |
| ---- | ---- |
| 0 | 正常竖向 |
| 90 | 屏幕顺时针90度 |
| -90 | 屏幕逆时针90度 |

**示例**：
<a href="swanide://fragment/c9568967cece545edaf1edefa52d71c11573479259203" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 js 文件中

```js
Page({
    data: { },
    onLoad() {
        const videoContext = swan.createVideoContext('myVideo');
        this.videoContext = video;
        this.videoContext.play();
    },
    requestFullScreen() {
        this.videoContext.requestFullScreen({direction: 90});
    }
});
```

