---
title: 功能开发
header: develop
nav: tutorial
sidebar: dev
---

## 页面路由


### 页面栈

框架以栈的形式维护了当前的所有页面。 当发生路由切换的时候，页面栈的表现如下：

|路由方式|页面栈表现|
|----|----|
|初始化|新页面入栈|
|打开新页面|新页面入栈|
|页面重定向|当前页面出栈，新页面入栈。|
|页面返回|页面不断出栈，直到目标返回页，新页面入栈。|
|Tab 切换|页面全部出栈，只留下新的 Tab 页面。|

### getCurrentPages()

getCurrentPages() 函数用于获取当前页面栈的实例，以数组形式按栈的顺序给出，第一个元素为首页，最后一个元素为当前页面。

<div class="notice"> Tip： </div> 不要尝试修改页面栈，会导致路由以及页面状态错误。<text></text>
<br/>

### 路由方式

对于路由的触发方式以及页面生命周期函数如下：

|路由方式|触发时机|路由前页面|路由后页面|
|----|----|----|----|
|初始化|智能小程序打开的第一个页面|   | onLoad, onShow |
|打开新页面|调用 API <a href="https://smartprogram.baidu.com/docs/develop/api/show_tab/#swan-navigateTo/">swan.navigateTo</a> 或使用<a href="https://smartprogram.baidu.com/docs/develop/component/nav/#navigator/">组件</a> < navigator open-type="navigateTo"/ > | onHide | onLoad, onShow |
|页面重定向|调用 API <a href="https://smartprogram.baidu.com/docs/develop/api/show_tab/#swan-redirectTo/">swan.redirectTo</a> 或使用<a href="https://smartprogram.baidu.com/docs/develop/component/nav/#navigator/">组件</a> < navigator open-type="redirectTo"/ > | onUnload | onLoad, onShow |
|Tab 切换	|调用 API <a href="https://smartprogram.baidu.com/docs/develop/api/show_tab/#swan-switchTab/">swan.switchTab</a> 或使用<a href="https://smartprogram.baidu.com/docs/develop/component/nav/#navigator/">组件</a> < navigator open-type="switchTab"/ > 或用户切换 Tab |    | 各种情况请参考下表 |
|页面返回	|调用 API <a href="https://smartprogram.baidu.com/docs/develop/api/show_tab/#swan-navigateBack/">swan.navigateBack</a> 或使用<a href="https://smartprogram.baidu.com/docs/develop/component/nav/#navigator/">组件</a> < navigator open-type="navigateBack"/ > 或用户按左上角返回按钮 | onUnload | onShow |
|重启动	|调用 API <a href="https://smartprogram.baidu.com/docs/develop/api/show_tab/#swan-reLaunch/">swan.reLaunch</a> 或使用<a href="https://smartprogram.baidu.com/docs/develop/component/nav/#navigator/">组件</a> < navigator open-type="reLaunch"/ > | onUnload | onLoad, onShow |

Tab 切换对应的生命周期（以 A、B 页面为 Tabbar 页面，C 是从 A 页面打开的页面，D 页面是从 C 页面打开的页面为例）：

|当前页面|路由后页面|触发的生命周期（按顺序）|
|----|----|----|
|A     |A     | Nothing happend |
|A     |B     | A.onHide(), B.onLoad(), B.onShow() |
|A     |B（再次打开） | A.onHide(), B.onShow() |
|C     |A     | C.onUnload(), A.onShow() |
|C     |B     | C.onUnload(), B.onLoad(), B.onShow() |
|D     |B     | D.onUnload(), C.onUnload(), B.onLoad(), B.onShow() |
|D（从转发进入）|A     | D.onUnload(), A.onLoad(), A.onShow() |
|D（从转发进入）|B     | D.onUnload(), B.onLoad(), B.onShow() |

**说明**:
* navigateTo, redirectTo 只能打开非 tabBar 页面。
* switchTab 只能打开 tabBar 页面。
* reLaunch 可以打开任意页面。
* 页面底部的 tabBar 由页面决定，即只要是定义为 tabBar 的页面，底部都有 tabBar。
* 调用页面路由带的参数可以在目标页面的 onLoad 中获取。

## Page

Page() 函数用来注册一个页面。接受一个 object 参数，其指定页面的初始数据、生命周期函数、事件处理函数等。

<notice>object 参数说明：</notice>

|属性|类型|描述|
|----|----|----|
|data|Object|页面的初始数据|
|onLoad|Function| 监听页面加载的生命周期函数|
|onReady|Function| 监听页面初次渲染完成的生命周期函数|
|onShow|Function| 监听页面显示的生命周期函数|
|onHide|Function| 监听页面隐藏的生命周期函数|
|onUnload|Function| 监听页面卸载的生命周期函数|
|onPullDownRefresh|Function| 监听用户下拉动作|
|onReachBottom|Function| 页面上拉触底事件的处理函数|
|onShareAppMessage|Function| 用户点击右上角转发|
|onURLQueryChange|Function|监听页面 URL query 改变|
|onError|Function|错误监听函数|
|其他|不限|开发者可以添加任意的函数或数据到 object 参数中，在页面的函数中用 this 可以访问|

<notice>示例：</notice>
```js
Page({
	data: {
		name: 'swan'
	},
	onLoad: function () {

	},
	onReady: function() {
    	// Do something when page ready.
	},
	onShow: function() {
		// Do something when page show.
	},
	onHide: function() {
		// Do something when page hide.
	},
	onUnload: function() {
		// Do something when page close.
	},
	onPullDownRefresh: function() {
		// Do something when pull down.
	},
	onReachBottom: function() {
		// Do something when page reach bottom.
	},
	onShareAppMessage: function () {
		// return custom share data when user share.
	},
	onURLQueryChange: function() {
		// Do something when url query change.
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
