---
title: SelectorQuery.selectAll
header: develop
nav: api
sidebar: query_SelectorQuery-selectAll
---
 
 

**解释**： 在当前页面下选择匹配选择器 selector 的节点，返回一个 NodesRef 对象实例。 与 selectorQuery.select(selector) 不同的是，它选择所有匹配选择器的节点。

## 方法参数 

String selector

### 返回值 

NodesRef
## 示例

<a href="swanide://fragment/ef40dd74ad85f57b7b43cdafb8bf4bd91574490603250" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_selectAll.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/selectorQuerySelectAll.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### 代码示例 



:::codeTab

``` swan
<view class="wrap">
    <view class="card-area">
        <movable-area>
            <movable-view class="target" x="{{x}}" y="{{y}}" direction="all" bindchange="queryNodeInfo">
                targetFirst
            </movable-view>
        </movable-area>
    </view>
    <view class="card-area">
        <movable-area>
            <movable-view class="target" x="{{x}}" y="{{y}}" direction="all" bindchange="queryNodeInfo">
                targetSecond
            </movable-view>
        </movable-area>
    </view>

     <view class="list-area border-bottom">
        <text class="list-item-key-4">
            targetFirst:
        </text>
        <text class="list-item-value-4">
            {{targetFirst}}
        </text>
    </view>
    <view class="list-area border-bottom">
        <text class="list-item-key-6">
            targetSecond:
        </text>
        <text class="list-item-value-4">{{targetSecond}}</text>
    </view>
</view>
```

 

```js
Page({
    data: { 
        targetFirst: '',
        targetSecond: ''
    },
    onReady() {
        this.queryNodeInfo();
    },
    queryNodeInfo() {
        const selectorQuery = swan.createSelectorQuery();
        selectorQuery.selectAll('.target').boundingClientRect();
        selectorQuery.exec(res => {
            this.setData('targetFirst', res[0][0].top);
            this.setData('targetSecond', res[0][1].top);
        });
    }
});
```
:::