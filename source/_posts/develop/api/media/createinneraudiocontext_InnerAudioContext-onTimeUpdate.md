---
title: InnerAudioContext.onTimeUpdate
header: develop
nav: api
sidebar: InnerAudioContext.onTimeUpdate
---



**解释**：音频进度更新事件

**方法参数**：Function callback

**代码示例**：

<a href="swanide://fragment/9d7b411b963e7b7a4435f52ec9dc1b4e1574012908825" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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
        this.innerAudioContext = innerAudioContext;
        this.innerAudioContext.play();
    }
});
```