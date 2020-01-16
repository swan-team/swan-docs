---
title: NodesRef.fields
header: develop
nav: api
sidebar: query_NodesRef-fields
---
 
**解释**： 获取节点的相关信息，需要获取的字段在 fields 中指定。返回值是 nodesRef 对应的 selectorQuery 。可指定获取的字段包括：

 
## 方法参数 

Object object, Function callback

### `fields`参数说明 

|参数名| 类型 |必填 |默认值| 说明|
|---- | ---- | ---- |---|---|
|id|boolean |否 || 是否返回节点 id |
|dataset |boolean | 否 | |是否返回节点 dataset |
|rect  | boolean| 否  | |是否返回节点布局位置（left right top bottom） |
|size  | boolean |否  | |是否返回节点尺寸（width height） |
|scrollOffset |boolean |  否  | |是否返回节点的 scrollLeft scrollTop ，节点必须是 scroll-view 或者 viewport |
|properties  | Array.&lt;string&gt;| []  | |指定属性名列表，返回节点对应属性名的当前属性值（只能获得组件文档中标注的常规属性值， id class style 和事件绑定的属性值不可获取） |
|computedStyle  |Array.&lt;string&gt; | []  | |指定样式名列表，返回节点对应样式名的当前值 |
## 示例

<a href="swanide://fragment/074e13432730548b49ba90f0fbcb8fac1574492260859" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>
 
### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_NodesRefFields.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/NodesReffields.gif">
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
<view class="container">
    <view class="card-area">
        <movable-area>
            <movable-view class="target" x="{{x}}" y="{{y}}" direction="all" bindchange="queryNodeInfo">
                Drag
            </movable-view>
        </movable-area>
        <view>
            得到的信息：<text class="list-item-key-4">{{data}}</text>
        </view>
    </view>
</view>
```

* 在 js 文件中

```js
Page({
    data: {
        data: ''
    },
    queryNodeInfo: function(){
        let that = this;
        swan.createSelectorQuery().select('.target').fields({
            dataset: true,
            size: true,
            scrollOffset: true,
            properties: ['scrollX', 'scrollY'],
            computedStyle: ['margin', 'backgroundColor']
        }, function(res){
            console.log(res)
            that.setData('data', JSON.stringify(res));
            res.dataset    // 节点的dataset
            res.width      // 节点的宽度
            res.height     // 节点的高度
            res.scrollLeft // 节点的水平滚动位置
            res.scrollTop  // 节点的竖直滚动位置
            res.scrollX    // 节点 scroll-x 属性的当前值
            res.scrollY    // 节点 scroll-y 属性的当前值
            // 此处返回指定要返回的样式名
            res.margin
            res.backgroundColor
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

