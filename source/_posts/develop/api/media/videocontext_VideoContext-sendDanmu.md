---
title: VideoContext.sendDanmu 
header: develop
nav: api
sidebar: videocontext_VideoContext-sendDanmu 
---

 
 
**解释**：发送弹幕。

**方法参数**：Object object

**object 参数说明**：

|参数名	|类型	|是否必填	|默认值	|说明|
|---|---|---|---|---|
|text|string|	否	||弹幕文字|
|color|string|否||弹幕颜色|


**示例**：
<a href="swanide://fragment/dfdf6e177f818808b415b657d64c1c7c1573479113127" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 js 文件中

```js
Page({
    data: { },
    onLoad() {
        const video = swan.createVideoContext('myVideo');
        this.video = video;
        this.video.play();
    },
    sendDanmu() {
        this.video.sendDanmu({
            text: '这是一条弹幕',
            color: '#f60'
        });
    }
});
```