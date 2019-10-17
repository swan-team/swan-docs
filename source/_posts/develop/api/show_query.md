---
title: 节点信息
header: develop
nav: api
sidebar: show_query
---

## swan.createIntersectionObserver 

**解释**： 创建并返回一个 IntersectionObserver 对象实例。在自定义组件中，可以使用 this.createIntersectionObserver([options]) 来代替。

**方法参数**：Object options

**`options`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|thresholds|Array|否|[0]|一个数值数组，包含所有阈值。|
|initialRatio|number|否|0|初始的相交比例，如果调用时检测到的相交比例与这个值不相等且达到阈值，则会触发一次监听器的回调函数。|
|selectAll|boolean|否|false|是否同时观测多个目标节点（而非一个），如果设为 true ，observe 的 targetSelector 将选中多个节点（注意：同时选中过多节点将影响渲染性能）|

**示例**：

<a href="swanide://fragment/8ab0bafd72cae605089addc3f1bb66601569477488019" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <view class="message">
        <text s-if="appear">小球出现</text>
        <text s-else>小球消失</text>
    </view>
    <view>
        <scroll-view class="scroll-view" scroll-y>
            <view class="scroll-area" style="{{appear ? 'background: #ccc' : ''}}">
                <text class="notice">向下滚动让小球出现</text>
                <view class="filling"></view>
                <view class="ball"></view>
            </view>
        </scroll-view>
    </view>
</view>
```

* 在 js 文件中

```js
Page({
    data: {
        appear: false
    },
    onReady() {
        const IntersectionObserver = swan.createIntersectionObserver(this);
        IntersectionObserver.relativeTo('.scroll-view').observe('.ball', res => {
            console.log('observe', res)
            this.setData('appear', res.intersectionRatio > 0);
        });
        this.IntersectionObserver = IntersectionObserver;
    },
    onUnload() {
        this.IntersectionObserver && this.IntersectionObserver.disconnect();
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding-top: 30rpx;
}

.scroll-view {
    height: 400rpx;
    background: #fff;
}
  
.scroll-area {
    height: 1300rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: .5s;
}
  
.notice {
    margin-top: 150rpx;
}
  
.ball {
    width: 200rpx;
    height: 200rpx;
    background: #38f;
    border-radius: 50%;
}
  
.filling {
    height: 400rpx;
}
  
.message {
    margin: 50rpx 0;
    width: 100%;
    display: flex;
    justify-content: center;
}
  
.message text {
    font-size: 40rpx;
    font-family: -apple-system-font, Helvetica Neue,Helvetica,sans-serif;
}
  
```

## IntersectionObserver

**解释**： IntersectionObserver 对象，用于推断某些节点是否可以被用户看见、有多大比例可以被用户看见。


**`IntersectionObserver`对象的方法列表**：

|方法 |说明|
|---- | ---- | ---- |
|relativeTo|使用选择器指定一个节点，作为参照区域之一|
|relativeToViewport|指定页面显示区域作为参照区域之一|
|observe|指定目标节点并开始监听相交状态变化情况|
|disconnect|停止监听。回调函数将不再触发|

## IntersectionObserver.relativeTo


**解释**：使用选择器指定一个节点，作为参照区域之一。

**方法参数**：String selector, Object margins

**`selector`参数说明:**选择器

**`margins`参数说明:**用来扩展（或收缩）参照节点布局区域的边界

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|left|number|否|-|节点布局区域的左边界|
|right|number|否|-|节点布局区域的右边界|
|top|number|否|-|节点布局区域的上边界|
|bottom|number|否|-|节点布局区域的下边界|

## IntersectionObserver.relativeToViewport 

**解释**：指定页面显示区域作为参照区域之一

**方法参数**：Object margins

**`margins`参数说明:**用来扩展（或收缩）参照节点布局区域的边界

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|left|number|否|-|节点布局区域的左边界|
|right|number|否|-|节点布局区域的右边界|
|top|number|否|-|节点布局区域的上边界|
|bottom|number|否|-|节点布局区域的下边界|

## IntersectionObserver.observe 


**解释**：指定目标节点并开始监听相交状态变化情况

**方法参数**：String targetSelector, Function callback

**`targetSelector`参数说明**：选择器

**`callback`参数说明**：监听相交状态变化的回调函数

**回调结果说明**

|属性|  类型|  说明|
|---- | ---- | ---- |
|intersectionRatio  | number | 相交比例|
|intersectionRect   | Object | 相交区域的边界|
|boundingClientRect | Object |目标边界|
|relativeRect    |Object  |参照区域的边界|
|time  |  number | 相交检测时的时间戳|

**intersectionRect、boundingClientRect、relativeRect 结构说明**

|属性|  类型|  说明|
|---- | ---- | ---- |
|left |  number | 左边界|
|right  | number | 右边界|
|top| number | 上边界|
|bottom  |number | 下边界|

**示例**：

```javascript
swan.createIntersectionObserver(this, {
    selectAll: true
})
.relativeTo('.container')
.observe('.ball', res => {
    console.log(res.intersectionRect); // 相交区域
    console.log(res.intersectionRect.left); // 相交区域的左边界坐标
    console.log(res.intersectionRect.top); // 相交区域的上边界坐标
    console.log(res.intersectionRect.width); // 相交区域的宽度
    console.log(res.intersectionRect.height); // 相交区域的高度
});
```

## IntersectionObserver.disconnect 
> 与页面显示区域的相交区域并不准确代表用户可见的区域，因为参与计算的区域是“布局区域”，布局区域可能会在绘制时被其他节点裁剪隐藏（如遇祖先节点中 overflow 样式为 hidden 的节点）或遮盖（如遇 fixed 定位的节点）。

**解释**：停止监听，回调函数将不再触发。

**方法参数**：无


## swan.createSelectorQuery

**解释**： 返回一个 SelectorQuery 对象实例。可以在这个实例上使用 select 等方法选择节点，并使用 boundingClientRect 等方法选择需要查询的信息。

**方法参数**： 无

**返回值**：selectorQuery

**示例**：

<a href="swanide://fragment/6444dc8c1a552c147d760e0bb95059f61558352422429" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <view class="page-body">
        <view>
            <movable-area>
                <movable-view class="target" x="{{x}}" y="{{y}}" direction="all" bindchange="queryNodeInfo">
                    Drag
                </movable-view>
            </movable-area>
        </view>

        <view class="node-info">
            <view class="metric">
                <view s-for="item in metrics">
                    <text class="b">{{item.key}}</text>
                    <text class="span">{{item.val}}</text>
                </view>
            </view>
        </view>
    </view>
</view>
```

* 在 js 文件中

```js
Page({
    data: {
        metrics: []
    },
    onReady() {
        this.queryNodeInfo();
    },
    queryNodeInfo() {
        const SelectorQuery = swan.createSelectorQuery();
        SelectorQuery.select('.target').boundingClientRect();

        SelectorQuery.exec(res => {
            const rect = res[0]
            if (rect) {
                const metrics = []

                for (const key in rect) {
                    if (key !== 'id' && key !== 'dataset') {
                        const val = rect[key]
                        metrics.push({key, val})
                    }
                }

                this.setData({metrics})
            }
        });
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding-top: 50rpx;
}

movable-view {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100rpx;
    width: 100rpx;
    background: #38f;
    color: #fff;  
}

movable-area {
    height: 400rpx;
    width: 400rpx;
    background-color: #ccc;
    overflow: hidden;
}

.page-body {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.node-info {
    margin-top: 50rpx;
}

.metric {
    width: 400rpx;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.b {
    display: inline-block;
    width: 150rpx;
    font-weight: bold;
}

.span {
    display: inline-block;
    width: 100rpx;
}
```
## SelectorQuery

**解释**： 选择器

**`selectorQuery`对象的方法列表**：

|方法 |参数  |说明|
|---- | ---- | ---- |
|in| object Component | 参考<a href="https://smartprogram.baidu.com/docs/develop/api/show_query/#selectorQuery-in/">selectorQuery.in</a>详细介绍 |
|select   | selector | 参考<a href="https://smartprogram.baidu.com/docs/develop/api/show_query/#selectorQuery-select/">selectorQuery.select</a>详细介绍 |
|selectAll  |  selector  | 参考<a href="https://smartprogram.baidu.com/docs/develop/api/show_query/#selectorQuery-selectAll/">selectorQuery.selectAll</a>详细介绍 |
|selectViewport  |      | 参考<a href="https://smartprogram.baidu.com/docs/develop/api/show_query/#selectorQuery-selectViewport/">selectorQuery.selectViewport</a>详细介绍 |
|exec  |  callback  | 参考<a href="https://smartprogram.baidu.com/docs/develop/api/show_query/#selectorQuery-exec/">selectorQuery.exec</a>详细介绍 |

## SelectorQuery.in 

**解释**： 将选择器的选取范围更改为自定义组件 component 内（初始时，选择器仅选取页面范围的节点，不会选取任何自定义组件中的节点）。


**方法参数**：Component component

**示例**：

```js
Component({
    queryMultipleNodes: function(){
        var SelectorQuery = swan.createSelectorQuery().in(this)
        SelectorQuery.select('#the-id').boundingClientRect(function(res){
            res.top // 这个组件内 #the-id 节点的上边界坐标
        }).exec()
    }
});
```

## SelectorQuery.select 

**解释**： 在当前页面下选择第一个匹配选择器 selector 的节点，返回一个 NodesRef 对象实例，可以用于获取节点信息。

**方法参数**：String selector

**返回值**：nodesRef

selector 类似于 CSS 的选择器，但仅支持下列语法。

1、ID 选择器：#the-id
2、class 选择器（可以连续指定多个）：.a-class.another-class
3、子元素选择器：.the-parent > .the-child
4、后代选择器：.the-ancestor .the-descendant
5、多选择器的并集：#a-node, .some-other-nodes
<!-- 跨自定义组件的后代选择器：.the-ancestor >>> .the-descendant -->
## SelectorQuery.selectAll 

**解释**： 在当前页面下选择匹配选择器 selector 的节点，返回一个 NodesRef 对象实例。 与 selectorQuery.select(selector) 不同的是，它选择所有匹配选择器的节点。

**方法参数**：String selector

**返回值**：nodesRef

## SelectorQuery.selectViewport 

**解释**： 选择显示区域，可用于获取显示区域的尺寸、滚动位置等信息，返回一个NodesRef对象实例。

**方法参数**：String selector

**返回值**：nodesRef

##  SelectorQuery.exec 

**解释**： 执行所有的请求，请求结果按请求次序构成数组，在 callback 的第一个参数中返回。

**方法参数**：Function callback

## NodesRef 

**解释**： 节点信息

## NodesRef.boundingClientRect 

**解释**： 添加节点的布局位置的查询请求，相对于显示区域，以像素为单位。其功能类似于 DOM 的 getBoundingClientRect。返回值是 nodesRef 对应的 selectorQuery。

**方法参数**：Function callback

返回的节点信息中，每个节点的位置用 left、right、top、bottom、width、height 字段描述。如果提供了 callback 回调函数，在执行 selectQuery 的 exec 方法后，节点信息会在 callback 中返回。

**示例**：

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

## NodesRef.scrollOffset 

**解释**： 添加节点的滚动位置查询请求，以像素为单位。节点必须是 scroll-view 或者 viewport 。返回值是 nodesRef 对应的 selectorQuery 。

**方法参数**：Function callback

返回的节点信息中，每个节点的滚动位置用 scrollLeft 、s crollTop 字段描述。如果提供了 callback 回调函数，在执行 selectQuery 的 exec 方法后，节点信息会在 callback 中返回。

**示例**：

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

## NodesRef.fields

**解释**： 获取节点的相关信息，需要获取的字段在 fields 中指定。返回值是 nodesRef 对应的 selectorQuery 。可指定获取的字段包括：

**方法参数**：Object fields, Function callback

**`fields`参数说明**：

|参数名| 类型 |必填 |默认值| 说明|
|---- | ---- | ---- |---|---|
|id|boolean |否 || 是否返回节点 id |
|dataset |boolean | 否 | |是否返回节点 dataset |
|rect  | boolean| 否  | |是否返回节点布局位置（left right top bottom） |
|size  | boolean |否  | |是否返回节点尺寸（width height） |
|scrollOffset |boolean |  否  | |是否返回节点的 scrollLeft scrollTop ，节点必须是 scroll-view 或者 viewport |
|properties  | `Array.<string>`| []  | |指定属性名列表，返回节点对应属性名的当前属性值（只能获得组件文档中标注的常规属性值， id class style 和事件绑定的属性值不可获取） |
|computedStyle  |`Array.<string>` | []  | |指定样式名列表，返回节点对应样式名的当前值 |

**示例**：

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

