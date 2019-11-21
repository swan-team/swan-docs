---
title:  InnerAudioContext.offStop
header: develop
nav: api
sidebar:  InnerAudioContext.offStop
---



**解释**：取消监听 onStop 事件

**方法参数**：Function callback

**代码示例**：

<a href="swanide://fragment/7cc2d73a7d728df8d458a3fc77f691fe1574013520880" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```javascript
Page({
    onLoad() {
        let that = this;
        const innerAudioContext = swan.createInnerAudioContext();
        innerAudioContext.src = 'http://vd3.bdstatic.com/mda-ic7mxzt5cvz6f4y5/mda-ic7mxzt5cvz6f4y5.mp3';
        innerAudioContext.autoplay = false;
        innerAudioContext.onStop(res => {
            swan.showModal({
                title: 'onStop',
                content: JSON.stringify(res)
            });
            console.log('onStop', res);
        });
        innerAudioContext.onEnded(res => {
            innerAudioContext.offStop();
        });
        this.innerAudioContext = innerAudioContext;
        this.innerAudioContext.play();
    }
});
```