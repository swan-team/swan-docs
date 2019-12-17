---
title: SelectorQuery.selectViewport 
header: develop
nav: api
sidebar: query_SelectorQuery-selectViewport 
---
 
 

**解释**： 选择显示区域，可用于获取显示区域的尺寸、滚动位置等信息，返回一个NodesRef对象实例。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_selectViewport.png"  class="demo-qrcode-image" />

**方法参数**：String selector

**返回值**：nodesRef

**图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/selectViewport.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**

<a href="swanide://fragment/4fdca56adf0b81326bd4f838a5af4da51575002109257" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button bindtap="selectViewport" type="primary" class="flex-button">滑动界面并点击获取窗口可视区域信息</button>
</view>
```

* 在 js 文件中

```js
Page({
    data: {
        appear: false
    },
    selectViewport() {
        swan.createSelectorQuery().selectViewport().scrollOffset(function(res){
            console.log(res)
            swan.showModal({
                title: 'title',
                content: JSON.stringify(res)
            });
            res.id      // 节点的ID
            res.dataset // 节点的dataset
            res.scrollLeft // 节点的水平滚动位置
            res.scrollTop  // 节点的竖直滚动位置
        }).exec()
    }
});
```

* 在 css 文件中

```css
.wrap {
    margin-top: 30rpx;
    height: 3000px;
}

.flex-button {
    background-color: #fff;
    position: fixed;
    bottom: 0;
    width: 90%;
}
```