---
title: IntersectionObserver
header: develop
nav: api
sidebar: query_IntersectionObserver
webUrl: https://qft12m.smartapps.cn/swan-api/intersection-observer/intersection-observer
---
 
 

**解释**： IntersectionObserver 对象，用于推断某些节点是否可以被用户看见、有多大比例可以被用户看见。


 `IntersectionObserver`对象的方法列表 ：

|方法 |说明|
|---- | ---- | ---- |
|relativeTo|使用选择器指定一个节点，作为参照区域之一|
|relativeToViewport|指定页面显示区域作为参照区域之一|
|observe|指定目标节点并开始监听相交状态变化情况|
|disconnect|停止监听。回调函数将不再触发|

## 示例

<a href="swanide://fragment/f60eb7f2ab1b7fd10e352d0f9157d58b1574304539900" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a> 

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_intersectionObserver.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 代码示例 


:::codeTab

```swan
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

```js
Page({
    data: { },
    onReady() {
        const intersectionObserver = swan.createIntersectionObserver(this);
        intersectionObserver
        .relativeTo('.scroll-view')
        .relativeToViewport({bottom: 100})
        .observe('.ball', res => {
            console.log('observe', res)
        });
        this.intersectionObserver = intersectionObserver;
    },
    onUnload() {
        this.intersectionObserver && this.intersectionObserver.disconnect();
    }
});
```

:::