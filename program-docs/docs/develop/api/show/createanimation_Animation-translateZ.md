---
title: Animation.translateZ
header: develop
nav: api
sidebar: createanimation_Animation-translateZ
---
 
 
**解释**： 对 Z 轴平移

## 方法参数

 Number  tz

### 参数说明 

 在 Z 轴偏移 tz ，单位 px。
## 示例

 
<a href="swanide://fragment/c9f670823000fa5ceae46e032693f9a11575978462387" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

###  图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/translateZ.gif">
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
        <button type="primary" bindtap="translateZ">translateZ</button>
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
    translateZ() {
        let distance = (Math.random() * 2).toFixed(2)
        this.animation.translateZ(distance).step()
        this.setData({animation: this.animation.export()})
        swan.showToast({
            title: 'z轴的平移距离为' + distance,
            icon: 'none'
        });
    }
});
```
