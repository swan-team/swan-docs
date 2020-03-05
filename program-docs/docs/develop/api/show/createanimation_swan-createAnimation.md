---
title:  swan.createAnimation
header: develop
nav: api
sidebar:  createanimation_swan-createAnimation
# webUrl: https://qft12m.smartapps.cn/swan-api/createAnimation/createAnimation
---
 

**解释**：创建一个动画实例 animation

 
## 方法参数 

Object object

### 返回值 

Animation

### `object`参数说明  

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|duration |Number | 否|  400 | 动画持续时间，单位 ms 。|
|timingFunction |String | 否|  `‘linear’`| 定义动画的效果 |
|delay|Number| 否|  0 | 动画延迟时间，单位 ms 。|
|transformOrigin|String | 否|  `‘50% 50% 0’` | 动画 |

###  timingFunction 有效值 

|值   |说明  |
|---- | ---- |
|linear|以相同速度开始至结束。|
|ease|慢速开始，然后变快，然后慢速结束。|
|ease-in|慢速开始的过渡效果。|
|ease-in-out|动画以低速开始和结束。|
|ease-out|动画以低速结束。|
|step-start|动画第一帧就跳至结束状态直到结束。|
|step-end|动画一直保持开始状态，最后一帧跳到结束状态。|
## 示例

 
### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_createAnimation.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>
 

###  代码示例1 - 参数默认值 

<a href="swanide://fragment/2b99313e6124854e7ffe54d1e1ee320a1575536093402" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

:::codeTab

``` swan
<view class="wrap">
    <view class="anim" bindtap="startToAnimate" animation="{{animationData}}"></view>
</view>
```

 

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
        console.log('createAnimation', animation);
    }
});
```
:::
###  代码示例2 -  timingFunction 为 ease 

<a href="swanide://fragment/e466434396978ea4a228da5272a6a0b11575533878659" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

:::codeTab

``` swan
<view class="wrap">
    <view class="anim" bindtap="startToAnimate" animation="{{animationData}}"></view>
</view>
```

 

```js
Page({
    data: {
        animationData: {}
    },
    startToAnimate() {
        const animation = swan.createAnimation({
            transformOrigin: "50% 50%",
            duration: 1000,
            timingFunction: "ease",
            delay: 0
        });
        animation.rotate(90).translateY(10).step();
        this.setData({
            animationData: animation.export()
        });
        console.log('createAnimation', animation);
    }
});
```
:::

###  代码示例3 -  timingFunction 为 ease-in 

<a href="swanide://fragment/b63fc78554c902435c7b32a40a08bdf31575534055060" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

:::codeTab

``` swan
<view class="wrap">
    <view class="anim" bindtap="startToAnimate" animation="{{animationData}}"></view>
</view>
```

 

```js
Page({
    data: {
        animationData: {}
    },
    startToAnimate() {
        const animation = swan.createAnimation({
            transformOrigin: "50% 50%",
            duration: 1000,
            timingFunction: "ease-in",
            delay: 0
        });
        animation.rotate(90).translateY(10).step();
        animation.rotate(-90).translateY(-10).step();
        this.setData({
            animationData: animation.export()
        });
        console.log('createAnimation', animation);
    }
});
```
:::
###  代码示例4 -  timingFunction 为 ease-in-out 

<a href="swanide://fragment/f34ed45f470671beb1732d8729581a3a1575534121123" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

:::codeTab

``` swan
<view class="wrap">
    <view class="anim" bindtap="startToAnimate" animation="{{animationData}}"></view>
</view>
```

 

```js
Page({
    data: {
        animationData: {}
    },
    startToAnimate() {
        const animation = swan.createAnimation({
            transformOrigin: "50% 50%",
            duration: 1000,
            timingFunction: "ease-in-out",
            delay: 0
        });
        animation.rotate(90).translateY(10).step();
        animation.rotate(-90).translateY(-10).step();
        this.setData({
            animationData: animation.export()
        });
        console.log('createAnimation', animation);
    }
});
```
:::
###  代码示例5 -  timingFunction 为 ease-out 

<a href="swanide://fragment/4b8aed636df950a084cf88bde89de77d1575534170504" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

:::codeTab

``` swan
<view class="wrap">
    <view class="anim" bindtap="startToAnimate" animation="{{animationData}}"></view>
</view>
```

 

```js
Page({
    data: {
        animationData: {}
    },
    startToAnimate() {
        const animation = swan.createAnimation({
            transformOrigin: "50% 50%",
            duration: 1000,
            timingFunction: "ease-out",
            delay: 0
        });
        animation.rotate(90).translateY(10).step();
        animation.rotate(-90).translateY(-10).step();
        this.setData({
            animationData: animation.export()
        });
        console.log('createAnimation', animation);
    }
});
```
:::
###  代码示例6 -  timingFunction 为 step-start 

<a href="swanide://fragment/279aa3563aef02de8fa928a6f08d95661575534229419" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

:::codeTab

``` swan
<view class="wrap">
    <view class="anim" bindtap="startToAnimate" animation="{{animationData}}"></view>
</view>
```

 

```js
Page({
    data: {
        animationData: {}
    },
    startToAnimate() {
        const animation = swan.createAnimation({
            transformOrigin: "50% 50%",
            duration: 1000,
            timingFunction: "step-start",
            delay: 0
        });
        animation.rotate(90).translateY(10).step();
        animation.rotate(-90).translateY(-10).step();
        this.setData({
            animationData: animation.export()
        });
        console.log('createAnimation', animation);
    }
});
```
:::
###  代码示例7 -  timingFunction 为 step-end 

<a href="swanide://fragment/2df316195a9893a4ebc2e46d844778b01575534267520" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

:::codeTab

``` swan
<view class="wrap">
    <view class="anim" bindtap="startToAnimate" animation="{{animationData}}"></view>
</view>
```

 

```js
Page({
    data: {
        animationData: {}
    },
    startToAnimate() {
        const animation = swan.createAnimation({
            transformOrigin: "50% 50%",
            duration: 1000,
            timingFunction: "step-end",
            delay: 0
        });
        animation.rotate(90).translateY(10).step();
        animation.rotate(-90).translateY(-10).step();
        this.setData({
            animationData: animation.export()
        });
        console.log('createAnimation', animation);
    }
});
```
:::


