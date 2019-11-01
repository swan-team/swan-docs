---
title: scroll-view 可滚动视图区域
header: develop
nav: component
sidebar: view_scroll-view
---




**解释**：可滚动视图区域，使用竖向滚动时，需要给定一个固定高度，可以通过css来设置height。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/scroll-view.png"  class="demo-qrcode-image" />

**属性说明**：

|属性名 |类型  |默认值  | 必填 |说明|最低支持版本|
|---- | ---- | ---- |---- |---|
|scroll-x | Boolean  |  false  | 否 | 允许横向滚动| |
|scroll-y| Boolean  | false | 否 |允许纵向滚动| |
|upper-threshold| Number &#124; String | 50 | 否 | 距顶部/左边多远时（单位 px），触发 scrolltoupper 事件| |
|lower-threshold| Number &#124; String |50 | 否 |距底部/右边多远时（单位 px），触发 scrolltolower 事件| |
|scroll-top | Number &#124; String  | | 否 |设置竖向滚动条位置。要动态设置滚动条位置，用法`scroll-top="{= scrollTop =}"`|1.10.3|
|scroll-left| Number &#124; String  | | 否 |设置横向滚动条位置。要动态设置滚动条位置，用法`scroll-left="{= scrollLeft =}"`| |
|scroll-into-view | String  | | 否 |值应为某子元素 id（id 不能以数字开头）,设置滚动方向后，按方向滚动到该元素，动态设置用法`scroll-into-view="{= scrollIntoView =}"`。| |
|scroll-with-animation| Boolean  | false | 否 |在设置滚动条位置时使用动画过渡| |
|enable-back-to-top| Boolean | false | 否 | ios点击顶部导航栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向 | |
|bindscrolltoupper | EventHandle  | | 否 |滚动到顶部/左边，会触发 scrolltoupper 事件| |
|bindscrolltolower | EventHandle |  | 否 |滚动到底部/右边，会触发 scrolltolower 事件| |
|bindscroll | EventHandle | | 否 | 滚动时触发， event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY} | |

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src=" https://b.bdstatic.com/miniapp/images/scroll-view.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：

<a href="swanide://fragment/cbb3914cf94d91d1273c190b0dead3201565503526386" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <view class="title">纵向滚动</view>
    <scroll-view
        scroll-y
        class="scroll-view"
        scroll-into-view="{= toView =}"
        scroll-with-animation="true"
        bind:scrolltoupper="upper"
        bind:scrolltolower="lower"
        upper-threshold="1"
        scroll-top="{= scrollTop =}"
        lower-threshold="1"
        bind:scroll="myscroll"
        enable-back-to-top="true"
    >
        <view id="one" class="color-a">A</view>
        <view id="two" class="color-b">B</view>
        <view id="three"  class="color-c">C</view>
    </scroll-view>

    <view class="page-section-btns">
        <view class="next" bindtap="tap">next</view>
        <view bindtap="tapMove">move</view>
        <view class="scrollToTop" bindtap="scrollToTop">scrollToTop</view>
    </view>
    <view class="title">横向滚动</view>
    <scroll-view
        scroll-x
        class="scroll-view"
        bind:scrolltoupper="toLeft"
        bind:scrolltolower="toRight"
        scroll-left="{= scrollLeft =}"
        upper-threshold="1"
        lower-threshold="1"
        bind:scroll="scroll"
    >
        <view id="four" class="color-a row-view">A</view>
        <view id="five" class="color-b row-view">B</view>
        <view id="six" class="color-c row-view">C</view>
    </scroll-view>
</view>

```
* 在 js 文件中

```js
const order = ['one', 'two', 'three'];
Page({
    data: {
        scrollLeft: 'five',
        toView: 'one',
        scrollTop: 0,
    },

    toLeft() {
        swan.showToast({
            title: '到最左边了',
            icon: 'none'
        });
    },
    toRight() {
        swan.showToast({
            title: '到最右边了',
            icon: 'none'
        });
    },
    upper() {
        swan.showToast({
            title: '到顶了',
            icon: 'none'
        });
    },

    lower() {
        swan.showToast({
            title: '到底了',
            icon: 'none'
        });
    },

    scroll(e) {
        console.log('获取滚动事件的详细信息e.detail：');
        console.dir(e.detail);
        this.setData({
            scrollTop: e.detail.scrollTop
        })
    },
    scrollToTop(e) {
        console.log(e);
        this.setData({
          scrollTop: 0,
        });
    },
    tap(e) {
        for (let i = 0; i < order.length; ++i) {
            if (order[i] === this.data.toView) {
            const next = (i + 1) % order.length;
            this.setData({
                toView: order[next],
                scrollTop: next * 200,
            });
            break;
            }
        }
    },
    tapMove() {
        this.setData({
            scrollTop: this.data.scrollTop + 10,
        });
    }
});
```
**Bug & Tip**：

* 请勿在 scroll-view 中使用 textarea、map、canvas、video 组件；更多请看[原生组件说明](https://smartprogram.baidu.com/docs/develop/component/native/)。
* scroll-into-view 的优先级低于 scroll-top、scroll-left。
* 在滚动 scroll-view 时会阻止页面回弹，所以在 scroll-view 中滚动，是无法触发 onPullDownRefresh。
* 若要使用下拉刷新，请使用页面的滚动，而不是 scroll-view。
* scroll-into-view、scroll-top、scroll-left 需要在页面数据高度（或宽度）撑开时生效，若有异步加载数据，请在数据渲染完成时，重新动态赋值，才可生效。
* 在设置 scroll-view 组件 height 属性不是内容可视区总高度时，使用 swan.pageScrollTo() API 无法生效。

