---
title: SelectorQuery.select 
header: develop
nav: api
sidebar: query_SelectorQuery-select 
---

 

**解释**： 在当前页面下选择第一个匹配选择器 selector 的节点，返回一个 NodesRef 对象实例，可以用于获取节点信息。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_select.png" class="demo-qrcode-image" />

**方法参数**：String selector

**返回值**：nodesRef

selector 类似于 CSS 的选择器，但仅支持下列语法。

1、ID 选择器：#the-id
2、class 选择器（可以连续指定多个）：.a-class.another-class
3、子元素选择器：.the-parent > .the-child
4、后代选择器：.the-ancestor .the-descendant
5、多选择器的并集：#a-node, .some-other-nodes
<!-- 跨自定义组件的后代选择器：.the-ancestor >>> .the-descendant -->


**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/selectorQuerySelect.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：

<a href="swanide://fragment/28e00386b1bc7a310edf31e8ce4539dc1574490838253" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="container">
    <view class="card-area">
        <movable-area>
            <movable-view class="target" x="{{x}}" y="{{y}}" direction="all" bindchange="queryNodeInfo">
                Drag
            </movable-view>
        </movable-area>
        <view class="list-area border-bottom">
            <text>Drag的节点信息高度为：</text>
            <text class="list-item-value-6"> {{message}}</text>
        </view>
    </view>
</view>
```

* 在 js 文件中

```js
Page({
    data: { 
        message: ''
    },
    onReady() {
        const selectorQuery = swan.createSelectorQuery();
        this.selectorQuery = selectorQuery;
    },
    queryNodeInfo() {
        console.log(this.selectorQuery.select('.target'));// nodeRef: selector: ".target", queryType: "select"
        this.selectorQuery.select('.target').boundingClientRect();
        this.selectorQuery.exec(res => {
            console.log(res[0].top)
            this.setData('message', res[0].top);
        });
    }
});
```