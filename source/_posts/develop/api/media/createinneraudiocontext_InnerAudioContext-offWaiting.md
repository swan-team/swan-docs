---
title: InnerAudioContext.offWaiting
header: develop
nav: api
sidebar: createinneraudiocontext_InnerAudioContext-offWaiting
---



**解释**：取消监听 onWaiting 事件

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_InnerAudioContextOnError.png"  class="demo-qrcode-image" />

**方法参数**：Function callback

**图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/InnerAudioContextOffWaiting.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**

<a href="swanide://fragment/f103894c07ad661cef935b9bbcbca61b1574736090622" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="container">
    <view class="card-area">
        <button type="primary" bindtap="offWaiting">offWaiting</button>
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
        innerAudioContext.onEnded(res => {
            innerAudioContext.offWaiting();
        });
        this.innerAudioContext = innerAudioContext;
        this.innerAudioContext.play();
    },
    offWaiting(){
        swan.showModal({
            title: 'offWaiting',
            content: '取消监听成功'
        });
        this.innerAudioContext.offWaiting();
    }
});
```