---
title: Animation.skewX
header: develop
nav: api
sidebar: createanimation_Animation-skewX
---
 
  

**解释**： 对 X 轴坐标进行倾斜

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/skewX.png"  class="demo-qrcode-image" />

**方法参数**：  Number ax

**参数说明**： 参数范围-180~180；Y 轴坐标不变， X 轴坐标延顺时针倾斜 ax 度。

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/skewX.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：

<a href="swanide://fragment/d9f9f1321e4992888c975f4a73b53d831574218200049" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <view class="animation-element-wrapper">
        <view class="animation-element" animation="{{animation}}"></view>
    </view>
    <view class="card-area">
        <view class="top-description border-bottom">展示动画</view>
        <button type="primary" bindtap="skewX">skewX</button>
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
            delay: 0
        })
    },
    skewX() {
        this.animation.skewX(Math.random() * 90).step()
        this.setData({animation: this.animation.export()})
    }
});
```
