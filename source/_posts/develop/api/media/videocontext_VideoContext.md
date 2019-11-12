---
title:  VideoContext
header: develop
nav: api
sidebar: videocontext_VideoContext
---


 

**解释**： swan.createVideoContext 的返回值



**代码示例**：
<a href="swanide://fragment/d1dc373ed75d6ba89e6e40cd981e3a7a1573525726544" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 js 文件中

```js
Page({
    data: { },
    onLoad() {
        const videoContext = swan.createVideoContext('myVideo');
        console.log(videoContext);
        this.videoContext = videoContext;
    },
    play() {
        this.videoContext.play();
    },
    pause() {
        this.videoContext.pause();
    },
    seek() {
        this.videoContext.seek(180);
    },
    sendDanmu() {
        this.videoContext.sendDanmu({
            text: '这是一条弹幕',
            color: '#f60'
        });
    },
    requestFullScreen() {
        this.videoContext.requestFullScreen({direction: 90});
    },
    exitFullScreen() {
        this.videoContext.exitFullScreen();
    },
    showStatusBar() {
        this.videoContext.showStatusBar();
    },
    hideStatusBar() {
        this.videoContext.hideStatusBar();
    }
});
```


**图示**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>




#### 错误码

* Andriod

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确       |
|1001|执行失败|

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确       |

