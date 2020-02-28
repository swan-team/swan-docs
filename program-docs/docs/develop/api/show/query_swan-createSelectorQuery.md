---
title: swan.createSelectorQuery
header: develop
nav: api
sidebar: query_swan-createSelectorQuery
# webUrl: https://qft12m.smartapps.cn/api/createSelectorQuery/createSelectorQuery
---
 

 

**解释**： 返回一个 SelectorQuery 对象实例。可以在这个实例上使用 select 等方法选择节点，并使用 boundingClientRect 等方法选择需要查询的信息。

 

## 方法参数 

无

### 返回值

SelectorQuery
## 示例

<a href="swanide://fragment/7ed9d2e0008a76a4794f151d63c947481574311743406" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a> 

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_createSelectorQuery.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>
 

### 图片示例
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/createSelectorQuery.gif">
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
```swan
<view class="container">
    <view class="card-area">
        <movable-area>
            <movable-view class="target" x="{{x}}" y="{{y}}" direction="all" bindchange="queryNodeInfo">
                Drag
            </movable-view>
        </movable-area>
        <view s-for="item in metrics" class="list-area border-bottom">
            <text class="list-item-key-4">{{item.key}}</text>
            <text class="list-item-value">{{item.val}}</text>
        </view>
    </view>
</view>
```

 

```js
Page({
    data: {
        metrics: []
    },
    onReady() {
        this.queryNodeInfo();
    },
    queryNodeInfo() {
        const query = swan.createSelectorQuery();
        query.select('.target').boundingClientRect();
        query.exec(res => {
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
 

```css
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
```
:::