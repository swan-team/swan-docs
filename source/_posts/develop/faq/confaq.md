---
title: 组件常见问题
header: develop
nav: faq
sidebar: confaq
---


#### Q: 在webview 中使用了 cookie，导致存储信息与小程序不能共享的原因是什么？

A: web-view 网页与小程序之间不支持除 JSSDK 提供的接口之外的通信； 
1. 小程序中如需设置cookie 建议使用Storage； 参见[详情](https://smartprogram.baidu.com/docs/develop/api/storage_save/) 。
2. 如需要共享小程序参数到 webview 页面中， 可在 webview的src中加上链接参数。


#### Q: webview 中参入含有中文使用三方自己的约定方式进行编码 iOS 打开后出现白屏的情况该如何处理？
A： 避免在链接中带有中文字符，在 iOS 中会有打开白屏的问题，如需要使用中文字体，请对中文字符进行 [encodeURIComponent](http://smartprogram.baidu.com/docs/develop/api/net_request/)。

#### Q: 如何在web-view中使用拨打电话的功能？
A：如果想在 web-view 使用 JSSDK 提供的接口能力，需要引入 [swanjs](https://smartprogram.baidu.com/docs/develop/component/open/#web-view/) 包，如下示例：
> 图中 “2.0.6.js”版本为举例，开发时请参考[swanjs](https://smartprogram.baidu.com/docs/develop/component/open/#web-view/)文档中的最新版本好进行填写。

![](../../../img/faq/webview.png)

#### Q：cover-view可以使用border吗？ 

A: cover-view 为原生组件，原生组件为系统提供的控件不支持单边设置；对于 cover-view 只支持基本的定位、布局、文本样式。不支持设置单边的 border、background-image、shadow、overflow: visible 等。


#### Q：video的原生video控件enable-progress-gesture属性支持动态更新吗？ 

A：支持。

#### Q： scroll-view 的scroll-top。设置是否是无效的?

A：使用竖向滚动时，需要给 <scroll-view> 一个固定高度，通过 CSS 设置 height。

#### Q：使用两个text组件，组件之间有间隙，在不同手机端偶现，影响部分用户体验的问题该如何解决？

A：如果设置 inline-block 会出现间隙，建议父级元素使用font-size:0 ，然后子元素再设置 font-size,可以去除 inline-block 元素间间距。