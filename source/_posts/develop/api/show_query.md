---
title: 节点信息
header: develop
nav: api
sidebar: show_query
---
createSelectorQuery
---
**解释：** 返回一个 SelectorQuery 对象实例。可以在这个实例上使用 select 等方法选择节点，并使用 boundingClientRect 等方法选择需要查询的信息。

**参数：** Object

**示例：**

```js
Page({
    queryMultipleNodes: function(){
        var query = swan.createSelectorQuery()
        query.select('#the-id').boundingClientRect()
        query.selectViewport().scrollOffset()
        query.exec(function(res){
            res[0].top       // #the-id节点的上边界坐标
            res[1].scrollTop // 显示区域的竖直滚动位置
        })
    }
});
```

selectorQuery
---
**selectorQuery 对象的方法列表：**

|方法 |参数  |说明|
|---- | ---- | ---- |
|in| object Component | 参考下面详细介绍 |
|select   | selector | 参考下面详细介绍 |
|selectAll  |  selector  | 参考下面详细介绍 |
|selectViewport  |      | 参考下面详细介绍 |
|exec  |  callback  | 参考下面详细介绍 |

selectorQuery.in(component)
---
**解释：** 将选择器的选取范围更改为自定义组件 component 内。（初始时，选择器仅选取页面范围的节点，不会选取任何自定义组件中的节点。）

**示例：**

```js
Component({
    queryMultipleNodes: function(){
        var query = swan.createSelectorQuery().in(this)
        query.select('#the-id').boundingClientRect(function(res){
            res.top // 这个组件内 #the-id 节点的上边界坐标
        }).exec()
    }
});
```

selectorQuery.select(selector)
---
**解释：** 在当前页面下选择第一个匹配选择器 selector 的节点，返回一个 NodesRef 对象实例，可以用于获取节点信息。

selector 类似于 CSS 的选择器，但仅支持下列语法。

1、ID 选择器：#the-id
2、class 选择器（可以连续指定多个）：.a-class.another-class
3、子元素选择器：.the-parent > .the-child
4、后代选择器：.the-ancestor .the-descendant
5、跨自定义组件的后代选择器：.the-ancestor >>> .the-descendant
6、多选择器的并集：#a-node, .some-other-nodes

selectorQuery.selectAll(selector)
---
**解释：** 在当前页面下选择匹配选择器 selector 的节点，返回一个 NodesRef 对象实例。 与 selectorQuery.select(selector) 不同的是，它选择所有匹配选择器的节点。

selectorQuery.selectViewport()
---
**解释：** 选择显示区域，可用于获取显示区域的尺寸、滚动位置等信息，返回一个NodesRef对象实例。

nodesRef.boundingClientRect([callback])
---
**解释：** 添加节点的布局位置的查询请求，相对于显示区域，以像素为单位。其功能类似于 DOM 的 getBoundingClientRect。返回值是 nodesRef 对应的 selectorQuery。

返回的节点信息中，每个节点的位置用 left、right、top、bottom、width、height 字段描述。如果提供了 callback 回调函数，在执行 selectQuery 的 exec 方法后，节点信息会在 callback 中返回。

**示例：**

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

nodesRef.scrollOffset([callback])
---
**解释：** 添加节点的滚动位置查询请求，以像素为单位。节点必须是 scroll-view 或者 viewport 。返回值是 nodesRef 对应的 selectorQuery 。

返回的节点信息中，每个节点的滚动位置用 scrollLeft 、s crollTop 字段描述。如果提供了 callback 回调函数，在执行 selectQuery 的 exec 方法后，节点信息会在 callback 中返回。

**示例：**

```js
Page({
    getScrollOffset: function(){
        swan.createSelectorQuery().selectViewport().scrollOffset(function(res){
            res.id      // 节点的ID
            res.dataset // 节点的dataset
            res.scrollLeft // 节点的水平滚动位置
            res.scrollTop  // 节点的竖直滚动位置
        }).exec()
    }
});
```

nodesRef.fields(fields,[callback])
---
**解释：** 获取节点的相关信息，需要获取的字段在 fields 中指定。返回值是 nodesRef 对应的 selectorQuery 。可指定获取的字段包括：

|字段名 |默认值  |说明|
|---- | ---- | ---- |
|id| 否 | 是否返回节点 id |
|dataset  | 否 | 是否返回节点 dataset |
|rect  |  否  | 是否返回节点布局位置（left right top bottom） |
|size  |  否  | 是否返回节点尺寸（width height） |
|scrollOffset  |  否  | 是否返回节点的 scrollLeft scrollTop ，节点必须是 scroll-view 或者 viewport |
|properties  |  []  | 指定属性名列表，返回节点对应属性名的当前属性值（只能获得组件文档中标注的常规属性值， id class style 和事件绑定的属性值不可获取） |
|computedStyle  |  []  | 指定样式名列表，返回节点对应样式名的当前值 |

**示例：**

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

selectorQuery.exec([callback])
---
**解释：** 执行所有的请求，请求结果按请求次序构成数组，在 callback 的第一个参数中返回。
