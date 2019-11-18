---
title: BackgroundAudioManager.onNext
header: develop
nav: api
sidebar: backgroundaudiomanager_BackgroundAudioManager.onNext
---




**解释**：监听用户在系统音乐播放面板点击下一曲事件，仅支持 Andriod。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_BackgroundAudioManagerOnNext.png"  class="demo-qrcode-image" />


**方法参数**：Function callback

**代码示例**：

<a href="swanide://fragment/00fff718478aa5679cbc92158d6fd8561573758677667" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```javascript

Page({
    onShow() {
        const backgroundAudioManager = swan.getBackgroundAudioManager();
        backgroundAudioManager.title = '演员';
        backgroundAudioManager.epname = '演员';
        backgroundAudioManager.singer = '薛之谦';
        backgroundAudioManager.coverImgUrl = 'http://c.hiphotos.baidu.com/super/pic/item/8b13632762d0f703e34c0f6304fa513d2797c597.jpg';
        backgroundAudioManager.onNext(function(res) {
            console.log('backgroundAudioManager.onNext', res)
            swan.showModal({
                title: 'onNext success',
                content: JSON.stringify(res)
            })
        });
        this.backgroundAudioManager = backgroundAudioManager;
        this.backgroundAudioManager.src = 'http://vd3.bdstatic.com/mda-ic7mxzt5cvz6f4y5/mda-ic7mxzt5cvz6f4y5.mp3';
        this.backgroundAudioManager.play();
    }
});

```

