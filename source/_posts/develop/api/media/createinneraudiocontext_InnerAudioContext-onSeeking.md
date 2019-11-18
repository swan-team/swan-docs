---
title: InnerAudioContext.onSeeking
header: develop
nav: api
sidebar: InnerAudioContext.onSeeking
---


 

**解释**：音频进行 seek 操作事件

**方法参数**：Function callback

**代码示例**：

<a href="swanide://fragment/9bec998c484260859411b22a7243d82c1574011990921" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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
        innerAudioContext.onSeeked(res => {
            swan.showModal({
                title: 'onSeeked',
                content: JSON.stringify(res)
            });
        });
        innerAudioContext.onSeeking(res => {
            swan.showModal({
                title: 'onSeeking',
                content: JSON.stringify(res)
            });
        });
        this.innerAudioContext = innerAudioContext;
        this.innerAudioContext.play();
    },
    seek() {
        this.innerAudioContext.seek(80);
    }
});
```
