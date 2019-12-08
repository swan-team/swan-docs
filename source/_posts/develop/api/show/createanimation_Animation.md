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

**代码示例1 - 动画队列**

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

**代码示例2 - 动画样式设置**

<a href="swanide://fragment/2fb5684d1d02b0b2b389174ea0a1136b1575537062260" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <view class="anim" bindtap="startToAnimate" animation="{{animationData}}"></view>
</view>
```

* 在 js 文件中

```js
Page({
    /* eslint-enable */
    data: {
        animationData: {}
    },
    startToAnimate() {
        const animation = swan.createAnimation({
            transformOrigin: "50% 50%",
            duration: 1000,
            timingFunction: "linear",
            delay: 0
        });
        animation.opacity(0.5);
        animation.backgroundColor('#DC143C');
        animation.rotate(90).translateY(10).step();
        animation.rotate(-90).translateY(-10).step();
        this.setData({
            animationData: animation.export()
        });
        console.log('createAnimation', animation);
    }
});
```


**代码示例3 - 动画宽高设置**

<a href="swanide://fragment/933d1f771edd2968879fe952d832da341575537199303" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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
        const animation = swan.createAnimation({
            transformOrigin: "50% 50%",
            duration: 1000,
            timingFunction: "linear",
            delay: 0
        });
        animation.opacity(0.5);
        animation.backgroundColor('#DC143C');
        animation.width('20px');
        animation.height('70px');
        animation.top('40px');
        animation.left('90px');
        animation.bottom('60px');
        animation.right('80px');
        animation.rotate(90).translateY(10).step();
        animation.rotate(-90).translateY(-10).step();
        this.setData({
            animationData: animation.export()
        });
        console.log('createAnimation', animation);
    }
});
```

**代码示例4 - 吸顶操作示例**

<a href="swanide://fragment/696eb31b135a4bf21271fcabbfdca0c51575810037687" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <view class="top-bar" s-if="{{fixTopBar}}">
        <view class="fixTopBarBlock" style="height:{{statusBarHeight}}px" animation="{{animationData}}"></view>
        <view animation="{{animationData}}" class="fixTopBar flex" style="top:{{statusBarHeight}}">
            <view class="fixTopBarText">百度智能小程序</view>
        </view>
    </view>
    <view class="group-hd" style="margin-top:{{statusBarHeight}}px">
        logo
    </view>
    <view class="search">
        <view class="search-box">
            <text>搜索框</text>
        </view>
    </view>
    <view class="card-area" style="height: 800px">
        <view class="flex">content</view>
    </view>
</view>

```

* 在 js 文件中

```js
Page({
    data: {
        statusBarHeight: 0,
        fixTop: '', // 区域离顶部的高度
        scrollTop: 0, // 滑动条离顶部的距离
        fixTopBar: false
    },
    onLoad() {
        const t = this;
        swan.getSystemInfo({
            success: res => {
                this.setData({
                    "statusBarHeight": res.statusBarHeight
                })
            }
        });
        swan.createSelectorQuery().select(".group-logo").boundingClientRect(function(rect) {
            console.log('rect.top :::', rect.top);
            t.setData({
                fixTop: rect.top,
            })
        }).exec();
    },
    onPageScroll(res) {
        console.log('res.scrollTop :::', res.scrollTop);
        let fixTop = this.getData('fixTop');
        if (res.scrollTop > fixTop) {
            this.setData({'fixTopBar': true});
            const animation = swan.createAnimation({
                duration: 1000,
                timingFunction: "ease-out",
                delay: 0
            });
        } else {
            this.setData({'fixTopBar': false});
        }
    }
});
```





