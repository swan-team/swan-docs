---
title: Animation.translate3d
header: develop
nav: api
sidebar: createanimation_Animation-translate3d
---
 

**解释**： 对 X、Y、Z 坐标进行平移变换

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/translate3d.png"  class="demo-qrcode-image" />

**方法参数**：Number tx，Number ty，Number tz 

**参数说明**： 在 X 轴偏移 tx ，在 Y 轴偏移 ty ，在 Z 轴偏移 tz，单位 px。

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/translate3d.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**

<a href="swanide://fragment/90dfd1038c8a49c6b92de921d43e555b1574217718126" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <view class="animation-element-wrapper">
        <view class="animation-element" animation="{{animation}}"></view>
    </view>
    <view class="card-area">
        <view class="top-description border-bottom">展示动画</view>
        <button type="primary" bindtap="translate3d">translate3d</button>
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
    translate3d() {
      this.animation.translate3d(Math.random() * 100 - 50,Math.random() * 100 - 50,Math.random() * 100 - 50).step()
      this.setData({animation: this.animation.export()})
    },
});
```
