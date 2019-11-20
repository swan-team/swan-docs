---
title: Animation.matrix3d
header: develop
nav: api
sidebar: createanimation_Animation-matrix3d
---
 
 
**解释**： 3D转换，同[transform-function matrix](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d)。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/matrix3d.png"  class="demo-qrcode-image" />

**方法参数**： Number a1，Number b1，Number c1，Number d1，Number a2，Number b2，Number c2，Number d2，Number a3，Number b3，Number c3，Number d3，Number a4，Number b4，Number c4，Number d4

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/matrix3d.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**

<a href="swanide://fragment/179c20a48d4a919e3e18e95da7fc1a431574230021425" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <view class="animation-element-wrapper">
        <view class="animation-element" animation="{{animation}}"></view>
    </view>
    <view class="card-area">
        <view class="top-description border-bottom">展示动画</view>
        <button type="primary" bindtap="matrix3d">matrix3d</button>
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
    matrix3d() {
        this.animation.matrix3d(
            1,0,0,0,
            0,1,0,0,
            0,0,1,0,
            -50,-100,0,1
        ).step()
        // 根据matrix3d(scalex,0,0,0,skewx,scaley,0,0,0,0,scalez,0,translatex,translatey,translatez,1)变化规则
        //上面相当于 scale3d(1,1,1)  translate3d(-50, -100, 0)  rotate3d(0, 0, 0, 0deg) skew(0deg, 0deg)
        //可写成如下形式
        // this.animation.scale3d(1,1,1)
        // .translate3d(-50, -100, 0) 
        // .rotate3d(0, 0, 0, 0)
        // .skew(0, 0)
        // .step()
        this.setData({animation: this.animation.export()})
    }
});
```
 


