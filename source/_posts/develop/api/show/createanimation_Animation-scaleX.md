---
title: Animation.scaleX
header: develop
nav: api
sidebar: createanimation_Animation-scaleX
---
 
 
 
**解释**： 缩放 X 轴

**方法参数**： Number sx

**参数说明**： 在X轴缩放sx倍数

**代码示例**

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/scaleX.png"  class="demo-qrcode-image" />


<a href="swanide://fragment/6007d96630c306b5c22cb6defe0652b41574216405521" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <view class="animation-element-wrapper">
        <view class="animation-element" animation="{{animation}}"></view>
    </view>
    <view class="card-area">
        <view class="top-description border-bottom">展示动画</view>
        <button type="primary" bindtap="scaleX">scaleX</button>
    </view>
</view>
```
* 在 js 文件中

```js
Page({
    data:{ },
    onReady() {
      this.animation = swan.createAnimation({
        transformOrigin: "50% 50%",
        duration: 1000,
        timingFunction: "ease",
        delay: 0})
    },
    scaleX() {
      this.animation.scaleX(Math.random() * 2).step()
      this.setData({animation: this.animation.export()})
    }
});
```


