---
title: InnerAudioContext.offError
header: develop
nav: api
sidebar: InnerAudioContext.offError
---



**解释**：取消监听 offError 事件

**方法参数**：Function callback

**代码示例**：

<a href="swanide://fragment/69f5f45dc946b568f4ece41c39eae89c1574014252333" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```javascript
Page({
    onLoad() {
        const innerAudioContext = swan.createInnerAudioContext();
        innerAudioContext.src = 'http://vd3.bdstatic.com/mda-ic7mxzt5cvz6f4y5/mda-ic7mxzt5cvz6f4y5.mp3';
        innerAudioContext.autoplay = false;
        innerAudioContext.onPlay(res => {
            swan.showToast({
                title: 'onplay',
                icon: 'none'
            });
        });
        innerAudioContext.onError(err => {
            swan.showModal({
                title: 'onError',
                content: JSON.stringify(err)
            });
            console.log('onError', res);
        });
        innerAudioContext.offError();
        innerAudioContext.play();
        this.innerAudioContext = innerAudioContext;
    }
});
```