---
title: InnerAudioContext.offSeeked
header: develop
nav: api
sidebar: InnerAudioContext.offSeeked
---





**解释**：取消监听 onSeeked 事件

**方法参数**：Function callback

**代码示例**：

<a href="swanide://fragment/28684a464c759bb4ad0f6ee84c3400341574013614754" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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
        innerAudioContext.onEnded(res => {
            innerAudioContext.offSeeked();
        });
        this.innerAudioContext = innerAudioContext;
        this.innerAudioContext.play();
    },
    seek() {
        this.innerAudioContext.seek(80);
    }
});
```
