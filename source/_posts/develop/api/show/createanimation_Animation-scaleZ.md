---
title: Animation.scaleZ
header: develop
nav: api
sidebar:  createanimation_Animation-scaleZ
---
 
 
 
**解释**： 缩放 Z 轴

 方法参数 ：Number sz 

 参数说明 ： 在Z轴缩放sz倍数

## 示例

 
### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_setBackgroundColor.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/scaleZ.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### 代码示例 


<a href="swanide://fragment/0eb6eb94ba768e31adaa5792d2f016801575978296674" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <view class="animation-element-wrapper">
        <view class="animation-element" animation="{{animation}}"></view>
    </view>
    <view class="card-area">
        <view class="top-description border-bottom">展示动画</view>
        <button type="primary" bindtap="scaleZ">scaleZ</button>
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
    scaleZ() {
        let rotate = (Math.random() * 2).toFixed(2)
        this.animation.scaleZ(rotate).step()
        this.setData({animation: this.animation.export()})
        swan.showToast({
            title: 'z轴旋转角度为' + rotate,
            icon: 'none'
        });
    }
});
```
