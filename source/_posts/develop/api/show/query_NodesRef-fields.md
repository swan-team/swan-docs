---
title: NodesRef.fields
header: develop
nav: api
sidebar: query_NodesRef-fields
---
 
**解释**： 获取节点的相关信息，需要获取的字段在 fields 中指定。返回值是 nodesRef 对应的 selectorQuery 。可指定获取的字段包括：

**方法参数**：Object object, Function callback

**`fields`参数说明**：

|参数名| 类型 |必填 |默认值| 说明|
|---- | ---- | ---- |---|---|
|id|boolean |否 || 是否返回节点 id |
|dataset |boolean | 否 | |是否返回节点 dataset |
|rect  | boolean| 否  | |是否返回节点布局位置（left right top bottom） |
|size  | boolean |否  | |是否返回节点尺寸（width height） |
|scrollOffset |boolean |  否  | |是否返回节点的 scrollLeft scrollTop ，节点必须是 scroll-view 或者 viewport |
|properties  | Array.&lt;string&gt;| []  | |指定属性名列表，返回节点对应属性名的当前属性值（只能获得组件文档中标注的常规属性值， id class style 和事件绑定的属性值不可获取） |
|computedStyle  |Array.&lt;string&gt; | []  | |指定样式名列表，返回节点对应样式名的当前值 |

**代码示例**：

```js
Page({
    getFields: function(){
        swan.createSelectorQuery().select('#the-id').fields({
            dataset: true,
            size: true,
            scrollOffset: true,
            properties: ['scrollX', 'scrollY'],
            computedStyle: ['margin', 'backgroundColor']
        }, function(res){
            res.dataset    // 节点的dataset
            res.width      // 节点的宽度
            res.height     // 节点的高度
            res.scrollLeft // 节点的水平滚动位置
            res.scrollTop  // 节点的竖直滚动位置
            res.scrollX    // 节点 scroll-x 属性的当前值
            res.scrollY    // 节点 scroll-y 属性的当前值
            // 此处返回指定要返回的样式名
            res.margin
            res.backgroundColor
        }).exec()
    }
});
```

