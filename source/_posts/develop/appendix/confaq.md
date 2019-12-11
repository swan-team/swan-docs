---
title: 组件常见问题
header: develop
nav: faq
sidebar: confaq
---

#### Q: 如何判断 H5 页面是否在小程序 web-view 打开？

A: H5 运行时，通过 window.navigator.userAgent 获取浏览器 userAgent。当 userAgent 字符串中包含小程序标识：‘swan/’时，则说明当前环境为小程序 web-view。

**代码示例：**

<a href="swanide://fragment/547f28b94e391bf484dece2bdc4c1e9b1575830214937" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
// 在 H5 文件中
let UA = window.navigator.userAgent;
var regex = /swan\//;
console.log( regex.test(UA) );// 若为true，则是在小程序的web-view中打开
```

#### Q: 在webview 中使用了 cookie，导致存储信息与小程序不能共享的原因是什么？

A: web-view 网页与小程序之间不支持除 JSSDK 提供的接口之外的通信； 
1. 小程序中如需设置cookie 建议使用Storage； 参见[详情](https://smartprogram.baidu.com/docs/develop/api/storage/save_process/) 。
2. 如需要共享小程序参数到 webview 页面中， 可在 webview的src中加上链接参数。


#### Q: webview 中参入含有中文使用三方自己的约定方式进行编码 iOS 打开后出现白屏的情况该如何处理？
A： 避免在链接中带有中文字符，在 iOS 中会有打开白屏的问题，如需要使用中文字体，请对中文字符进行 [encodeURIComponent](http://smartprogram.baidu.com/docs/develop/api/net_request/)。

#### Q: 如何在web-view中使用拨打电话的功能？
A：如果想在 web-view 使用 JSSDK 提供的接口能力，需要引入 [swanjs](/develop/component/open_web-view/) 包，如下示例：
> 图中 “2.0.6.js”版本为举例，开发时请参考[swanjs](/develop/component/open_web-view/)文档中的最新版本好进行填写。

![](../../../img/faq/webview.png)
**完整的H5示例：**

生成的h5站点地址放入小程序web-view的src即可。

**代码示例**

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>call phone</title>
        <script  src="https://b.bdstatic.com/searchbox/icms/searchbox/js/swan-2.0.6.js"></script>
    </head>
    <body>
        <button onclick="callMobile()">clickMe</button>
    </body>
    <script type="text/javascript">
        function callMobile() {
            swan.makePhoneCall({
                phoneNumber: '10086' 
            });
        }
    </script>
</html>
```
#### Q：cover-view可以使用border吗？ 

A: cover-view 为原生组件，原生组件为系统提供的控件不支持单边设置；对于 cover-view 只支持基本的定位、布局、文本样式。不支持设置单边的 border、background-image、shadow、overflow: visible 等。


#### Q：video的原生video控件enable-progress-gesture属性支持动态更新吗？ 

A：支持。

#### Q： scroll-view 的scroll-top。设置是否是无效的?

A：使用竖向滚动时，需要给 <scroll-view> 一个固定高度，通过 CSS 设置 height。

#### Q：使用两个text组件，组件之间有间隙，在不同手机端偶现，影响部分用户体验的问题该如何解决？

A：如果设置 inline-block 会出现间隙，建议父级元素使用font-size:0，然后子元素再设置 font-size,可以去除 inline-block 元素间间距。

####  Q：swiper 的面板指示点能自定义样式吗？

A: [参见swiper参数](/develop/component/view_swiper/)，可以去 dot 显示之后，自己定义 dot 样式。

#### Q：小程序使用 webview，分享出去的链接能直接是 webview 对应的 url 而不是小程序的 url 么？

A：小程序页面在进行分享时，如果分享出去的是web view引入的H5 页面，只能是分享的小程序的页面路径，不能是原H5 的页面路径。

