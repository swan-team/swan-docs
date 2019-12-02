---
title: Animation
header: develop
nav: api
sidebar: createanimation_Animation
---
 
 
**解释**：动画实例可以调用以下方法来描述动画，调用结束后会返回自身，支持链式调用的写法。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/Animation.png"  class="demo-qrcode-image" />

普通样式：

|属性|参数|说明|
|----|----|----|
|opacity|value|透明度，参数范围 0~1|
|backgroundColor|color|颜色值|
|width|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值。|
|height|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值。|
|top|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值。|
|left|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值。|
|bottom|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值。|
|right|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值。|

#### 动画队列
调用动画操作方法后要调用 step() 来表示一组动画完成，可以在一组动画中调用任意多个动画方法，一组动画中的所有动画会同时开始，一组动画完成后才会进行下一组动画。

**图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/createAnimation.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**

<a href="swanide://fragment/c1cd19f4bd6c53b0c272aa1d2bce10481557729887965" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <view class="anim" bindtap="startToAnimate" animation="{{animationData}}"></view>
</view>
```

* 在 js 文件中

```js
Page({
    data: {
        animationData: {}
    },
    startToAnimate() {
        const animation = swan.createAnimation();
        animation.rotate(90).translateY(10).step();
        animation.rotate(-90).translateY(-10).step();
        this.setData({
            animationData: animation.export()
        });
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}

.anim {
    width: 100%;
    height: 280rpx;
    background: #38f;
}
```




