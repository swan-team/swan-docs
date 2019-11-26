---
title: VideoContext.sendDanmu 
header: develop
nav: api
sidebar: videocontext_VideoContext-sendDanmu 
---

 
 
**解释**：发送弹幕。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_VideoContextSendDanmu.png"  class="demo-qrcode-image" />

**方法参数**：Object object

**object 参数说明**：

|参数名	|类型	|是否必填	|默认值	|说明|
|---|---|---|---|---|
|text|string|	否	||弹幕文字|
|color|string|否||弹幕颜色|


**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/vdanmu.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：
<a href="swanide://fragment/dfdf6e177f818808b415b657d64c1c7c1573479113127" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <video id="myVideo" enable-danmu="true" src="https://b.bdstatic.com/swan-temp/940fe716b0eaad38f47b209d61657490.mp4"></video>
    <button type="primary" bindtap="sendDanmu">sendDanmu</button>
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
    sendDanmu() {
        this.videoContext.sendDanmu({
            text: '这是一条弹幕',
            color: '#f60'
        });
    }
});
```