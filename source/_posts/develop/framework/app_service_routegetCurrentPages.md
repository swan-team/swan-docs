---
title: getCurrentPages
header: develop
nav: framework
sidebar: app_service_routegetCurrentPages
---

 

**解释**：getCurrentPages 全局函数用于获取当前页面栈的实例，以数组形式按栈的顺序给出，第一个元素为首页，最后一个元素为当前页面。

**示例**： 

```js
// index.js
Page({
    onShow() {
        console.log(getCurrentPages()); // [{...}]
    }
});
```

**注意: 不要尝试修改页面栈，会导致路由以及页面状态错误。**