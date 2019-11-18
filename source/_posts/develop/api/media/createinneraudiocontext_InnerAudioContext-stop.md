---
title: InnerAudioContext.stop 
header: develop
nav: api
sidebar: InnerAudioContext.stop 
---




**解释**：停止 

**方法参数**：无

**代码示例**：

<a href="swanide://fragment/85895f7c8bc3e8bad46e9d13a083667a1574011686142" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```javascript
Page({
    onLoad() {
        const innerAudioContext = swan.createInnerAudioContext();
        innerAudioContext.src = 'http://vd3.bdstatic.com/mda-ic7mxzt5cvz6f4y5/mda-ic7mxzt5cvz6f4y5.mp3';
        innerAudioContext.autoplay = false;
        innerAudioContext.onPlay(res => {
            swan.showModal({
                title: 'onPlay',
                content: JSON.stringify(res)
            });
            console.log('onPlay', res);
        });
        innerAudioContext.onStop(res => {
            swan.showModal({
                title: 'onStop',
                content: JSON.stringify(res)
            });
            console.log('onStop', res);
        });
        this.innerAudioContext = innerAudioContext;
    },
    play() {
        this.innerAudioContext.play();
    },
    stop() {
        this.innerAudioContext.stop();
    }
});
```
