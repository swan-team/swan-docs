---
title: SelectorQuery.selectViewport 
header: develop
nav: api
sidebar: query_SelectorQuery-selectViewport 
---
 
 

**解释**： 选择显示区域，可用于获取显示区域的尺寸、滚动位置等信息，返回一个NodesRef对象实例。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_selectViewport.png"  class="demo-qrcode-image" />

**方法参数**：String selector

**返回值**：nodesRef

**代码示例**：

<a href="swanide://fragment/e748508ba5d88f93fd837b550b08faad1574507506861" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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