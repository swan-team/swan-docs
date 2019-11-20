---
title: Animation.skew
header: develop
nav: api
sidebar: createanimation_Animation-skew
---
 
 
**解释**： 对 X、Y 轴坐标进行倾斜

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/skew.png"  class="demo-qrcode-image" />

**方法参数**： Number ax，Number ay

**参数说明**： 参数范围-180~180；一个参数时， Y 轴坐标不变， X 轴坐标延顺时针倾斜 ax 度；两个参数时，分别在 X 轴倾斜 ax 度，在 Y 轴倾斜 ay 度。

**代码示例**

<a href="swanide://fragment/2d9a7e150806a198c9068c8d6ef5af091574217977375" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <view class="animation-element-wrapper">
        <view class="animation-element" animation="{{animation}}"></view>
    </view>
    <view class="card-area">
        <view class="top-description border-bottom">展示动画</view>
        <button type="primary" bindtap="skew">skew</button>
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
    skew() {
        this.animation.skew(Math.random() * 90, Math.random() * 90).step()
        this.setData({animation: this.animation.export()})
    }
});
```
