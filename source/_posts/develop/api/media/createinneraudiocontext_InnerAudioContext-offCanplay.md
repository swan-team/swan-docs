---
title: InnerAudioContext.offCanplay
header: develop
nav: api
sidebar: createinneraudiocontext_InnerAudioContext-offCanplay
---


 

**解释**：取消监听 onCanplay 事件

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_InnerAudioContextOffCanplay.png"  class="demo-qrcode-image" />

**方法参数**：Function callback

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/InnerAudioContextOffCanplay.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：

<a href="swanide://fragment/f8bea8e31acd803303f1f9486276e9891574734004361" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="container">
    <view class="card-area">
        <button type="primary" bindtap="offCanplay">offCanplay</button>
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
        innerAudioContext.onCanplay(res => {
            swan.showModal({
                title: 'onCanplay',
                content: JSON.stringify(res)
            });
            console.log('onPlay', res);
        });
        innerAudioContext.offCanplay();
        this.innerAudioContext = innerAudioContext;
        this.innerAudioContext.play();
    },
    offCanplay(){
        swan.showModal({
            title: 'offCanplay',
            content: '取消监听成功'
        });
        this.innerAudioContext.offCanplay();
    }
});
```