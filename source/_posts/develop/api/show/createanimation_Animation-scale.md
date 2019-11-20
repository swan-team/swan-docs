---
title: Animation.scale
header: develop
nav: api
sidebar: createanimation_Animation-scale
---
 
 
**解释**： 缩放

**方法参数**：Number sx，Number sy

**参数说明**： 一个参数时，表示在X轴、Y轴同时缩放sx倍数；两个参数时表示在X轴缩放sx倍数，在Y轴缩放sy倍数。

**代码示例**


<a href="swanide://fragment/07bb885f4de5eb9cad29e066db3598bd1574216183265" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <view class="animation-element-wrapper">
        <view class="animation-element" animation="{{animation}}"></view>
    </view>
    <view class="card-area">
        <view class="top-description border-bottom">展示动画</view>
        <button type="primary" bindtap="scale">scale</button>
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
    scale() {
      this.animation.scale(Math.random() * 2, Math.random() * 3).step()
      this.setData({animation: this.animation.export()})
    }
});
```
