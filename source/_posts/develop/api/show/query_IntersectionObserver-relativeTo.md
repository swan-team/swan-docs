---
title: IntersectionObserver.relativeTo
header: develop
nav: api
sidebar: query_IntersectionObserver-relativeTo
---

 

 


**解释**：使用选择器指定一个节点，作为参照区域之一。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_relativeTo.png" class="demo-qrcode-image" />

**方法参数**：String selector, Object object

**`selector`参数说明:**选择器

**`margins`参数说明:**用来扩展（或收缩）参照节点布局区域的边界

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|left|number|否| |节点布局区域的左边界|
|right|number|否| |节点布局区域的右边界|
|top|number|否| |节点布局区域的上边界|
|bottom|number|否| |节点布局区域的下边界|

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/relativeTo.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：

<a href="swanide://fragment/2ccad5e6c49621ca8494346f4b6b7e161574305549903" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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
        .relativeTo('.scroll-view', 50)
        console.log(intersectionObserver) // {selector: ".scroll-view", margins: 50}
        swan.showModal({
            title: 'relativeTo',
            content: JSON.stringify(intersectionObserver._relativeInfo)
        });
    },
    onUnload() {
        this.intersectionObserver && this.intersectionObserver.disconnect();
    }
});
```

