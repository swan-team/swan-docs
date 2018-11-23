---
title: 配置全局数据
header: develop
nav: tutorial
sidebar: process_data
---
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
