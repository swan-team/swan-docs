---
title: InnerAudioContext.onEnded
header: develop
nav: api
sidebar: createinneraudiocontext_InnerAudioContext-onEnded
---




**解释**：音频自然播放结束事件

 
 ## 方法参数
Function callback

## 示例

<a href="swanide://fragment/960639794229f8d7653b15d28e60def21574543620781" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_InnerAudioContextOnEnded.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 


<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/InnerAudioContextOnEnded.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### 代码示例 



* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="seekEnded">点击到音频末尾</button>
    <view class="card-area">
        听至音频末尾即可触发事件
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
        innerAudioContext.onPlay(res => {
            console.log('onPlay', res);
        });
        innerAudioContext.onEnded(res => {
            swan.showModal({
                title: 'onEnded',
                content: JSON.stringify(res)
            });
        });
        this.innerAudioContext = innerAudioContext;
        this.innerAudioContext.play();
    },
    seekEnded() {
        this.innerAudioContext.onTimeUpdate(res => {
            this.innerAudioContext.seek(res.data.duration) 
        });
    }
});
```