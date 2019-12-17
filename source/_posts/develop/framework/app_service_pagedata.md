---
title: 初始化数据
header: develop
nav: framework
sidebar: app_service_pagedata
---



**解释:** 初始化数据将作为页面的第一次渲染数据。data 将会以 JSON 的形式由逻辑层传至渲染层，所以其数据必须是可以转成 JSON 的格式：字符串(例如: 数字，布尔值，对象，数组)。

渲染层，通过SWAN模板，对数据进行绑定。

**代码示例**
<a href="swanide://fragment/b58b1c817a99eab0f0a510e6e62e06e81560699650104" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```xml
<!-- index.swan -->
<view>{{text}}</view>
<!-- 渲染结果为: init data -->

<view>{{arr[0].name}}</view>
<!-- 渲染结果为: swan -->
```

```js
// index.js
Page({
    data: {
        text: 'init data',
        arr: [{name: 'swan'}, {name: 'Baidu'}]
    }
});
```