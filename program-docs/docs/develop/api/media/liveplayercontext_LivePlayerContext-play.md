---
title: LivePlayerContext.play
header: develop
nav: api
sidebar: liveplayercontext_LivePlayerContext-play
---

 

**解释**：播放 

 

## 方法参数
Object object
### `object`参数说明 ：

|属性名 |类型  |默认值 |必填|说明|
|---- | ---- | ---- |---- |---|
|success   |Function  |  | 否  |接口调用成功的回调函数|
|fail  |Function  |   |否 |接口调用失败的回调函数|
|complete   | Function   |  |否 | 接口调用结束的回调函数（调用成功、失败都会执行）| 

## 示例

<a href="swanide://fragment/a6023d9b3dc99a25b9a79575a5b98fad1574008679886" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a> 

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_LivePlayerContextPlay.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 


<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/Lplay.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### 代码示例 


* 在 swan 文件中
```html
<view class="live-play">
    <live-player id="myLive" src="{{src}}" autoplay="{{autoplay}}"></live-player>
    <button type="primary" bind:tap="livePlay">开始播放 play</button>
</view>
```

* 在 js 文件中
```js
Page({
    data: {
        cur: 0,
        autoplay: false,
        src: 'https://vd3.bdstatic.com/mda-ia8e6q3g23py8qdh/hd/mda-ia8e6q3g23py8qdh.mp4?playlist=%5B%22hd%22%5D&auth_key=1521549485-0-0-d5d042ba3555b2d23909d16a82916ebc&bcevod_channel=searchbox_feed&pd=share'
    },
    onShow(){
        console.log('目前此组件在真机双端不能播放，请在开发者工具中查看完整效果');
    },
    onReady(e) {
        const livePlayerContext = swan.createLivePlayerContext('myLive');
        this.livePlayerContext = livePlayerContext;
    },
    livePlay(e) {
        this.livePlayerContext.play();
    }
});
```

