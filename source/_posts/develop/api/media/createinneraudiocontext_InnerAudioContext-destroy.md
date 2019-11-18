---
title: InnerAudioContext.destroy
header: develop
nav: api
sidebar: InnerAudioContext.destroy
---

**解释**：销毁当前实例 

**方法参数**：无

**代码示例**：

<a href="swanide://fragment/c5bbf1de6d8223c96d36828d4508b0d11574014500257" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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
        innerAudioContext.play();
        this.innerAudioContext = innerAudioContext;
    },
    destroy() {
        this.innerAudioContext.destroy();
    }
});
```