---
title: SelectorQuery.selectAll
header: develop
nav: api
sidebar: query_SelectorQuery-selectAll
---
 
 

**解释**： 在当前页面下选择匹配选择器 selector 的节点，返回一个 NodesRef 对象实例。 与 selectorQuery.select(selector) 不同的是，它选择所有匹配选择器的节点。

**方法参数**：String selector

**返回值**：nodesRef

**代码示例**：

<a href="swanide://fragment/6f9b6dde2727a2fb19d86167002ac8121574317841025" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="container">
    <view class="card-area">
        <movable-area>
            <movable-view class="target" x="{{x}}" y="{{y}}" direction="all" bindchange="queryNodeInfo">
                Drag
            </movable-view>
        </movable-area>
        <movable-area>
            <movable-view class="target" x="{{x}}" y="{{y}}" direction="all" bindchange="queryNodeInfo">
                Drag
            </movable-view>
        </movable-area>
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
        const selectorQuery = swan.createSelectorQuery();
        selectorQuery.selectAll('.target').boundingClientRect();
        // nodeRef: selector: ".target", queryType: "selectAll"
        selectorQuery.exec(res => {
            console.log(res[0].top)
        });
    }
});
```