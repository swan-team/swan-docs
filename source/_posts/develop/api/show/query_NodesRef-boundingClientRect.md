---
title: NodesRef.boundingClientRect 
header: develop
nav: api
sidebar: query_NodesRef-boundingClientRect 
---

 
 

**解释**： 添加节点的布局位置的查询请求，相对于显示区域，以像素为单位。其功能类似于 DOM 的 getBoundingClientRect。返回值是 nodesRef 对应的 selectorQuery。

**方法参数**：Function callback

**返回值说明**：

返回的节点信息中，每个节点的位置用 left、right、top、bottom、width、height 字段描述。如果提供了 callback 回调函数，在执行 selectQuery 的 exec 方法后，节点信息会在 callback 中返回。

|参数 |类型|说明|
|---|---|---|
|left|Nunber|节点左边界坐标|
|right|Nunber|节点右边界坐标|
|top|Nunber|节点上边界坐标|
|bottom|Nunber|节点下边界坐标|
|width|Nunber|节点宽度|
|height|Nunber|节点高度|



**代码示例**：

```js
Page({
    getRect: function(){
        swan.createSelectorQuery().select('#the-id').boundingClientRect(function(rect){
            rect.id      // 节点的ID
            rect.dataset // 节点的dataset
            rect.left    // 节点的左边界坐标
            rect.right   // 节点的右边界坐标
            rect.top     // 节点的上边界坐标
            rect.bottom  // 节点的下边界坐标
            rect.width   // 节点的宽度
            rect.height  // 节点的高度
        }).exec()
    },
    getAllRects: function(){
        swan.createSelectorQuery().selectAll('.a-class').boundingClientRect(function(rects){
            rects.forEach(function(rect){
                rect.id      // 节点的ID
                rect.dataset // 节点的dataset
                rect.left    // 节点的左边界坐标
                rect.right   // 节点的右边界坐标
                rect.top     // 节点的上边界坐标
                rect.bottom  // 节点的下边界坐标
                rect.width   // 节点的宽度
                rect.height  // 节点的高度
            })
        }).exec()
    }
});
```

