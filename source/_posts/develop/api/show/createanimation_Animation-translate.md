---
title: Animation.translate
header: develop
nav: api
sidebar: createanimation_Animation-translate
---
 
 
**解释**： 平移变换


 
## 方法参数

Number tx，Number ty 

### 参数说明

一个参数时，表示在X轴偏移 tx ，单位 px ；两个参数时，表示在 X 轴偏移 tx ，在 Y 轴偏移 ty ，单位 px 。 
## 示例

<a href="swanide://fragment/8056f13727c80924cfc13a7549c6a0591574217300222" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>
 
### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/translate.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/translate.gif">
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
        <button type="primary" bindtap="translate">translate</button>
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
    translate() {
      this.animation.translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step()
      this.setData({animation: this.animation.export()})
    }
});
```
