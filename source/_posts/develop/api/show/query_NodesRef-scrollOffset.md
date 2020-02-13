---
title: NodesRef.scrollOffset 
header: develop
nav: api
sidebar: query_NodesRef-scrollOffset 
---

 

**解释**： 添加节点的滚动位置查询请求，以像素为单位。节点必须是 scroll-view 或者 viewport 。返回值是 nodesRef 对应的 selectorQuery 。

 
## 方法参数 

Function callback

### 返回值说明  
返回的节点信息中，每个节点的滚动位置用 scrollLeft 、scrollTop 字段描述。如果提供了 callback 回调函数，在执行 selectQuery 的 exec 方法后，节点信息会在 callback 中返回。

|参数|类型|说明|
|---|---|---|
|scrollLeft|Nunber|节点水平滚动位置|
|scrollTop|Nunber|节点竖直滚动位置|
## 示例

<a href="swanide://fragment/33db2d08cc65630cc939ec8d268bf0481574974671748" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a> 

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_scrollOffset.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/scrolloffset.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### 代码示例 



* 在 swan 文件中

```html
<view class="wrap">
    <view class="message">
        <text s-if="appear">小球出现</text>
        <text s-else>小球消失</text>
    </view>
    <view>
        <scroll-view class="scroll-view" scroll-y>
            <view class="scroll-area" style="{{appear ? 'background: #ccc' : ''}}">
                <text class="notice">向下滚动让小球出现</text>
                <view class="filling"></view>
                <view class="ball"></view>
            </view>
        </scroll-view>
    </view>
    <button bindtap="getNodeRef">点击获取scrollview组件的nodeRef信息</button>
</view>
```

* 在 js 文件中

```js
Page({
    data: {
        appear: false
    },
    onReady() {
        const IntersectionObserver = swan.createIntersectionObserver(this);
        IntersectionObserver.relativeTo('.scroll-view').observe('.ball', res => {
            console.log('observe', res)
            this.setData('appear', res.intersectionRatio > 0);
        });
        this.IntersectionObserver = IntersectionObserver;
    },
    getNodeRef() {
        const node = swan.createSelectorQuery().select('.scroll-view');
        node.scrollOffset(res => {
            console.log('scrollOffset:::', res);
            swan.showModal({
                title: 'scrollOffset',
                content: JSON.stringify(res)
            });
        }).exec();
    }
});
```

