---
title: LivePlayerContext.exitFullScreen
header: develop
nav: api
sidebar: liveplayercontext_LivePlayerContext-exitFullScreen
---


**解释**：退出全屏

**方法参数**：Object object
 


**`object`参数说明**：

|属性名 |类型  |默认值 |必填|说明|
|---- | ---- | ---- |---- |---|
|success   |Function  |  | 否  |接口调用成功的回调函数|
|fail  |Function  |  | 否 |接口调用失败的回调函数|
|complete   | Function   ||  否 | 接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：

<a href="swanide://fragment/f6e0f83c034dd0a69a963fb6a3e895891573759816251" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a> 

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
        this.livePlayerContext = livePlayerContext;
        this.livePlayerContext.play();
        this.livePlayerContext.requestFullScreen({direction: 90});
        let that = this;
        setTimeout(function () {
            that.livePlayerContext.exitFullScreen();
        }, 5000);
    }
});
```