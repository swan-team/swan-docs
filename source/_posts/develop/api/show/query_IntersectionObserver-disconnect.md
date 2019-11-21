---
title: IntersectionObserver.disconnect 
header: develop
nav: api
sidebar:  query_IntersectionObserver-disconnect 
---
 
 
> 与页面显示区域的相交区域并不准确代表用户可见的区域，因为参与计算的区域是“布局区域”，布局区域可能会在绘制时被其他节点裁剪隐藏（如遇祖先节点中 overflow 样式为 hidden 的节点）或遮盖（如遇 fixed 定位的节点）。

**解释**：停止监听，回调函数将不再触发。

**方法参数**：无


**代码示例**：

<a href="swanide://fragment/1de191695cff9d7d9160f50a7d4411321574308035061" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <scroll-view class="scroll-view" scroll-y>
        <view class="scroll-area" style="{{appear ? 'background: #ccc' : ''}}">
            <text class="notice">向下滚动让小球出现</text>
            <!-- 占位元素 -->
            <view class="filling"></view> 
            <!-- 小球 -->
            <view class="ball"></view>
        </view>
    </scroll-view>  
    <view class="result-keyword">top: {{data.top}}</view>
    <view class="result-keyword">right: {{data.right}}</view>
    <view class="result-keyword">bottom: {{data.bottom}}</view>  
    <view class="result-keyword">left: {{data.left}}</view>  
    <view class="result-keyword">width: {{data.width}}</view>    
    <view class="result-keyword">height: {{data.height}}</view>
    <button type="primary" bindtap="disconnect">停止监听</button>
</view>
```

```javascript
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
    disconnect() {
        this.intersectionObserver && this.intersectionObserver.disconnect();
    }
```