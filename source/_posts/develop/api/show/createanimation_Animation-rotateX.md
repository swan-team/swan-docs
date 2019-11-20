---
title: Animation.rotateX
header: develop
nav: api
sidebar: createanimation_Animation-rotateX
---
 
 
**解释**：从 X 轴顺时针旋转一个角度

**方法参数**：Number deg

**参数说明**：deg的范围-180~180，在X轴旋转一个 deg 角度。

**代码示例**

<a href="swanide://fragment/a9fc825b1b35446d0ee687d664d3b1821574215484188" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <view class="animation-element-wrapper">
        <view class="animation-element" animation="{{animation}}"></view>
    </view>
    <view class="card-area">
        <view class="top-description border-bottom">展示动画</view>
        <button type="primary" bindtap="rotateX">rotateX</button>
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
    rotateX() {
      this.animation.rotateX(Math.random() * 720 - 360).step()
      this.setData({animation: this.animation.export()})
    }
});
```
