---
title: Animation.matrix
header: develop
nav: api
sidebar:  createanimation_Animation-matrix
---
 
 
 
 
**解释**： 同[transform-function matrix](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix)

**百度APP中扫码体验：**

<img src=" https://b.bdstatic.com/miniapp/assets/images/doc_demo/matrix.png"  class="demo-qrcode-image" />

**方法参数**： Number a，Number b，Number c，Number d 

**代码示例**

<a href="swanide://fragment/c16566dff028c17fbe1454b4bc5ff6c91574218824583" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <view class="animation-element-wrapper">
        <view class="animation-element" animation="{{animation}}"></view>
    </view>
    <view class="card-area">
        <view class="top-description border-bottom">展示动画</view>
        <button type="primary" bindtap="matrix">matrix</button>
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
    matrix() {
        this.animation.matrix(1, 2, 2, 1, 20, 20).step()
        this.setData({animation: this.animation.export()})
    }
});
```

 