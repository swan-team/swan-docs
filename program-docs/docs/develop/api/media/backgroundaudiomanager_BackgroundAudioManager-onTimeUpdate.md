---
title: BackgroundAudioManager.onTimeUpdate 
header: develop
nav: api
sidebar: backgroundaudiomanager_BackgroundAudioManager-onTimeUpdate 
---


**解释**：音频进度更新事件


## 方法参数

Function callback

## 示例

<a href="swanide://fragment/f1637760fd5806867e309cb1bfc8fce61573424394917" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_BackgroundAudioManagerOnTimeUpdate.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 
 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/onTimeUpdate.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### 代码示例 




* 在 js 文件中

```js

Page({
    data: {
        duration: '',
        currentTime: ''
    },
    onLoad() {
        let that = this;
        const backgroundAudioManager = swan.getBackgroundAudioManager();
        backgroundAudioManager.title = '演员';
        backgroundAudioManager.epname = '演员';
        backgroundAudioManager.singer = '薛之谦';
        backgroundAudioManager.coverImgUrl = 'https://c.hiphotos.baidu.com/super/pic/item/8b13632762d0f703e34c0f6304fa513d2797c597.jpg';
        backgroundAudioManager.onTimeUpdate(function(res) {
            console.log('backgroundAudioManager.onTimeUpdate', res)
            that.setData({
                duration: res.duration,
                currentTime: res.currentTime
            })
        });
        this.backgroundAudioManager = backgroundAudioManager;
        this.backgroundAudioManager.src = 'https://vd3.bdstatic.com/mda-ic7mxzt5cvz6f4y5/mda-ic7mxzt5cvz6f4y5.mp3';
        this.backgroundAudioManager.play();
    }
});

```