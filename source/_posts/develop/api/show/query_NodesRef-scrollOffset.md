---
title: NodesRef.scrollOffset 
header: develop
nav: api
sidebar: query_NodesRef-scrollOffset 
---

 

**解释**： 添加节点的滚动位置查询请求，以像素为单位。节点必须是 scroll-view 或者 viewport 。返回值是 nodesRef 对应的 selectorQuery 。

**方法参数**：Function callback

**返回值说明**：
返回的节点信息中，每个节点的滚动位置用 scrollLeft 、scrollTop 字段描述。如果提供了 callback 回调函数，在执行 selectQuery 的 exec 方法后，节点信息会在 callback 中返回。

|参数|类型|说明|
|---|---|---|
|scrollLeft|Nunber|节点水平滚动位置|
|scrollTop|Nunber|节点竖直滚动位置|
 

**代码示例**：

<a href="swanide://fragment/e748508ba5d88f93fd837b550b08faad1574507506861" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
Page({
    getScrollOffset: function(){
        swan.createSelectorQuery().select('.scroll-view').scrollOffset(function(res){
            res.id      // 节点的ID
            res.dataset // 节点的dataset
            res.scrollLeft // 节点的水平滚动位置
            res.scrollTop  // 节点的竖直滚动位置
        }).exec()sssss
    }
});
```

