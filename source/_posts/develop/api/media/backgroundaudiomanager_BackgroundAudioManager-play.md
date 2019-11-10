---
title: BackgroundAudioManager.play 
header: develop
nav: api
sidebar: BackgroundAudioManager.play 
---




**解释**：播放

**方法参数**：无

**示例**：

<a href="swanide://fragment/b2781601c85332edee9b1ccf1661f9be1573420325233" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```javascript

Page({
    onLoad() {
        const backgroundAudioManager = swan.getBackgroundAudioManager();
        backgroundAudioManager.title = '演员';
        backgroundAudioManager.epname = '演员';
        backgroundAudioManager.singer = '薛之谦';
        backgroundAudioManager.coverImgUrl = 'http://c.hiphotos.baidu.com/super/pic/item/8b13632762d0f703e34c0f6304fa513d2797c597.jpg';

        this.backgroundAudioManager = backgroundAudioManager;
    },
    play() {
        this.backgroundAudioManager.src = 'http://vd3.bdstatic.com/mda-ic7mxzt5cvz6f4y5/mda-ic7mxzt5cvz6f4y5.mp3';
        this.backgroundAudioManager.play();
    }
});

```
