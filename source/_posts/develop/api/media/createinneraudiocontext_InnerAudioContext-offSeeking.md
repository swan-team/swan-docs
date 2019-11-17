---
title: InnerAudioContext.offSeeking
header: develop
nav: api
sidebar: InnerAudioContext.offSeeking
---





**解释**：取消监听 onSeeking 事件

**方法参数**：Function callback

**代码示例**：

<a href="swanide://fragment/c44c05fb6d6d711ed787dc20c15f22fb1574013583474" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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
        innerAudioContext.onSeeking(res => {
            swan.showModal({
                title: 'onSeeking',
                content: JSON.stringify(res)
            });
        });
        innerAudioContext.onEnded(res => {
            innerAudioContext.offSeeking();
        });
        this.innerAudioContext = innerAudioContext;
    },
    seek() {
        this.innerAudioContext.seek(80);
    }
});
```
