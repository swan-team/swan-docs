---
title: Animation.translateY
header: develop
nav: api
sidebar: createanimation_Animation-translateY
---
 
 
 
**解释**： 对 Y 轴平移

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/translateY.png"  class="demo-qrcode-image" />

**方法参数**：Number  ty  

**参数说明**：在 Y 轴偏移 ty ，单位 px。 


**图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/translateY.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**

<a href="swanide://fragment/e6fdb305fefb7291a5d9635defd630581574217543717" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <view class="animation-element-wrapper">
        <view class="animation-element" animation="{{animation}}"></view>
    </view>
    <view class="card-area">
        <view class="top-description border-bottom">展示动画</view>
        <button type="primary" bindtap="translateY">translateY</button>
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
    translateY() {
      this.animation.translateY(Math.random() * 100 - 50).step()
      this.setData({animation: this.animation.export()})
    }
});
```
