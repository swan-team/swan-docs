---
title: 动画
header: develop
nav: api
sidebar: show_createanimation
---
## swan.createAnimation

**解释：**创建一个动画实例 animation

**参数：**Object

**Object 参数说明：**

|参数名 |类型  |必填  |默认值  |说明|
|---- | ---- | ---- | ----- |---- |
|duration |Integer | 否|  400 | 动画持续时间，单位 ms 。|
|timingFunction |String | 否|  ‘linear’| 定义动画的效果 |
|delay|Integer | 否|  0 | 动画延迟时间，单位 ms 。|
|transformOrigin|String | 否|  ‘50% 50% 0’ | 动画 |

**timingFunction 有效值：**

|值   |说明  |
|---- | ---- |
|linear|以相同速度开始至结束。|
|ease|慢速开始，然后变快，然后慢速结束。|
|ease-in|慢速开始的过渡效果。|
|ease-in-out|动画以低速开始和结束。|
|ease-out|动画以低速结束。|
|step-start|动画第一帧就跳至结束状态直到结束。|
|step-end|动画一直保持开始状态，最后一帧跳到结束状态。|

```
var animation = swan.createAnimation({
  transformOrigin: "50% 50%",
  duration: 1000,
  timingFunction: "ease",
  delay: 0
});
```


## swan.animation

**解释：**动画实例可以调用以下方法来描述动画，调用结束后会返回自身，支持链式调用的写法。

**animation方法列表**

普通样式：

|方法|参数|说明|
|----|----|----|
|opacity|value|透明度，参数范围 0~1|
|backgroundColor|color|颜色值|
|width|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值。|
|height|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值。|
|top|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值。|
|left|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值。|
|bottom|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值。|
|right|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值。|

旋转：

|方法|参数|说明|
|----|----|----|
|rotate|deg|deg的范围-180~180，从原点顺时针旋转一个 deg 角度。|
|rotateX|deg|deg的范围-180~180，在X轴旋转一个 deg 角度。|
|rotateY|deg|deg的范围-180~180，在Y轴旋转一个 deg 角度。|
|rotateZ|deg|deg的范围-180~180，在Z轴旋转一个 deg 角度。|
|rotate3d|(x,y,z,deg)|同 transform-function rotate3d。|

缩放：

|方法|参数|说明|
|----|----|----|
|scale|sx,[sy]|一个参数时，表示在X轴、Y轴同时缩放sx倍数；两个参数时表示在X轴缩放sx倍数，在Y轴缩放sy倍数。|
|scaleX|sx|在X轴缩放sx倍数|
|scaleY|sy|在Y轴缩放sy倍数|
|scaleZ|sz|在Z轴缩放sy倍数|
|scale3d|(sx,sy,sz)|在X轴缩放sx倍数，在Y轴缩放sy倍数，在Z轴缩放sz倍数。|


偏移：

|方法|参数|说明|
|----|----|----|
|translate|tx,[ty]|一个参数时，表示在X轴偏移 tx ，单位 px ；两个参数时，表示在 X 轴偏移 tx ，在 Y 轴偏移 ty ，单位 px 。|
|translateX|tx|在 X 轴偏移 tx ，单位 px。|
|translateY|ty|在 Y 轴偏移 tx ，单位 px。|
|translateZ|tz|在 Z 轴偏移 tx ，单位 px。|
|translate3d|(tx,ty,tz)|在 X 轴偏移 tx ，在 Y 轴偏移 ty ，在 Z 轴偏移 tz，单位 px。|

倾斜：

|方法|参数|说明|
|----|----|----|
|skew|ax,[ay]|参数范围-180~180；一个参数时， Y 轴坐标不变， X 轴坐标延顺时针倾斜 ax 度；两个参数时，分别在 X 轴倾斜 ax 度，在 Y 轴倾斜 ay 度。|
|skewX|ax|参数范围-180~180；Y 轴坐标不变， X 轴坐标延顺时针倾斜 ax 度。|
|skewY|ay|参数范围-180~180；X 轴坐标不变， Y 轴坐标延顺时针倾斜 ay 度。|


矩阵变形：

|方法|参数|说明|
|----|----|----|
|matrix|(a,b,c,d,tx,ty)|同transform-function matrix|
|matrix3d|matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)|3D转换，同transform-function matrix。|


#### 动画队列
调用动画操作方法后要调用 step() 来表示一组动画完成，可以在一组动画中调用任意多个动画方法，一组动画中的所有动画会同时开始，一组动画完成后才会进行下一组动画。


**示例：**

```js
<view bind:tap="starttoanimate" animation="{{animationData}}"></view>
```

```js
Page({
    data: {
        animationData: {}
    },
    starttoanimate: function () {
        var animation = swan.createAnimation();
        animation.rotate(90).translateY(10).step();
        animation.rotate(-90).translateY(-10).step();
        this.setData({
            animationData: animation.export()
        });
    }
});
```
