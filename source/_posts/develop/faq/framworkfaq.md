---
title: 框架常见问题
header: develop
nav: faq
sidebar: framworkfaq
---
 

#### Q：filter是否支持三目运算？

A：不支持。

#### Q：如何避免横屏播放时，icon 变大的问题？

A：请使用px单位来书写css，不建议使用rpx等其他单位。

#### Q：使用touchstart、touchend、touchemove旋转切换图片安卓卡顿，该如何处理？

A：建议使用 webview 组件实现相关功能，请勿频繁使用setData操作。

#### Q：小程序可以调用echarts.js 或者 highchart.js 画图嘛？

A：暂不支持。

####  Q：百度小程序里面可以和微信小程序一样使用rpx嘛？

A：支持的。

####  Q：请问如何设置首页背景图刚好铺满屏幕？

A：可以按照以下设置方式进行尝试：
	给body标签指定背景图，这样背景图就可以填充整个浏览器viewport了

代码片段：
```
body{
	margin: 0; 
	background: url("xxx图片地址") no-repeat;
	background-size: cover;
	background-position: center center;
	background-attachment:fixed;
}
```
>注意：
1.为了使背景图片的宽高不小于容器的宽高，需设置background-size: cover;进行填充，如果背景图小于body标签的尺寸，浏览器会拉伸图片。当把一个图片拉伸时，图片会变模糊，所以在选择背景图片时，宽高要大一些。
2.为了让背景图始终相对于viewport居中，需设置background-position: center center;
3.当内容的高度大于viewport的高度时，会出现滚动条。希望背景图始终相对于viewport固定，即使用户滚动时也是一样，解决方案：background-attachment: fixed;

#### Q：这个分包预加载只能加载一个分包吗

A：端能力的 root 参数为 string 类型，只能配置一个。但是可以通过 app.json 中的 preloadRule 配置多个子包。

#### Q：引用angelia-swan报错的原因有哪些？

A：大致原因分为几类：
* 按文档直接引入报错可能是基础库版本太低导致，建议使用3.20.*以上的基础库开发。
* 如使用三方框架开发的小程序，引入报错，需要检查三方框架是否改写了小程序的App和Page，如果是改变了小程序的App和Page导致的报错，请使用原生小程序开发或着绕过，目前没有兼容方案。

#### Q：app.after 使用有版本或者权限的限制吗？

A：基础库 3.20.+ 才支持。