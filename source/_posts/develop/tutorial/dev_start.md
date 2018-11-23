---
title: 智能小程序的启动
header: develop
nav: tutorial
sidebar: dev_start
---


1、用户点击入口后，百度 App 会加载智能小程序的代码包;
2、解压并获取其中的 app.json ;
3、根据框架机制，智能小程序框架在加载完成代码包之后，会启动 pages 中的第一项，并渲染为首次看到的页面;
4、智能小程序启动后，开始调用 app.js 中预设的生命周期方法。

```js
App({
	onLaunch: function () {
		// APP LOGIC
	}
});
```

在一个智能小程序中，只有一个 App 的实例（开发者可以用这个实例定义多个 Page 共享的变量）。
