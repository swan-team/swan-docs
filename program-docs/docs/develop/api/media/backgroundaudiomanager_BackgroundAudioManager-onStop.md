---
title: BackgroundAudioManager.onStop
header: develop
nav: api
sidebar: backgroundaudiomanager_BackgroundAudioManager-onStop
---


**解释**：音频停止事件

 

## 方法参数

Function callback

## 示例

<a href="swanide://fragment/a8eb1bdd1b9370283d8ab70418213a711573423983357" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_BackgroundAudioManagerOnStop.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 


<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/stop.gif">
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

```javascript

Page({
    onLoad() {
        const backgroundAudioManager = swan.getBackgroundAudioManager();
        backgroundAudioManager.title = '演员';
        backgroundAudioManager.epname = '演员';
        backgroundAudioManager.singer = '薛之谦';
        backgroundAudioManager.coverImgUrl = 'https://c.hiphotos.baidu.com/super/pic/item/8b13632762d0f703e34c0f6304fa513d2797c597.jpg';
        backgroundAudioManager.onStop(function(res) {
            console.log('backgroundAudioManager.onStop', res)
            swan.showModal({
                title: 'onStop success',
                content: JSON.stringify(res)
            })
        });
        this.backgroundAudioManager = backgroundAudioManager;
        this.backgroundAudioManager.src = 'https://vd3.bdstatic.com/mda-ic7mxzt5cvz6f4y5/mda-ic7mxzt5cvz6f4y5.mp3';
        this.backgroundAudioManager.play();
    },
    stop() {
        this.backgroundAudioManager.stop(); 
    }
});

```
 
