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

**代码示例5 - 底部弹窗自定义动画**

<a href="swanide://fragment/635ca5d644048d79aac1973429d13ea01575815268239" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<button catchtap='clickPup' type="primary">点击底部动画弹窗</button>
 
<view class='content {{click? "showContent": "hideContent"}} {{option? "open": "close"}}' hover-stop-propagation='true'>
    <view class='content-top' s-for="item in list">
      {{item}}
    </view>
</view>

```

* 在 js 文件中

```js
Page({
    data: {
        click: false, //是否显示弹窗内容
        option: false, //是否显示弹窗或关闭弹窗的操作动画
        list: ['列表一','列表二','列表三','列表四']
    },
    clickPup: function() {
        let that = this;
        if (!that.data.click) {
            that.setData({
                click: true,
            })
        }
        if (that.data.option) {
            that.setData({
                option: false,
            })
            // 关闭显示弹窗动画的内容，若不设则点击任何地方，都会出现弹窗
            setTimeout(() => {
                that.setData({
                    click: false,
                })
            }, 500)
        } else {
            that.setData({
                option: true
            })
        }
    }
});
```







