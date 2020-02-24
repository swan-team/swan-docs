---
title: InnerAudioContext.onTimeUpdate
header: develop
nav: api
sidebar: createinneraudiocontext_InnerAudioContext-onTimeUpdate
---



**解释**：音频进度更新事件

  
## 方法参数 

Function callback

## 示例

<a href="swanide://fragment/7fda9bcf589d3bce795ab773002dd8aa1574544580704" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_InnerAudioContextOnTimeUpdate.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 


<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/onTimeUpdate.gif">
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
        <view class="description"> 
            正在播放《演员》
        </view> 
        <view class="description"> 
            {{currentTime}} / {{duration}}
        </view>
    </view>
</view>
```

* 在 js 文件中

```js
Page({
    onLoad() {
        let that = this;
        const innerAudioContext = swan.createInnerAudioContext();
        innerAudioContext.src = 'https:://vd3.bdstatic.com/mda-ic7mxzt5cvz6f4y5/mda-ic7mxzt5cvz6f4y5.mp3';
        innerAudioContext.autoplay = false;
        innerAudioContext.onTimeUpdate(res => {
            swan.showModal({
                title: 'onTimeUpdate',
                content: JSON.stringify(res)
            });
            console.log('onTimeUpdate', res);
        });
        this.innerAudioContext = innerAudioContext;
        this.innerAudioContext.play();
    }
});
```