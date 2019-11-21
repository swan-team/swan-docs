---
title: SelectorQuery.exec 
header: develop
nav: api
sidebar: query_SelectorQuery-exec 
---
 
 

**解释**： 执行所有的请求，请求结果按请求次序构成数组，在 callback 的第一个参数中返回。

**方法参数**：Function callback

**代码示例**：

<a href="swanide://fragment/5bdf7f7297a730cfdc9e25daeb1763971574323496089" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
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

* 在 js 文件中

```js
Page({
    data: { },
    onReady() {
        const selectorQuery = swan.createSelectorQuery();
        this.selectorQuery = selectorQuery;
    },
    queryNodeInfo() {
        this.selectorQuery.select('.target').boundingClientRect();
        this.selectorQuery.exec(res => {
            console.log(res[0])
        });
    }
});
```
* 在 css 文件中

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
