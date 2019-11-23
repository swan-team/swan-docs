---
title:  swan.createAnimation
header: develop
nav: api
sidebar:  createanimation_swan-createAnimation
---
 

**解释**：创建一个动画实例 animation

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_createAnimation.png"  class="demo-qrcode-image" />

**方法参数**：Object object

**返回值**：animation

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|duration |Number | 否|  400 | 动画持续时间，单位 ms 。|
|timingFunction |String | 否|  `‘linear’`| 定义动画的效果 |
|delay|Number| 否|  0 | 动画延迟时间，单位 ms 。|
|transformOrigin|String | 否|  `‘50% 50% 0’` | 动画 |

**timingFunction 有效值**：

|值   |说明  |
|---- | ---- |
|linear|以相同速度开始至结束。|
|ease|慢速开始，然后变快，然后慢速结束。|
|ease-in|慢速开始的过渡效果。|
|ease-in-out|动画以低速开始和结束。|
|ease-out|动画以低速结束。|
|step-start|动画第一帧就跳至结束状态直到结束。|
|step-end|动画一直保持开始状态，最后一帧跳到结束状态。|

**图片示例**：

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

**代码示例**：

<a href="swanide://fragment/bfccb9e8f50ca3284a700afc804ff0cc1557729832832" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="createAnimation">createAnimation</button>
</view>
```

* 在 js 文件中

```js
Page({
    createAnimation() {
        const animation = swan.createAnimation({
            transformOrigin: "50% 50%",
            duration: 1000,
            timingFunction: "ease",
            delay: 0
        });

        console.log('createAnimation', animation);
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}
```


