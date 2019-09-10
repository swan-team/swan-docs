---
title: 动画
header: develop
nav: api
sidebar: show_createanimation
---
## swan.createAnimation

**解释**：创建一个动画实例 animation

**方法参数**：Object object

**返回值**：animation

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
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

**示例**：

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


## Animation

**解释**：动画实例可以调用以下方法来描述动画，调用结束后会返回自身，支持链式调用的写法。

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


**示例**：

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




##  Animation.rotate

**解释**：从原点顺时针旋转一个角度

**方法参数**：Number deg

**参数说明**：deg的范围-180~180，从原点顺时针旋转一个 deg 角度。

##  Animation.rotateX
 
**解释**：从 X 轴顺时针旋转一个角度

**方法参数**：Number deg

**参数说明**：deg的范围-180~180，在X轴旋转一个 deg 角度。

##  Animation.rotateY
 
**解释**：从 Y 轴顺时针旋转一个角度

**方法参数**：Number deg

**参数说明**：deg的范围-180~180，在Y轴旋转一个 deg 角度。

##  Animation.rotateZ

**解释**：从 Z 轴顺时针旋转一个角度

**方法参数**：Number deg

**参数说明**：deg的范围-180~180，在Z轴旋转一个 deg 角度。


##  Animation.rotate3d
 
**解释**：从 X 轴顺时针旋转一个角度

**方法参数**：Number x，Number y，Number z，Number deg

**参数说明**：同 transform-function rotate3d。

##  Animation.scale
 
**解释**： 缩放

**方法参数**：Number sx，Number sy

**参数说明**： 一个参数时，表示在X轴、Y轴同时缩放sx倍数；两个参数时表示在X轴缩放sx倍数，在Y轴缩放sy倍数。

##  Animation.scaleX
 
**解释**： 缩放 X 轴

**方法参数**： Number sx

**参数说明**： 在X轴缩放sx倍数

##  Animation.scaleY
 
**解释**： 缩放 Y 轴

**方法参数**： Number sy

**参数说明**： 在Y轴缩放sy倍数

##  Animation.scaleZ
 
**解释**： 缩放 Z 轴

**方法参数**：Number sz 

**参数说明**： 在Z轴缩放sy倍数

##  Animation.scale3d
 
**解释**： 缩放

**方法参数**： Number sx，Number sy，Number sz

**参数说明**： 在X轴缩放sx倍数，在Y轴缩放sy倍数，在Z轴缩放sz倍数。
 

##  Animation.translate
 
**解释**： 平移变换

**方法参数**： Number tx，Number ty 

**参数说明**：一个参数时，表示在X轴偏移 tx ，单位 px ；两个参数时，表示在 X 轴偏移 tx ，在 Y 轴偏移 ty ，单位 px 。 

##  Animation.translateX
 
**解释**： 对 X 轴平移

**方法参数**：Number tx 

**参数说明**： 在 X 轴偏移 tx ，单位 px。

##  Animation.translateY
 
**解释**： 对 Y 轴平移

**方法参数**：Number  ty  

**参数说明**：在 Y 轴偏移 tx ，单位 px。 

##  Animation.translateZ
 
**解释**： 对 Z 轴平移

**方法参数**： Number  tz

**参数说明**： 在 Z 轴偏移 tx ，单位 px。

##  Animation.translate3d

**解释**： 对 X、Y、Z 坐标进行平移变换

**方法参数**：Number tx，Number ty，Number tz 

**参数说明**： 在 X 轴偏移 tx ，在 Y 轴偏移 ty ，在 Z 轴偏移 tz，单位 px。
 
##  Animation.skew
 
**解释**： 对 X、Y 轴坐标进行倾斜

**方法参数**： Number ax，Number ay

**参数说明**： 参数范围-180~180；一个参数时， Y 轴坐标不变， X 轴坐标延顺时针倾斜 ax 度；两个参数时，分别在 X 轴倾斜 ax 度，在 Y 轴倾斜 ay 度。

##  Animation.skewX

**解释**： 对 X 轴坐标进行倾斜

**方法参数**：  Number ax

**参数说明**： 参数范围-180~180；Y 轴坐标不变， X 轴坐标延顺时针倾斜 ax 度。

##  Animation.skewY

**解释**：对 Y 轴坐标进行倾斜 

**方法参数**：Number ay

**参数说明**： 参数范围-180~180；X 轴坐标不变， Y 轴坐标延顺时针倾斜 ay 度。
 
##  Animation.matrix
 
**解释**： 同[transform-function matrix](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix)

**方法参数**： Number a，Number b，Number c，Number d 

 

##  Animation.matrix3d
 
**解释**： 3D转换，同[transform-function matrix](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d)。

**方法参数**： Number a1，Number b1，Number c1，Number d1，Number a2，Number b2，Number c2，Number d2，Number a3，Number b3，Number c3，Number d3，Number a4，Number b4，Number c4，Number d4




