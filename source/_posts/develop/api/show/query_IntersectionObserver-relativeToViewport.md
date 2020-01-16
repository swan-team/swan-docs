---
title: IntersectionObserver.relativeToViewport
header: develop
nav: api
sidebar: query_IntersectionObserver-relativeToViewport
---
 
 
**解释**：指定页面显示区域作为参照区域之一

 
## 方法参数 

Object object

###  `margins`参数说明: 用来扩展（或收缩）参照节点布局区域的边界

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|left|number|否| |节点布局区域的左边界|
|right|number|否| |节点布局区域的右边界|
|top|number|否| |节点布局区域的上边界|
|bottom|number|否| |节点布局区域的下边界|

## 示例

<a href="swanide://fragment/a07d524b2571998e87a84511c1e920071574305851456" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a> 

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_relativeToViewport.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/relativeToViewport.gif">
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
<scroll-view class="scroll-view" scroll-y>
    <view class="scroll-area" style="{{appear ? 'background: #ccc' : ''}}">
        <text class="notice">向下滚动让小球出现</text>
        <!-- 占位元素 -->
        <view class="filling"></view> 
        <!-- 小球 -->
        <view class="ball"></view>
    </view>
</scroll-view>
```

* 在 js 文件中

```js
Page({
    data: { },
    onReady() {
        const intersectionObserver = swan.createIntersectionObserver(this);
        intersectionObserver
        .relativeToViewport({bottom: 100})
        console.log(intersectionObserver) // {selector: null, margins: {bottom: 100}}
        swan.showModal({
            title: 'relativeToViewport',
            content: JSON.stringify(intersectionObserver._relativeInfo)
        });
    },
    onUnload() {
        this.intersectionObserver && this.intersectionObserver.disconnect();
    }
});
```
