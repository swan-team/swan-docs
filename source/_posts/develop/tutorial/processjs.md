---
title: 配置 app.js 文件
header: develop
nav: tutorial
sidebar: processjs
---



app.js 中存放全局的 JavaScript 逻辑；更多内容参见[生命周期](https://smartprogram.baidu.com/docs/develop/framework/process_life/)。

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
