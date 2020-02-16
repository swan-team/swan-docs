---
title: LivePlayerContext.pause 
header: develop
nav: api
sidebar:  liveplayercontext_LivePlayerContext-pause 
---
 
**解释**：暂停

 

## 方法参数
Object object
### `object`参数说明 ：

|属性名 |类型  |默认值 |必填|说明|
|---- | ---- | ---- |---- |---|
|success   |Function  | | 否  | 接口调用成功的回调函数|
|fail  |Function  |  |否 | 接口调用失败的回调函数|
|complete   | Function   |  | 否 |接口调用结束的回调函数（调用成功、失败都会执行）|


## 示例

<a href="swanide://fragment/9fcddb4c8560e7d842cd1149ca6eef111574010255537" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a> 

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_LivePlayerContextPause.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 


<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/resumePause.gif">
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
    <live-player id="myLive"  src="{{src}}"  autoplay="{{autoplay}}"></live-player>
    <div class="section">
        <button type="primary" bind:tap="livePause">暂停播放 pause</button>
    </div>
</view>
```

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
    },
    livePause(e) {
        this.livePlayerContext.pause();
    }
});
```