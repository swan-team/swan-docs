---
title: BackgroundAudioManager.pause
header: develop
nav: api
sidebar: BackgroundAudioManager.pause
---



**解释**：暂停

**方法参数**：无
 
**示例**：

<a href="swanide://fragment/fb668009b1eb06088ad1d8fc2b7148a71573440369183" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```javascript

Page({
    onShow() {
        const backgroundAudioManager = swan.getBackgroundAudioManager();
        backgroundAudioManager.title = '演员';
        backgroundAudioManager.epname = '演员';
        backgroundAudioManager.singer = '薛之谦';
        backgroundAudioManager.coverImgUrl = 'http://c.hiphotos.baidu.com/super/pic/item/8b13632762d0f703e34c0f6304fa513d2797c597.jpg';
        this.backgroundAudioManager = backgroundAudioManager;
        this.backgroundAudioManager.src = 'http://vd3.bdstatic.com/mda-ic7mxzt5cvz6f4y5/mda-ic7mxzt5cvz6f4y5.mp3';
        this.backgroundAudioManager.play();
    },
    pause() {
        this.backgroundAudioManager.pause();
    }
});

```
