---
title: movable-view 可移动视图容器
header: develop
nav: component
sidebar: view_movable-view
---

 


**解释**：可移动的视图容器，在页面中可以拖拽滑动。movable-view必须在[movable-area](https://smartprogram.baidu.com/docs/develop/component/view_movable-area/)组件中，并且必须是直接子节点，否则不能移动。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/movableView.png"  class="demo-qrcode-image" />

## **属性说明**

|属性名 |类型  |默认值  | 必填 |说明|
|---- | ---- | ---- |---- |
| direction | String  | none  | 否 |movable-view 的移动方向，属性值有 all 、 vertical 、 horizontal 、 none |
| inertia | Boolean | false | 否 |movable-view 是否带有惯性|
|out-of-bounds| Boolean | false | 否 |超过可移动区域后，movable-view 是否还可以移动。|
|x	| Number |   | 否 |定义 x 轴方向的偏移，如果 x 的值不在可移动范围内，会自动移动到可移动范围；改变 x 的值会触发动画。|
| y | Number  | | 否 |定义 y 轴方向的偏移，如果 y 的值不在可移动范围内，会自动移动到可移动范围；改变 y 的值会触发动画。|
| damping | Number |20 | 否 |阻尼系数，用于控制 x 或 y 改变时的动画和过界回弹的动画，值越大移动越快。|
| friction | Number |2	  | 否 |摩擦系数，用于控制惯性滑动的动画，值越大摩擦力越大，滑动越快停止；必须大于 0，否则会被设置成默认值。|
| disabled | Boolean |false | 否 |是否禁用   |
| scale | Boolean |false | 否 |是否支持双指缩放，默认缩放手势生效区域是在movable-view内。 |
| scale-min | Number |0.5 | 否 |定义缩放倍数最小值   |
| scale-max | Number |10 | 否 |定义缩放倍数最大值   |
| scale-value | Number |1 | 否 |定义缩放倍数，取值范围为 0.5 - 10  。 |
|animation|Boolean|true| 否 |是否使用动画|
| bindchange | EventHandle | | 否 |拖动过程中触发的事件，event.detail = {x: x, y: y, source: source}，其中source表示产生移动的原因，值可为touch（拖动）。|
| bindscale | EventHandle | | 否 |缩放过程中触发的事件，event.detail = {x: x, y: y, scale: scale} |
| htouchmove | EventHandle | | 否 |手指初次触摸后发生横向移动，如果catch此事件，则意味着touchmove事件也被catch|
|vtouchmove| EventHandle | | 否 |手指初次触摸后发生纵向移动，如果catch此事件，则意味着touchmove事件也被catch|

### **direction 有效值**

| 值 | 说明 |
| ---- | ---- |
| all | 水平方向和垂直方向 |
| vertical | 垂直方向 |
| horizontal | 水平方向 |
| none | 不可移动 |

## 示例
### **图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/movable-view.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### **代码示例**

<a href="swanide://fragment/34026129ece94156c05e4567f773288e1565511303256" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="container">
    <view class="section">
        <view class="content-title">
            movable-view区域小于movable-area
        </view>
        <movable-area>
            <movable-view x="{=x=}" y="{=y=}" damping="20" disabled="false" direction="all">text</movable-view>
        </movable-area>
        <button bind:tap="move" class="move-button" type="primary">点击移动到 (30px, 30px)</button>
    </view>
    <view class="section">
        <view class="content-title">
            movable-view区域大于movable-area
        </view>
        <movable-area>
            <movable-view class="bigger-area" direction="all">text</movable-view>
        </movable-area>
    </view>
    <view class="section">
        <view class="content-title">
            只可以横向移动
        </view>
        <movable-area htouchmove>
            <movable-view direction="horizontal">text</movable-view>
        </movable-area>
    </view>
    <view class="section">
        <view class="content-title">
            只可以纵向移动
        </view>
        <movable-area vtouchmove>
            <movable-view direction="vertical">text</movable-view>
        </movable-area>
    </view>
    <view class="section">
        <view class="content-title">
            可超出边界
        </view>
        <movable-area>
            <movable-view direction="all" out-of-bounds>text</movable-view>
        </movable-area>
    </view>
    <view class="section">
        <view class="content-title">
            带有惯性
        </view>
        <movable-area>
            <movable-view direction="all" inertia friction="1">text</movable-view>
        </movable-area>
    </view>
    <view class="section">
        <view class="content-title">
            可放缩
        </view>
        <movable-area>
            <movable-view direction="all" animation="false" bindchange="onChange" bindscale="onScale" scale scale-min="0.5" scale-max="4" scale-value="{{scale}}">
                text
            </movable-view>
        </movable-area>
        <button bind:tap="scale" class="scale-button" type="primary">点击放大3倍</button>
    </view>
</view>
```

* 在 js 文件中

```js
Page({
    data: {
        title: 'movable-view',
        x: 0,
        y: 0,
        scale: 2
    },
    move() {
        this.setData({
            x: 30,
            y: 30
        })
    },
    scale() {
        this.setData({
            scale: 3
        })
    },
    onChange(e) {
        console.log(e.detail)
    },
    onScale(e) {
        console.log(e.detail)
    }
});
```


## **Bug & Tip**

* Tip：movable-view 必须设置 width 和 height 属性，不设置默认为 10px。
* Tip：movable-view 默认为绝对定位，top 和 left 属性为 0px。
* Tip：当 movable-view 小于 movable-area 时，movable-view 的移动范围是在 movable-area 内。
* Tip：当 movable-view 大于 movable-area 时，movable-view 的移动范围必须包含 movable-area（x 轴方向和 y 轴方向分开考虑）。
* Tip：movable-view 必须在组件中，并且必须是直接子节点，否则不能移动。
