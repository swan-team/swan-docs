---
title: 原生组件
header: develop
nav: component
sidebar: native
---
**概念**：原生组件是由客户端创建的原生组件。
**包括**：<a href="http://smartprogram.baidu.com/docs/develop/component/canvas/#canvas/">canvas</a>、<a href="http://smartprogram.baidu.com/docs/develop/component/map/#map/">map</a>、<a href="http://smartprogram.baidu.com/docs/develop/component/base/#animation-view/">animation-view</a>、<a href="http://smartprogram.baidu.com/docs/develop/component/formlist/#textarea/">textarea</a>、<a href="http://smartprogram.baidu.com/docs/develop/component/view/#cover-view/">cover-view</a>、<a href="http://smartprogram.baidu.com/docs/develop/component/view/#cover-image/">cover-image</a>、<a href="https://smartprogram.baidu.com/docs/develop/component/media/#camera/">camera</a>、<a href="https://smartprogram.baidu.com/docs/develop/component/media/#video/">video</a>、<a href="https://smartprogram.baidu.com/docs/develop/component/media/#live-player/">live-player</a>。

为了解决原生组件层级最高的限制。小程序专门提供了 **cover-view** 和 **cover-image** 组件，可以覆盖在部分原生组件上面。这两个组件也是原生组件，但是使用限制与其他原生组件有所不同。

## 使用限制
由于原生组件脱离在 web-view 渲染流程外，因此在使用时有以下限制：

* 原生组件的层级是最高的，所以页面中的其他组件无论设置 z-index 为多少，都无法盖在原生组件上。后插入的原生组件可以覆盖之前的原生组件。
* 原生组件无法在 scroll-view、swiper、picker-view、movable-view 中使用。
* 部分CSS样式无法应用于原生组件，例如：
        无法对原生组件设置 CSS 动画；
        无法定义原生组件为 position: fixed；
        不能在父级节点使用 overflow: hidden 来裁剪原生组件的显示区域。
* 在IOS下，video 组件暂时不支持触摸相关事件。
* 原生组件会遮挡 vConsole 弹出的调试面板。

在工具上，原生组件是用web组件模拟的，因此很多情况并不能很好的还原真机的表现，建议开发者在使用到原生组件时尽量在真机上进行调试。



