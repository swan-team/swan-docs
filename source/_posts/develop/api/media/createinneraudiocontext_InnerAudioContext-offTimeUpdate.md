---
title: InnerAudioContext.offTimeUpdate
header: develop
nav: api
sidebar: InnerAudioContext.offTimeUpdate
---




**解释**：取消监听 onTimeUpdate 事件

**方法参数**：Function callback

**代码示例**：

<a href="swanide://fragment/07102148082bb1ee7dbc55d87b989d171574013321695" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```javascript
Page({
    onLoad() {
        let that = this;
        const innerAudioContext = swan.createInnerAudioContext();
        innerAudioContext.src = 'http://vd3.bdstatic.com/mda-ic7mxzt5cvz6f4y5/mda-ic7mxzt5cvz6f4y5.mp3';
        innerAudioContext.autoplay = false;
        innerAudioContext.onTimeUpdate(res => {
            swan.showModal({
                title: 'onTimeUpdate',
                content: JSON.stringify(res)
            });
            console.log('onTimeUpdate', res);
        });
        innerAudioContext.onEnded(res => {
            innerAudioContext.offTimeUpdate();
        });
        this.innerAudioContext = innerAudioContext;
        this.innerAudioContext.play();
    }
});
```