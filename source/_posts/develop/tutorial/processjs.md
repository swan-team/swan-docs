---
title: 配置 app.js 文件
header: develop
nav: tutorial
sidebar: processjs
---



app.js 中存放全局的 JavaScript 逻辑；更多内容参见[生命周期](https://smartprogram.baidu.com/docs/develop/framework/process_life/)。

**代码示例**

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

整个小程序只有一个 App 实例，是全部页面共享的。开发者可以通过 getApp 方法获取到全局唯一的 App 示例，获取App上的数据或调用开发者注册在 App 上的函数。

**代码示例**

```js
// xxx.js
const appInstance = getApp()
console.log(appInstance.globalData)
```
