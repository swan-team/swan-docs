---
title: 组件事件处理函数
header: develop
nav: framework
sidebar: app_service_pagecomponent
---

 

**解释：**
除了初始化数据和生命周期函数，Page 中还可以定义一些特殊的函数：事件处理函数。在渲染层可以在组件中加入事件绑定，当达到触发事件时，就会执行 Page 中定义的事件处理函数。

**代码示例**

```xml
<!-- page.swan -->
<view bindtap="onTap"> tap </view>
```

```js
// page.js
Page({
    onTap() {
        console.log('tap');
    }
});
```