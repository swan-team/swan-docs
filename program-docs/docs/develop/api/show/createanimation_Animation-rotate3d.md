---
title: Animation.rotate3d
header: develop
nav: api
sidebar: createanimation_Animation-rotate3d
---
 
**解释**：从 X 轴顺时针旋转一个角度

 
## 方法参数

Number x，Number y，Number z，Number deg

### 参数说明 

同 transform-function rotate3d。
## 示例

<a href="swanide://fragment/967fb90e26393d8299ea78a8331458af1574215196061" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a> 

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/rotate3d.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/rotate3d.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### 代码示例 



* 在 swan 文件中

```html
<view class="wrap">
    <view class="animation-element-wrapper">
        <view class="animation-element" animation="{{animation}}"></view>
    </view>
    <view class="card-area">
        <view class="top-description border-bottom">展示动画</view>
        <button type="primary" bindtap="rotate3d">rotate3d</button>
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
    rotate3d() {
      this.animation.rotate3d(Math.random() * 720 - 360,Math.random() * 720 - 360,Math.random() * 720 - 360,Math.random() * 720 - 360).step()
      this.setData({animation: this.animation.export()})
    }
});
```


