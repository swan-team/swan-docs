---
title: NodesRef
header: develop
nav: api
sidebar: query_NodesRef
---

 

**解释**： 节点信息

**代码示例**：

<a href="swanide://fragment/992de6cef7a351346c7bb1505dd012131574516295619" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    data: { },
    onReady() {
        swan.createSelectorQuery().select().boundingClientRect()
        .selectViewport().scrollOffset()
        .selectViewport().fields();
    }
});
```