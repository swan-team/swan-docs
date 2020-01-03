---
title: getCurrentPages
header: develop
nav: framework
sidebar: app_service_routegetCurrentPages
---

 

**解释**：getCurrentPages 全局函数用于获取当前页面栈的实例，以数组形式按栈的顺序给出，第一个元素为首页，最后一个元素为当前页面。

**代码示例** 

<a href="swanide://fragment/be265192b32b09af4deb17093bfb73cb1576048350631" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

> 页面切换路径过多，详细示例请在开发者工具中的控制台查看。

```js
// index.js
Page({
    onShow() {
        console.log(getCurrentPages()); // [{...}]
    }
});
```

**注意: 不要尝试修改页面栈，会导致路由以及页面状态错误。**
