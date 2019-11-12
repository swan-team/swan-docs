---
title: LivePlayerContext
header: develop
nav: api
sidebar:  liveplayercontext_LivePlayerContext
---

 



**解释**： swan.createLivePlayerContext 的返回值

**代码示例**：

<a href="swanide://fragment/fde41dba7cc64b655e9e6181024fdd571573522009534" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a> 

* 在 js 文件中
```js
Page({
    data: {
        src: 'https://vd3.bdstatic.com/mda-ia8e6q3g23py8qdh/hd/mda-ia8e6q3g23py8qdh.mp4?playlist=%5B%22hd%22%5D&auth_key=1521549485-0-0-d5d042ba3555b2d23909d16a82916ebc&bcevod_channel=searchbox_feed&pd=share'
    },
    onShow(){
        console.log('目前此组件在真机双端不能播放，请在开发者工具中查看完整效果');
    },
    onReady(e) {
        const livePlayerContext = swan.createLivePlayerContext('myLive');
        console.log('livePlayerContext:', livePlayerContext)
        this.livePlayerContext = livePlayerContext;
    },
    livePlay(e) {
        this.livePlayerContext.play();
    },
    livePause(e) {
        this.livePlayerContext.pause();
    },
    liveStop(e) {
        this.livePlayerContext.stop();
    },
    liveMute(e) {
        this.livePlayerContext.mute();
    },
    liveResume(e) {
        this.livePlayerContext.resume();
    },
    requestFullScreen(e) {
        this.livePlayerContext.requestFullScreen();
    }
});
```



#### 错误码

* Andriod

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法|
|401|安全校验失败|
|1001|执行失败|

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确       |
|401|安全校验失败|

