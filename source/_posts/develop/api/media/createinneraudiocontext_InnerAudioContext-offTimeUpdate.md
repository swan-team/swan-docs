---
title: InnerAudioContext.offTimeUpdate
header: develop
nav: api
sidebar: createinneraudiocontext_InnerAudioContext-offTimeUpdate
---




**解释**：取消监听 onTimeUpdate 事件

 
## 方法参数
Function callback

## 示例

<a href="swanide://fragment/54ad4f8de96be55fee52898193440ada1574673008214" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_InnerAudioContextOffTimeUpdate.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 


<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/offTimeUpdate.gif">
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
    <view class="card-area">
        <view class="description"> 
        正在播放《演员》
        </view> 
        <view class="description"> 
            {{currentTime}} / {{duration}}
        </view>
    </view>
    <button type="primary" bindtap="offTimeUpdate">点击取消监听</button>
</view>
```

* 在 js 文件中

```javascript
Page({
    data: {
        currentTime: '',
        duration: '0' 
    },
    onLoad() {
        const innerAudioContext = swan.createInnerAudioContext();
        innerAudioContext.src = 'https://vd3.bdstatic.com/mda-ic7mxzt5cvz6f4y5/mda-ic7mxzt5cvz6f4y5.mp3';
        innerAudioContext.autoplay = false;
        this.innerAudioContext = innerAudioContext;
        this.innerAudioContext.play();
        this.innerAudioContext.onTimeUpdate(res => {
        this.setData('currentTime', res.data.currentTime);
        this.setData('duration', res.data.duration);
        });
    },
    offTimeUpdate() {
        this.innerAudioContext.offTimeUpdate()
    }
});
```