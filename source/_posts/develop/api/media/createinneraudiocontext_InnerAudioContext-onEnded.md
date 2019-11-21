---
title: InnerAudioContext.onEnded
header: develop
nav: api
sidebar: InnerAudioContext.onEnded
---




**解释**：音频自然播放结束事件

**方法参数**：Function callback

**代码示例**：

<a href="swanide://fragment/be271756622883b4f4fe8c55bc7239fb1574012153144" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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
        innerAudioContext.onEnded(res => {
            swan.showModal({
                title: 'onEnded',
                content: JSON.stringify(res)
            });
        });
        this.innerAudioContext = innerAudioContext;
        this.innerAudioContext.play();
    }
});
```