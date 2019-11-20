---
title: Animation.scaleY
header: develop
nav: api
sidebar: createanimation_Animation-scaleY
---
 
 
 
**解释**： 缩放 Y 轴


**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/scaleY.png"  class="demo-qrcode-image" />

**方法参数**： Number sy

**参数说明**： 在Y轴缩放sy倍数

**代码示例**


<a href="swanide://fragment/7da5f367de840e80b2a6ea83465cddfb1574216533738" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <view class="animation-element-wrapper">
        <view class="animation-element" animation="{{animation}}"></view>
    </view>
    <view class="card-area">
        <view class="top-description border-bottom">展示动画</view>
        <button type="primary" bindtap="scaleY">scaleY</button>
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
    scaleY() {
      this.animation.scaleY(Math.random() * 2).step()
      this.setData({animation: this.animation.export()})
    }
});
```
