---
title: Animation.rotateZ
header: develop
nav: api
sidebar: createanimation_Animation-rotateZ
---
 
 
**解释**：从 Z 轴顺时针旋转一个角度

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/rotateZ.png"  class="demo-qrcode-image" />

**方法参数**：Number deg

**参数说明**：deg的范围-180~180，在Z轴旋转一个 deg 角度。

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/rotateZ.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**

<a href="swanide://fragment/bbb65118596a39f340f44947d884dbf01574214781024" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <view class="animation-element-wrapper">
        <view class="animation-element" animation="{{animation}}"></view>
    </view>
    <view class="card-area">
        <view class="top-description border-bottom">展示动画</view>
        <button type="primary" bindtap="rotateZ">rotateZ</button>
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
    rotateZ() {
      this.animation.rotateZ(Math.random() * 720 - 360).step()
      this.setData({animation: this.animation.export()})
    }
});
```


