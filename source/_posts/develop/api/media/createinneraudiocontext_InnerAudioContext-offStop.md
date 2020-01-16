---
title:  InnerAudioContext.offStop
header: develop
nav: api
sidebar:  createinneraudiocontext_InnerAudioContext-offStop
---



**解释**：取消监听 onStop 事件

 
## 方法参数
Function callback

## 示例

<a href="swanide://fragment/f20c32c10740f5c4b7cc834a818daf691574735974064" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_InnerAudioContextOffStop.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 


<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/InnerAudioContextOffStop.gif">
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
        <button type="primary" bindtap="offStop">offStop</button>
    </view>
</view>
```

* 在 js 文件中

```javascript
Page({
    onLoad() {
        let that = this;
        const innerAudioContext = swan.createInnerAudioContext();
        innerAudioContext.src = 'https://vd3.bdstatic.com/mda-ic7mxzt5cvz6f4y5/mda-ic7mxzt5cvz6f4y5.mp3';
        innerAudioContext.autoplay = false;
        innerAudioContext.onStop(res => {
            swan.showModal({
                title: 'onStop',
                content: JSON.stringify(res)
            });
            console.log('onStop', res);
        });
        innerAudioContext.onEnded(res => {
            innerAudioContext.offStop();
        });
        this.innerAudioContext = innerAudioContext;
        this.innerAudioContext.play();
    },
    offStop(){
        swan.showModal({
            title: 'offStop',
            content: '取消监听成功'
        });
        this.innerAudioContext.offStop();
    }
});
```