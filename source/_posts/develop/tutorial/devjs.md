---
title: 开发 .js 文件
header: develop
nav: tutorial
sidebar: devjs
---

 

SWAN 智能小程序中，JS 文件是控制交互逻辑的动态语言。
如，在 SWAN 模板中书写了以下代码：

**代码示例**

```xml
<view>{{ me }}</view>
<button bind:tap="setName">点击变值</button>
```

在 JS 中可以对于视图中的行为进行监听，并触发界面的变化。

```js
Page({
    setName: function() {
	this.setData({ me: "aaa" });
    }
})
```
**说明**：
* 书写 SWAN App 的逻辑层请使用 JavaScript ；
* 逻辑层将数据进行更新后，会触发视图更新；
* 在 app.js 中使用 App 方法、在页面 JS 中使用 Page 方法，来进行页面的逻辑管理；
* 可以在 SWAN 命名空间下，使用各种 API 端能力；
* 框架中不可使用 window, document, location, navigator, localStorage, history等Web、浏览器 API。
