---
title: Animation.skewY
header: develop
nav: api
sidebar: createanimation_Animation-skewY
---
 
 
**解释**：对 Y 轴坐标进行倾斜 

 
## 方法参数 

Number ay: 参数范围-180~180；X 轴坐标不变， Y 轴坐标延顺时针倾斜 ay 度。
## 示例
<a href="swanide://fragment/f72586cc72c18153d42220df8f0394fd1574218409844" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>
 
### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/skewY.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/skewY.gif">
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
        <button type="primary" bindtap="skewY">skewY</button>
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
    skewY() {
        this.animation.skewY(Math.random() * 90).step()
        this.setData({animation: this.animation.export()})
    }
});
```
