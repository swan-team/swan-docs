---
title: 原生组件
header: develop
nav: component
sidebar: native
---
**概念**：原生组件是由客户端创建的原生组件。

**包括**：<a href="/develop/component/canvas/">canvas</a>、<a href="/develop/component/map/">map</a>、<a href="/develop/component/base_animation-view-Lottie/">animation-view</a>、<a href="/develop/component/formlist_textarea/">textarea</a>、<a href="/develop/component/view_cover-view/">cover-view</a>、<a href="/develop/component/view_cover-image/">cover-image</a>、<a href="/develop/component/media_camera/">camera</a>、<a href="/develop/component/media_video/">video</a>、<a href="/develop/component/media_live-player/">live-player</a>、<a href="/develop/component/formlist_input/">input</a>。

**其中，video组件（v3.70.0起）、input组件（v3.105.0起）已支持同层渲染。**

为了解决原生组件层级最高的限制。小程序专门提供了 **cover-view 和 cover-image 组件**，可以覆盖在部分原生组件上面。这两个组件也是原生组件，但是使用限制与其他原生组件有所不同。

## 使用限制
由于原生组件脱离在 web-view 渲染流程外，因此在使用时有以下限制：

* 原生组件的层级是最高的，所以页面中的其他组件无论设置 z-index 为多少，都无法盖在原生组件上。后插入的原生组件可以覆盖之前的原生组件。
* 原生组件无法在 scroll-view、swiper、picker-view、movable-view 中使用，下面示例为错误写法。

**代码示例：**
<a href="swanide://fragment/5922e661e44f0a3f1ee0a36e91cc8e051576054229427" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
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
        <cover-view class="flex-item demo-text-1"></cover-view>
    </scroll-view>
</view>
```
* 部分CSS样式无法应用于原生组件，例如：
        无法对原生组件设置 CSS 动画；
        不能在父级节点使用 overflow: hidden 来裁剪原生组件的显示区域。
* 在IOS下，video 组件暂时不支持触摸相关事件。
* 原生组件会遮挡 vConsole 弹出的调试面板。

在工具上，原生组件是用web组件模拟的，因此很多情况并不能很好的还原真机的表现，建议开发者在使用到原生组件时尽量在真机上进行调试。

## 同层渲染

同层渲染是为了解决原生组件的层级问题，在支持同层渲染后，原生组件与其它组件可以随意叠加，有关层级的限制将不再存在。**当前 video, input 组件已支持同层渲染**。

在同层渲染模式下：

* 无需使用 cover-view、cover-image 组件来覆盖同层渲染组件。

* 可在滚动组件，如 scroll-view、swiper、movable-view 等组件中使用同层渲染组件。

* 可直接通过 z-index 属性对同层渲染组件进行层级控制。

* 同层渲染组件不会遮挡 sConsole 弹出的调试面板。
