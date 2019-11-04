---
title: swan.createSelectorQuery
header: develop
nav: api
sidebar: query_swan-createSelectorQuery
---
 

 

**解释**： 返回一个 SelectorQuery 对象实例。可以在这个实例上使用 select 等方法选择节点，并使用 boundingClientRect 等方法选择需要查询的信息。

**方法参数**： 无

**返回值**：selectorQuery

**示例**：

<a href="swanide://fragment/499b9f5a6292b7581f5ef675f86a49aa1569513374378" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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
