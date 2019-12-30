---
title: API
header: develop
nav: tutorial
sidebar: function_api

---


智能小程序为开发者提供了百度 App 提供的丰富的端能力。使用方式比较简单，直接调用 SWAN 对象上的端能力方法，或者 Page 对象中 this 上挂载的方法。

如`showToast`：

**代码示例**

```js
swan.showToast({
    title: '我是标题'
});
```
也有很多挂载在 Page 对象与 SWAN 上的方法，如 createCanvasContext，在 SWAN 对象与 Page 对象上均有。所以，你可以这样用：

**代码示例**

```js
Page({
    data: {},
    onLoad: function () {
	this.createCanvasContext();
    }
});
```

也可以这样用：

**代码示例**

```js
Page({
    data: {},
    onLoad: function () {
	swan.createCanvasContext();
    }
});
```

但是推荐使用第一种方法，可以在当前 Page 上精准查找，避免一些问题。具体方法的挂载，在 [API 章节](https://smartprogram.baidu.com/docs/develop/api/net/) 会有详细介绍。
