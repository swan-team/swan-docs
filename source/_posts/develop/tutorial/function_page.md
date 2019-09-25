---
title: Page
header: develop
nav: tutorial
sidebar: function_page
---

 

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