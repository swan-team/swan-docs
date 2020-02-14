---
title: InnerAudioContext.offEnded
header: develop
nav: api
sidebar: createinneraudiocontext_InnerAudioContext-offEnded
---


**解释**：取消监听 onEnded 事件

 
## 方法参数

Function callback

## 示例

<a href="swanide://fragment/321b65df068229350eb437db1f504a961574734480025" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_InnerAudioContextOffEnded.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 


<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/InnerAudioContextOffEnded.gif">
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
<view class="container">
    <view class="card-area">
        <button type="primary" bindtap="offEnded">offEnded</button>
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
            swan.showModal({
                title: 'onPlay',
                content: JSON.stringify(res)
            });
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
    offEnded(){
        swan.showModal({
            title: 'offEnded',
            content: '取消监听成功'
        });
        this.innerAudioContext.offEnded();
    }
});
```