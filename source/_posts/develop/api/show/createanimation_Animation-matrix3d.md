---
title: Animation.matrix3d
header: develop
nav: api
sidebar: createanimation_Animation-matrix3d
---
 
 
**解释**： 3D转换，同[transform-function matrix](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d)。

**方法参数**： Number a1，Number b1，Number c1，Number d1，Number a2，Number b2，Number c2，Number d2，Number a3，Number b3，Number c3，Number d3，Number a4，Number b4，Number c4，Number d4

**代码示例**

<a href="swanide://fragment/359696e8b5cbc2dcb69506aebcf5967f1574218962056" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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
            -50,-100,0,1.1
        ).step()
        this.setData({animation: this.animation.export()})
    }
});
```
 


