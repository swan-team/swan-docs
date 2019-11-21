---
title: InnerAudioContext.offPause
header: develop
nav: api
sidebar: InnerAudioContext.offPause
---



 

**解释**：取消监听 onPause 事件

**方法参数**：Function callback

**代码示例**：

<a href="swanide://fragment/8ff6f20ca5f8193b51530f00d965b96f1574014146964" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```javascript
Page({
    onLoad() {
        const innerAudioContext = swan.createInnerAudioContext();
        innerAudioContext.src = 'http://vd3.bdstatic.com/mda-ic7mxzt5cvz6f4y5/mda-ic7mxzt5cvz6f4y5.mp3';
        innerAudioContext.autoplay = false;
        innerAudioContext.onPlay(res => {
            swan.showModal({
                title: 'onplay',
                content: JSON.stringify(res)
            });
            console.log('onPlay', res);
        });
        innerAudioContext.onPause(res => {
            swan.showModal({
                title: 'onPause',
                content: JSON.stringify(res)
            });
            console.log('onPause', res);
        });
        innerAudioContext.offpause();
        innerAudioContext.play();
        this.innerAudioContext = innerAudioContext;
    },
    pause() {
        this.innerAudioContext.pause();
    }
});
```