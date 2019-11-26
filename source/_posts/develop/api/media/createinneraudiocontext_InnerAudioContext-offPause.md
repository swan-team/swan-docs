---
title: InnerAudioContext.offPause
header: develop
nav: api
sidebar: InnerAudioContext.offPause
---



 

**解释**：取消监听 onPause 事件

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_InnerAudioContextOffPause.png"  class="demo-qrcode-image" />

**方法参数**：Function callback

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/InnerAudioContextOffPause.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：

<a href="swanide://fragment/8057428dd387f07a51388e4a16083bf81574734927235" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="container">
    <view class="card-area">
        <button type="primary" bindtap="pause">pause</button>
        <button type="primary" bindtap="offPause">offPause</button>
    </view>
</view>
```

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
        innerAudioContext.onPause(res => {
            swan.showModal({
                title: 'onPause',
                content: JSON.stringify(res)
            });
            console.log('onPause', res);
        });
        innerAudioContext.play();
        this.innerAudioContext = innerAudioContext;
    },
    pause() {
        this.innerAudioContext.pause();
    },
    offPause(){
        swan.showModal({
            title: 'offPause',
            content: '取消监听成功'
        });
        this.innerAudioContext.offPause();
    }
});
```