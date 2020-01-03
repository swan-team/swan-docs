---
title: InnerAudioContext.onWaiting
header: develop
nav: api
sidebar: media/createinneraudiocontext_InnerAudioContext-onWaiting
---




**解释**：音频加载中事件，当音频因为数据不足，需要停下来加载时会触发 。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_InnerAudioContextOnWaiting.png"  class="demo-qrcode-image" />

**方法参数**：Function callback

**图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/InnerAudioContextOnWaiting.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**

<a href="swanide://fragment/c2a264b1a148b099e50454b3e67fd2a81574546342796" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="container">
    <view class="card-area">
        此页面在遇到音频加载时会弹窗提示
    </view>
</view>
```

* 在 js 文件中

```javascript
Page({
    onLoad() {
        const innerAudioContext = swan.createInnerAudioContext();
        innerAudioContext.src = 'https://vd3.bdstatic.com/mda-ic7mxzt5cvz6f4y5/mda-ic7mxzt5cvz6f4y5.mp3';
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