---
title: 直播组件控制
header: develop
nav: api
sidebar: media_liveplayercontext
---

## swan.createLivePlayerContext

**解释**： 操作对应的 `<live-player/>` 组件。 创建并返回 live-player 上下文 LivePlayerContext 对象。

**方法参数**： String domId

**`domId`参数说明**：要获取 live-player 组件的 id。

**返回值**：livePlayerContext

## LivePlayerContext

**解释**： swan.createLivePlayerContext 的返回值

**示例**：

<a href="swanide://fragment/1c03ff864ae6e6b6632eea2f539623021565512790335" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a> 

* 在 swan 文件中

```swan
<view class="live-play">
    <live-player id="myLive" src="{{src}}" autoplay="{{autoplay}}" object-fit="{{objectFit}}" background-mute="{{backgroundMute}}" muted="{{muted}}" min-cache="{{minCache}}" max-cache="{{maxCache}}" bind:statechange="statechange" bind:netstatus="netstatus"></live-player>
    <div class="section">
        <button type="primary" bind:tap="livePlay">开始播放 play</button>
        <button type="primary" bind:tap="liveStop">停止播放 stop</button>
        <button type="primary" bind:tap="liveMute">静音</button>
        <button type="primary" bind:tap="changeSrc">更换src</button>
        <button type="primary" bind:tap="backgroundMute">后台静音</button>
        <button type="primary" bind:tap="objectFit">object-fit改变</button>
    </div>
</view>
```

* 在 js 文件中
```js
Page({
    data: {
        cur: 0,
        autoplay: false,
        src: 'https://vd3.bdstatic.com/mda-ia8e6q3g23py8qdh/hd/mda-ia8e6q3g23py8qdh.mp4?playlist=%5B%22hd%22%5D&auth_key=1521549485-0-0-d5d042ba3555b2d23909d16a82916ebc&bcevod_channel=searchbox_feed&pd=share',
        srcList: [
            'https://vd3.bdstatic.com/mda-ia8e6q3g23py8qdh/hd/mda-ia8e6q3g23py8qdh.mp4?playlist=%5B%22hd%22%5D&auth_key=1521549485-0-0-d5d042ba3555b2d23909d16a82916ebc&bcevod_channel=searchbox_feed&pd=share',
            'https://vd3.bdstatic.com/mda-ib0u8x1bvaf00qa8/mda-ib0u8x1bvaf00qa8.mp4?playlist=%5B%22hd%22%2C%22sc%22%5D'
        ],
        objectFit: 'contain',
        orientation: 'vertical',
        minCache: 1,
        maxCache: 3,
        muted: false,
        backgroundMute: false
    },
    onShow() {
        console.log('目前此组件在真机双端不能播放，请在开发者工具中查看完整效果');
    },
    onReady(e) {
        livePlayerContext = swan.createLivePlayerContext('myLive');
    },
    statechange(e) {
        swan.showToast({
            title: '播放状态变化 statechange' + JSON.stringify(e)
        });
    },
    netstatus(e) {
        swan.showToast({
            title: '网络状态变化 netstatus' + JSON.stringify(e)
        });
    },
    livePlay(e) {
        livePlayerContext.play();
    },
    objectFit(e) {
        this.setData('objectFit', this.getData('objectFit') === 'contain' ? 'fillCrop' : 'contain');
    },
    liveStop(e) {
        livePlayerContext.stop();
    },
    liveMute(e) {
        this.setData({
            muted: true
        });
    },
    changeSrc(e) {
        let srcList = this.getData('srcList');
        let cur = (this.getData('cur') + 1) % srcList.length;
        this.setData('src', srcList[cur]);
        this.setData('cur', cur);
    },
    backgroundMute(e) {
        this.setData({
            'backgroundMute': true
        });
    },
});
```

**图示**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="../../../img/api/media/live-player.png">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

## LivePlayerContext.play

**解释**：播放 

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填  |默认值|说明|
|---- | ---- | ---- |---- |---|
|success   |Function  |  否  | |接口调用成功的回调函数|
|fail  |Function  |  否 | |接口调用失败的回调函数|
|complete   | Function   | 否 | | 接口调用结束的回调函数（调用成功、失败都会执行）| 

## LivePlayerContext.stop

 
**解释**：停止 

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填  |默认值|说明|
|---- | ---- | ---- |---- |---|
|success   |Function  |  否  | |接口调用成功的回调函数|
|fail  |Function  |  否 | |接口调用失败的回调函数|
|complete   | Function   | 否 | | 接口调用结束的回调函数（调用成功、失败都会执行）|

## LivePlayerContext.mute

**解释**：静音

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填  |默认值|说明|
|---- | ---- | ---- |---- |---|
|success   |Function  |  否  | |接口调用成功的回调函数|
|fail  |Function  |  否 | |接口调用失败的回调函数|
|complete   | Function   | 否 | | 接口调用结束的回调函数（调用成功、失败都会执行）|

## LivePlayerContext.pause 

**解释**：暂停

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填  |默认值|说明|
|---- | ---- | ---- |---- |---|
|success   |Function  |  否  | |接口调用成功的回调函数|
|fail  |Function  |  否 | |接口调用失败的回调函数|
|complete   | Function   | 否 | | 接口调用结束的回调函数（调用成功、失败都会执行）|

## LivePlayerContext.resume 

**解释**：恢复

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填  |默认值|说明|
|---- | ---- | ---- |---- |---|
|success   |Function  |  否  | |接口调用成功的回调函数|
|fail  |Function  |  否 | |接口调用失败的回调函数|
|complete   | Function   | 否 | | 接口调用结束的回调函数（调用成功、失败都会执行）|

## LivePlayerContext.requestFullScreen

**解释**：进入全屏

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填  |默认值|说明|
|---- | ---- | ---- |---- |--|
|direction |Number  |  是  | |有效值为 0（正常竖向）, 90（屏幕逆时针90度）, -90（屏幕顺时针90度）。|
|success   |Function  |  否  | |接口调用成功的回调函数。|
|fail  |Function  |  否 |  |接口调用失败的回调函数。|
|complete   | Function   | 否 |  |接口调用结束的回调函数（调用成功、失败都会执行）。|

## LivePlayerContext.exitFullScreen

**解释**：退出全屏

**方法参数**：Object object
 


**`object`参数说明**：

|参数名 |类型  |必填  |默认值|说明|
|---- | ---- | ---- |---- |---|
|success   |Function  |  否  | |接口调用成功的回调函数|
|fail  |Function  |  否 | |接口调用失败的回调函数|
|complete   | Function   | 否 | | 接口调用结束的回调函数（调用成功、失败都会执行）|

