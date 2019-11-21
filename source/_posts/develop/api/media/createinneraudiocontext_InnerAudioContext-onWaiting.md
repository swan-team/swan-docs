---
title: InnerAudioContext.onWaiting
header: develop
nav: api
sidebar: InnerAudioContext.onWaiting
---




**解释**：音频加载中事件，当音频因为数据不足，需要停下来加载时会触发 。

**方法参数**：Function callback

**代码示例**：

<a href="swanide://fragment/bbab68b8fba90e8d0f1d2f55b974eb381574012445123" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```javascript
Page({
    onLoad() {
        const innerAudioContext = swan.createInnerAudioContext();
        innerAudioContext.src = 'http://vd3.bdstatic.com/mda-ic7mxzt5cvz6f4y5/mda-ic7mxzt5cvz6f4y5.mp3';
        innerAudioContext.autoplay = false;
        innerAudioContext.onWaiting(res => {
            swan.showModal({
                title: 'onWaiting',
                content: '正在加载，请耐心等待'
            });
            console.log('onWaiting', res);
        });
        this.innerAudioContext = innerAudioContext;
        this.innerAudioContext.play();
    }
});
```