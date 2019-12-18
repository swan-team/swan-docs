---
title: InnerAudioContext.offSeeked
header: develop
nav: api
sidebar: createinneraudiocontext_InnerAudioContext-offSeeked
---





**解释**：取消监听 onSeeked 事件

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_InnerAudioContextOffSeeked.png"  class="demo-qrcode-image" />

**方法参数**：Function callback

**图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/InnerAudioContextOffSeeked.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**

<a href="swanide://fragment/77a60057c2f8ea51da62c108e5161b161574735681765" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="container">
    <view class="card-area">
        <button type="primary" bindtap="seek">seek</button>
        <button type="primary" bindtap="offSeeked">offSeeked</button>
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
    },
    offSeeked(){
        swan.showModal({
            title: 'offSeeked',
            content: '取消监听成功'
        });
        this.innerAudioContext.offSeeked();
    }
});
```
