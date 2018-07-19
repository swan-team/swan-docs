---
title: 启动流程与能力
header: develop
nav: simple
sidebar: process
---

## 智能小程序的启动

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

## 页面

一个智能小程序的页面的构造器如下：

```js
Page({
	data: {
		name: 'swan'
	},
	onLoad: function () {

	}
});
```

智能小程序框架，会将同页面的 .swan 文件与 .js 中定义的 Page 对象中的 data ，进行组合渲染。

## 组件

智能小程序中提供了丰富多样的组件，开发者可以在 .swan 文件中，使用预设好的组件，拼装完成自己的智能小程序的页面。

如：使用 slider 组件

```xml
<slider min="200" max="1500" value="{{switchDuration}}"></slider>
```

即可在页面上展示一个 slider 组件。

也可以在 slider 组件上绑定事件，在相应的组件事件发生时，得到回调与组件信息：

```xml
<slider min="200" max="1500" value="{{switchDuration}}" bind:change="changeSlider"></slider>
```

```js
Page({
	changeSwitchDuration: function () {
	    console.log('changeSwitchDuration');
	}
});
```

## API

智能小程序为开发者提供了百度 App 提供的丰富的端能力。使用方式比较简单，直接调用 SWAN 对象上的端能力方法，或者 Page 对象中 this 上挂载的方法。

如`showToast`：

```js
swan.showToast({
	title: '我是标题'
});
```
也有很多挂载在 Page 对象与 SWAN 上的方法，如 createCanvasContext ，在 SWAN 对象与 Page 对象上均有。所以，你可以这样用：

```js
Page({
	data: {},
	onLoad: function () {
		this.createCanvasContext();
	}
});
```

也可以这样用：

```js
Page({
	data: {},
	onLoad: function () {
		swan.createCanvasContext();
	}
});
```

但是推荐使用第一种方法，可以在当前 Page 上精准查找，避免一些问题。具体方法的挂载，在 [API 章节](http://smartprogram.baidu.com/docs/develop/api/net/) 会有详细介绍。
