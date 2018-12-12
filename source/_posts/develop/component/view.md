---
title: view
header: develop
nav: component
sidebar: view
---

## view

**解释：**视图容器。

**属性说明：**

|属性名 |类型  |默认值  |说明|
|---- | ---- | ---- |---- |
|hover-class | String  |  none  | 指定按下去的样式类。当  hover-class="none"  时，没有点击态效果|
|hover-stop-propagation| Boolean  | false | 指定是否阻止本节点的祖先节点出现点击态|
|hover-start-time| Number | 50 | 按住后多久出现点击态，单位毫秒|
|hover-stay-time| Number |400 |手指松开后点击态保留时间，单位毫秒|

**示例：**
<a href="swanide://fragment/024d24b7832b587bcd18ce43441318d61540395635" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

```xml
<view class="single-text-area">
    <view class="view-more">
        <text>点击加载更多</text>
    </view>
</view>
```
**说明：**
1、 如果需要使用滚动视图，请使用 scroll-view；
2、 从基础库版本1.12.0开始支持事件捕获、冒泡。

## scroll-view
**解释：**可滚动视图区域。

**属性说明：**

|属性名 |类型  |默认值  |说明|
|---- | ---- | ---- |---- |
|scroll-x | Boolean  |  false  | 允许横向滚动|
|scroll-y| Boolean  | false | 允许纵向滚动|
|upper-threshold| Number | 50 | 距顶部/左边多远时（单位 px），触发 scrolltoupper 事件|
|lower-threshold| Number |50 |距底部/右边多远时（单位 px），触发 scrolltolower 事件|
|scroll-top | Number  |-| 设置竖向滚动条位置。要动态设置滚动条位置，用法`scroll-top="{= scrollTop =}"`|
|scroll-left| Number  |-| 设置横向滚动条位置。要动态设置滚动条位置，用法`scroll-left="{= scrollLeft =}"`|
|scroll-into-view | String  |-| 值应为某子元素 id（id 不能以数字开头）,设置滚动方向后，按方向滚动到该元素，动态设置用法`scroll-into-view=”{= scrollIntoView =}”`。|
|scroll-with-animation| Boolean  | false | 在设置滚动条位置时使用动画过渡|
|bindscrolltoupper | EventHandle  |-| 滚动到顶部/左边，会触发 scrolltoupper 事件|
|bindscrolltolower | EventHandle | -|滚动到底部/右边，会触发 scrolltolower 事件|
|bindscroll | EventHandle |-|滚动时触发， event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY} |

**注意：**使用竖向滚动时，需要给 `<scroll-view/>` 一个固定高度，通过 CSS 设置 height。

**示例：**
<a href="swanide://fragment/c25704bc739ef70da95b8c7b7b929aae1540395856" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

```xml
<scroll-view scroll-y style="height: 300px;"
    bind:scrolltoupper="upper" bind:scrolltolower="lower" scroll-into-view="four"
    upper-threshold="10"  lower-threshold="10" scroll-top="150" bind:scroll="myscroll">
    <view id="one" class="bg-red">view1</view>
    <view id="two" class="bg-green">view2</view>
    <view id="three" class="bg-yellow">view3</view>
    <view id="four" class="bg-blue">view4</view>
</scroll-view>
```

```css
.bg-red, .bg-yellow, .bg-blue, .bg-green {
    height: 150px;
    text-align: center;
}
.bg-red {
    background: #FFB6C1;
}
.bg-yellow {
    background: #FFD700;
}
.bg-blue {
    background: #87CEFA;
}
.bg-green {
    background: #98FB98;
}

```

```javascript
Page({
    upper: e => {
        console.log('upper', e);
    },
    lower: e => {
        console.log('lower', e);
    },
    myscroll: e => {
        console.log('scroll', e);
    }
});

```
**说明：**
* 请勿在 scroll-view 中使用 textarea、map、canvas、video 组件；
* scroll-into-view 的优先级低于 scroll-top、scroll-left；
* 在滚动 scroll-view 时会阻止页面回弹，所以在 scroll-view 中滚动，是无法触发 onPullDownRefresh；
* 若要使用下拉刷新，请使用页面的滚动，而不是 scroll-view。

## swiper

**解释：**滑块视图容器。

**属性说明：**

|属性名 |类型  |默认值  |说明|最低版本|
|---- | ---- | ---- |---- |---- |
|indicator-dots | Boolean  |  false  |是否显示面板指示点|- |
|indicator-color| Color  | rgba(0, 0, 0, .3) | 指示点颜色| -|
|indicator-active-color| Color | #333 | 当前选中的指示点颜色件| -|
|autoplay |Boolean  | false |是否自动切换| -|
|current|Number |0 |当前所在页面的 index| -|
|current-item-id|String|""|当前所在滑块的 item-id ，不能与 current 被同时指定|1.11 <p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/tutorial/compatibility/">兼容性处理</a>|
|interval | Number | 5000 |自动切换时间间隔|- |
|duration| Number |500 |滑动动画时长|- |
|circular| Boolean |false |是否采用衔接滑动| -|
|vertical | Boolean  | false  |滑动方向是否为纵向|- |
|previous-margin|String|"0px"|前边距，可用于露出前一项的一小部分|1.11<p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/tutorial/compatibility/">兼容性处理</a>|
|next-margin|String|"0px"|后边距，可用于露出后一项的一小部分|1.11<p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/tutorial/compatibility/">兼容性处理</a>|
|display-multiple-items|Number|1|同时显示的滑块数量|1.11<p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/tutorial/compatibility/">兼容性处理</a>|
|bindchange | EventHandle |  -|current 改变时会触发 change 事件，event.detail = {current: current, source: source}|- |
|bindanimationfinish|EventHandle|- |动画结束时会触发 animationfinish 事件，event.detail 同上|1.11<p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/tutorial/compatibility/">兼容性处理</a>|

**说明：**
其中只可放置`<swiper-item/>`组件，否则会导致未定义的行为。

### swiper-item

**注意：**仅可放置在`<swiper/>`组件中，宽高自动设置为100%。

**属性说明：**

|属性名 |类型  |默认值  |说明|最低版本|
|---- | ---- | ---- |---- |---- |
|item-id|String|""|该swiper-item的标识符|1.11 低版本请做<a href="https://smartprogram.baidu.com/docs/develop/tutorial/compatibility/">兼容性处理</a>|

**示例：**
<a href="swanide://fragment/7213a7a66d2e02cf5a59ad07d810761b1540395545" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

```xml
<swiper indicator-dots="true"
    autoplay="true" interval="3000" duration="500">
    <block s-for="imgUrl in imgs">
        <swiper-item>
            <image src="{{imgUrl}}" class="slide-image" width="355" height="150"/>
        </swiper-item>
    </block>
</swiper>
```

```javascript
Page({
    data: {
        imgs: [
            "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=955704975,2507359007&fm=173&s=32A2DC4D4E12344D4899DCB80300C013&w=218&h=146&img.JPEG",
            "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=984374101,2617012451&fm=173&s=20A24CB176BA0D882C042D700300C092&w=218&h=146&img.JPEG",
            "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1663594687,1286054050&fm=173&s=EAA608C484D2006B5680719A0300E0C1&w=218&h=146&img.JPEG"
        ]
    }
})

```
**说明：**

如果在 bindchange 的事件回调函数中使用 setData 改变 current 值，则有可能导致 setData 被不停地调用，因而通常情况下请在改变 current 值前检测 source 字段来判断是否是由于用户触摸引起。

## movable-area

**解释：**`movable-view` 的可移动区域。
> `movable-area` 必须设置width和height属性，不设置默认为10px。

|属性名	|类型	|默认值|	说明|	
|--|--|--|--|
|scale-area	|Boolean|	false|	当里面的movable-view设置为支持双指缩放时，设置此值可将缩放手势生效区域修改为整个movable-area 。|

### movable-view
**解释：**可移动的视图容器，在页面中可以拖拽滑动。

**属性说明：**

|属性名 |类型  |默认值  |说明|
|---- | ---- | ---- |---- |
| direction | String  | none  |movable-view 的移动方向，属性值有 all 、 vertical 、 horizontal 、 none |
| inertia | Boolean | false |movable-view 是否带有惯性|
|out-of-bounds| Boolean | false |超过可移动区域后，movable-view 是否还可以移动。|
|x	| Number | - |定义 x 轴方向的偏移，如果 x 的值不在可移动范围内，会自动移动到可移动范围；改变 x 的值会触发动画。|
| y | Number  |-|定义 y 轴方向的偏移，如果 y 的值不在可移动范围内，会自动移动到可移动范围；改变 y 的值会触发动画。|
| damping | Number |20 |阻尼系数，用于控制 x 或 y 改变时的动画和过界回弹的动画，值越大移动越快。|
| friction | Number |2	  |摩擦系数，用于控制惯性滑动的动画，值越大摩擦力越大，滑动越快停止；必须大于 0，否则会被设置成默认值。|
| disabled | Boolean |false |是否禁用   |
| scale | Boolean |false |是否支持双指缩放，默认缩放手势生效区域是在movable-view内。 |
| scale-min | Number |0.5 |定义缩放倍数最小值   |
| scale-max | Number |10 |定义缩放倍数最大值   |
| scale-value | Number |1 |定义缩放倍数，取值范围为 0.5 - 10  。 |
|animation|Boolean|true|是否使用动画|
| bindchange | EventHandle | |拖动过程中触发的事件，event.detail = {x: x, y: y, source: source}，其中source表示产生移动的原因，值可为touch（拖动）、out-of-bounds（超出移动范围后的回弹）、inertia（惯性）和空字符串（setData）。|
| bindscale | EventHandle ||缩放过程中触发的事件，event.detail = {x: x, y: y, scale: scale} |
除了基本事件外，movable-view提供了两个特殊事件。

|类型 |触发条件|
|---- | ---- |
|htouchmove|手指初次触摸后发生横向移动，如果catch此事件，则意味着touchmove事件也被catch|
|vtouchmove|手指初次触摸后发生纵向移动，如果catch此事件，则意味着touchmove事件也被catch|

**说明：**
* movable-view 必须设置 width 和 height 属性，不设置默认为 10px；
* movable-view 默认为绝对定位，top 和 left 属性为 0px；
* 当movable-view小于movable-area时，movable-view的移动范围是在movable-area内；
* 当movable-view大于movable-area时，movable-view的移动范围必须包含movable-area（x 轴方向和 y 轴方向分开考虑）；
* movable-view必须在<movable-area/>组件中，并且必须是直接子节点，否则不能移动。

**示例：**

```xml
<view class="movable-view">
    <movable-area style="height: 300px;width: 300px;background: green;">
        <movable-view style="height: 40px; width: 40px; background: black;" x="30" y="30" direction="all">
        </movable-view>
    </movable-area>
</view>
```
## cover-view
**解释： **覆盖在原生组件之上的文本视图，可覆盖的原生组件包括 video 、 canvas 、 camera，只支持嵌套 cover-view 、 cover-image 。

## cover-image

**解释： **覆盖在原生组件之上的图片视图，可覆盖的原生组件同 cover-view ，支持嵌套在 cover-view 里。

**属性说明： **

|属性名 |类型  |默认值  |说明|
|---- | ---- | ---- |---- |
| src | String | |图标路径，支持临时路径、网络地址。暂不支持 base64 格式。|
|bindload|	EventHandle|-|		图片加载成功时触发|
|binderror|	EventHandle	|-	|图片加载失败时触发|

**说明：**
<!-- 1、cover-view 支持 overflow: scroll，但不支持动态更新 overflow；
2、最外层 cover-view 支持 position: fixed； -->
1、支持 css transition 动画，transition-property 只支持 transform (translateX, translateY) 与 opacity；
2、文本建议都套上 cover-view 标签，避免排版错误；
3、只支持基本的定位、布局、文本样式。不支持设置单边的 border、background-image、shadow、overflow: visible 等；
4、建议子节点不要溢出父节点；
5、默认设置的样式有：white-space: nowrap; line-height: 1.2; display: block ；
6、建议不要频繁改变 s-if 表达式的值控制显隐，否则会导致 cover-view 显示异常；
7、IOS端暂不支持一个页面有多个video时嵌套cover-view；
8、cover-view 和 cover-image 从基础库版本1.12.0开始支持事件捕获、冒泡。
<!-- 9、todu: 事件模型遵循冒泡模型，但不会冒泡到原生组件。 -->
<!-- 10、基础库 1.9.0 起支持插在 view 等标签下。在此之前只可嵌套在原生组件map、video、canvas、camera内，避免嵌套在其他组件内。 -->

**示例：**
```html
<video id="myVideo"
    src="https://vd3.bdstatic.com/mda-ia8e6q3g23py8qdh/hd/mda-ia8e6q3g23py8qdh.mp4?playlist=%5B%22hd%22%5D&auth_key=1521549485-0-0-d5d042ba3555b2d23909d16a82916ebc&bcevod_channel=searchbox_feed&pd=share"
    controls>
    <cover-view class="controls">
        <cover-image class="play"
            bindtap="play"
            src="https://smartprogram.baidu.com/docs/img/logo.png">
        </cover-image>
        <cover-view class="pause" bindtap="pause">暂停</cover-view>
        <cover-view class="time">00:00</cover-view>
    </cover-view>
</video>
```

```css
.controls {
    position: absolute;
    top: 50%;
    width: 100%;
    height: 50px;
    display: flex;
}
.play, .pause, .time {
    flex: 1;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
}
.pause, .time {
    text-align: center;
    color: white;
    line-height: 50px;
}
cover-image {
    width: 100%;
    height: 100%;
}
```

```javascript
Page({
    onReady() {
        this.videoCtx = swan.createVideoContext('myVideo')
    },
    play() {
        this.videoCtx.play()
    },
    pause() {
        this.videoCtx.pause()
    }
})
```