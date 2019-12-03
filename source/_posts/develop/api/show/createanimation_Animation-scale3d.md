---
title:  Animation.scale3d
header: develop
nav: api
sidebar:  createanimation_Animation-scale3d
---

**解释**： 缩放

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/scale3d.png"  class="demo-qrcode-image" />

**方法参数**： Number sx，Number sy，Number sz

**参数说明**： 在X轴缩放sx倍数，在Y轴缩放sy倍数，在Z轴缩放sz倍数。

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/scale3d.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>
 
**代码示例**：

<a href="swanide://fragment/a14dbdab55b3b138e98cbd3000e0750c1574216841113" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <view class="animation-element-wrapper">
        <view class="animation-element" animation="{{animation}}"></view>
    </view>
    <view class="card-area">
        <view class="top-description border-bottom">展示动画</view>
        <button type="primary" bindtap="scale3d">scale3d</button>
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
    scale3d() {
      this.animation.scale3d(Math.random() * 2, Math.random() * 2, Math.random() * 2).step()
      this.setData({animation: this.animation.export()})
    }
});
```
