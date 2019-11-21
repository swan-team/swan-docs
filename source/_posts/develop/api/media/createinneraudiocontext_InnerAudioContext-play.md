---
title: InnerAudioContext.play
header: develop
nav: api
sidebar: InnerAudioContext.play
---



**解释**：播放

**方法参数**：无

**代码示例**：

<a href="swanide://fragment/1f74c7a9ee35e5c9ba498703bfe3b5b31574010883644" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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
        this.innerAudioContext = innerAudioContext;
    },
    play() {
        this.innerAudioContext.play();
    }
});
```
