---
title: SWAN 框架简介
header: develop
nav: framework
sidebar: framework
---

页面逻辑与视图
-----

在 SWAN 的 App 中， app.js 、 app.css 、 app.json 三个文件用以控制全局配置及全局数据。

在每个 SWAN 的页面中，需要拥有与文件夹同名的 .js、 .css、 .swan模板文件。它们分别控制着页面逻辑、样式、视图，接下来我们一一解说。

### app.js

app.js 中存放全局的 JS 逻辑。

<notice>示例： </notice>
```javascript
App({
	onLaunch: function () {
		console.log('SWAN launch');
	},
	onShow: function () {
		console.log('SWAN展现');
	},
	onHide: function () {
		console.log('SWAN当前处于后台');
	},
	onError: function () {
		console.log('SWAN发生错误');
	},
	globalData: 'SWAN'
});
```

SWAN 生命周期详解：

|属性|类型|描述|触发时机|
|----|----|----|--------|
|onLaunch|Function|SWAN 初始化的生命周期函数|当 SWAN App 初始化完成时，会触发 onLaunch（全局只触发一次）|
|onShow|Function| SWAN App 展示时调用的生命周期函数|SWAN App 从后台进入前台，触发 onShow|
|onHide|Function| SWAN App 隐藏时调用的生命周期函数|SWAN App 从前台进入后台，触发 onHide|
|onLoad|Function| 监听页面加载的生命周期函数|SWAN App 页面加载完成，触发 onLoad|
|onReady|Function| 监听页面初次渲染完成的生命周期函数|SWAN App 页面渲染完成，触发 onReady|
|onUnload|Function| 监听页面卸载的生命周期函数|页面卸载，触发 onUnload|
|onError|Function|错误监听函数|当 SWAN App 发生错误时，会触发|

### JS （逻辑层)

<notice>解释： </notice>在页面的逻辑中（.js文件），使用 Page 函数注册页面。Page 函数接受一个参数（ Object 类型），其中可以增加页面的生命周期函数、事件处理函数、界面渲染初始数据。
<notice>示例： </notice>
```javascript
Page({
	data: {
		'name': 'swan'
	},
	onLoad() {
		console.log('页面加载完成');
	},
	onReady() {
		console.log('页面渲染完成');
	},
	onShow() {
		console.log('页面展现');
	},
	onHide() {
		console.log('页面隐藏');
	},
	onUnload() {
		console.log('页面卸载');
	}
});

```

### SWAN （视图层）

<notice>解释： </notice> SWAN 的视图层，使用 SWAN 规定的标签进行开发。

### 基础数据绑定

```xml
<!-- xxx.swan -->
<view>
	Hello My {{ name }}
</view>
```

```javascript
// xxx.js
Page({
	data: {
		name: 'SWAN'
	}
});
```

#### 循环

开发者可以通过在元素上添加`s-for`指令，来渲染一个列表：

#### 语法
```xml
<view>
	<view s-for="p in persons">
		{{p.name}}
	</view>
</view>
```
```javascript
Page({
	data: {
		persons: [
			{name: 'superman'},
			{name: 'spiderman'}
		]
	}
});
```

#### 条件

开发者可以通过在元素上添加`s-if`指令，来在视图层进行逻辑判断：

```xml
<view s-if="is4G">4G</view>
<view s-elif="isWifi">Wifi</view>
<view s-else>Other</view>
```

```javascript
Page({
	data: {
		is4G: true,
		isWifi: false
	}
});
```

#### 事件

**事件处理**

开发者可以使用`bind: + 事件名`来进行事件绑定

```xml
<view class="view-more" bind:tap="loadMore">
	点击加载更多
</view>
```

```javascript
Page({
	loadMore: function () {
		console.log('加载更多被点击');
	}
});
```
目前支持的事件类型有：

|类型|触发条件|
|---|---|
|touchstart|手指触摸开始|
|touchmove|手指触摸后进行移动|
|touchend|手指触摸结束|
|touchcancel|手指触摸动作被打断，如来电提醒等|
|tap|手指触摸后马上离开动作|

#### 事件对象

当开发者绑定方法到事件，事件触发时，SWAN 会给触发的方法传递事件对象，事件对象因事件不同而不同，目前基础的事件对象结构为：

|属性|类型|说明|
|----|----|----|
|type|String|事件类型|
|currentTarget|Object|事件触发的属性集合|

#### dataset

开发者可以在组件中自定义数据，并在事件发生时，由 SWAN 所在事件对象中，传递给绑定函数。

示例代码：

```xml
<view data-swan="1" bind:tap="viewtap">dataset-test</view>
```

```javascript
Page({
	viewtap: function (event) {
		console.log('value is:', event.currentTarget.dataset.swan);// 输出1
	}
});
```

#### touches

开发者在接收到触摸类事件后，在事件对象上，可以接收到当前停留在屏幕上的触摸点。

Touch 对象

|属性|类型|描述|
|----|----|----|
|pageX , pageY|Number|距离文档左上角的距离，横向为 X，纵向为 Y|
|clientX , clientY|Number|距离屏幕视口左上角距离，横向为 X，纵向为 Y|


### CSS 文件

<notice>解释：</notice> SWAN 的 CSS 文件用于描述页面样式，开发者可以直接使用一些 CSS 特性，进行 SWAN App 的开发，每个页面的 .css 文件，只作用于本页面。
