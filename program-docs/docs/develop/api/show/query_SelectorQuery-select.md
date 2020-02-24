---
title: SelectorQuery.select 
header: develop
nav: api
sidebar: query_SelectorQuery-select 
---

 

**解释**： 在当前页面下选择第一个匹配选择器 selector 的节点，返回一个 NodesRef 对象实例，可以用于获取节点信息。

 
## 方法参数 

String selector

### 返回值 

NodesRef

selector 类似于 CSS 的选择器，但仅支持下列语法。

1、ID 选择器：#the-id
2、class 选择器（可以连续指定多个）：.a-class.another-class
3、子元素选择器：.the-parent > .the-child
4、后代选择器：.the-ancestor .the-descendant
5、多选择器的并集：#a-node, .some-other-nodes
<!-- 跨自定义组件的后代选择器：.the-ancestor >>> .the-descendant -->

## 示例

 

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_select.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
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

###  代码示例1  

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

###  代码示例2 - id选择器  

<a href="swanide://fragment/c6d0f6e8bee090d61ac80e03f654145c1574933820242" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="container">
    <view class="card-area">
        <movable-area>
            <movable-view id="target" x="{{x}}" y="{{y}}" direction="all" bindchange="queryNodeInfo">
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
        this.selectorQuery.select('#target').boundingClientRect();
        this.selectorQuery.exec(res => {
            console.log(res[0].top)
            this.setData('message', res[0].top);
        });
    }
});
```

###  代码示例3 - 多个class选择器  

<a href="swanide://fragment/dc0f170837028da340dec35ac2a544861574934507729" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="container">
    <view class="card-area">
        <movable-area>
            <movable-view class="target" x="{{x}}" y="{{y}}" direction="all" bindchange="queryNodeInfo">
                 Drag
            </movable-view>
            <movable-view class="target2" x="{{x}}" y="{{y}}" direction="all" bindchange="queryNodeInfo">
                Drag2
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
        console.log(this.selectorQuery.select('.target.target2'));// nodeRef: selector: ".target", queryType: "select"
        this.selectorQuery.select('.target.target2').boundingClientRect();
        this.selectorQuery.exec(res => {
            console.log(res)
            // this.setData('message', res[0].top);
        });
    }
});
```

###  代码示例4 - 后代选择器 

<a href="swanide://fragment/6c91ccb0e424e806c9211b8fbc837d401574934615273" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="container">
    <view class="card-area">
        <movable-area>
            <movable-view class="target" x="{{x}}" y="{{y}}" direction="all" bindchange="queryNodeInfo">
                <view class="block"> Drag</view>
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
        console.log(this.selectorQuery.select('.target>.block'));// nodeRef: selector: ".target", queryType: "select"
        this.selectorQuery.select('.target>.block').boundingClientRect();
        this.selectorQuery.exec(res => {
            console.log(res)
            // this.setData('message', res[0].top);
        });
    }
});
```

###  代码示例5 - 多个选择器 

<a href="swanide://fragment/6c91ccb0e424e806c9211b8fbc837d401574934615273" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="container">
    <view class="card-area">
        <movable-area>
            <movable-view class="target" x="{{x}}" y="{{y}}" direction="all" bindchange="queryNodeInfo">
                <view class="block"> Drag</view>
            </movable-view>
            <movable-view id="target2" x="{{x}}" y="{{y}}" direction="all" bindchange="queryNodeInfo">
                <view class="block"> Drag</view>
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
        console.log(this.selectorQuery.select('.target, #block'));// nodeRef: selector: ".target", queryType: "select"
        this.selectorQuery.select('.target, #block').boundingClientRect();
        this.selectorQuery.exec(res => {
            console.log(res)
            // this.setData('message', res[0].top);
        });
    }
});
```