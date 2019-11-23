---
title: NodesRef.boundingClientRect 
header: develop
nav: api
sidebar: query_NodesRef-boundingClientRect 
---

 
 

**解释**： 添加节点的布局位置的查询请求，相对于显示区域，以像素为单位。其功能类似于 DOM 的 getBoundingClientRect。返回值是 nodesRef 对应的 selectorQuery。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_boundingClientRect.png" class="demo-qrcode-image" />

**方法参数**：Function callback

**返回值说明**：

返回的节点信息中，每个节点的位置用 left、right、top、bottom、width、height 字段描述。如果提供了 callback 回调函数，在执行 selectQuery 的 exec 方法后，节点信息会在 callback 中返回。

|参数 |类型|说明|
|---|---|---|
|left|Nunber|节点左边界坐标|
|right|Nunber|节点右边界坐标|
|top|Nunber|节点上边界坐标|
|bottom|Nunber|节点下边界坐标|
|width|Nunber|节点宽度|
|height|Nunber|节点高度|

**图片示例**：

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

**代码示例**：

<a href="swanide://fragment/bd188091c6a769dd38ecbb9d5cd640761574491158798" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <view class="card-area">
        <movable-area>
            <movable-view class="target" x="{{x}}" y="{{y}}" direction="all" bindchange="queryNodeInfo">
                Drag
            </movable-view>
        </movable-area>
    </view>
    <button type="primary" bindtap="queryNodeInfo">获取Drag的boundingClientRect的返回值</button>
</view>
```

* 在 js 文件中

```js
Page({
    queryNodeInfo: function(){
        swan.createSelectorQuery().select('.target').boundingClientRect(function(rect){
            console.log(rect);
            swan.showModal({
                title: 'NodesRef.boundingClientRect的返回值',
                content: JSON.stringify(rect)
            });
        }).exec()
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

