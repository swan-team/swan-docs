---
title: InnerAudioContext.seek
header: develop
nav: api
sidebar: createinneraudiocontext_InnerAudioContext-seek
---




**解释**：跳转到指定位置（单位：s）

 
## 方法参数
Number position

## 示例

<a href="swanide://fragment/d212ce57dba7b428a1e69e94dda9deae1574540027838" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_InnerAudioContextSeek.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 


<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/InnerAudioContextSeek.gif">
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
        <button type="primary" bindtap="seek">跳转到80s处</button>
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
        innerAudioContext.onSeeked(res => {
            swan.showModal({
                title: 'onSeeked',
                content: '跳转完成'
            });
        });
        innerAudioContext.onSeeking(res => {
            swan.showModal({
                title: 'onSeeking',
                content: '正在跳转至音频80s后'
            });
        });
        this.innerAudioContext = innerAudioContext;
    },
    seek() {
        this.innerAudioContext.seek(80);
    }
});
```
