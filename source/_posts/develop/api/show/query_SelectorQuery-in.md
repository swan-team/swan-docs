---
title: SelectorQuery.in 
header: develop
nav: api
sidebar:  query_SelectorQuery-in 
---
 
**解释**： 将选择器的选取范围更改为自定义组件 component 内（初始时，选择器仅选取页面范围的节点，不会选取任何自定义组件中的节点）。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_SelectorQueryIn.png"  class="demo-qrcode-image" />

**方法参数**：Component component

**代码示例**：

<a href="swanide://fragment/8c907e5f079c6f311bcb7d7a5d850b671574319866504" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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

