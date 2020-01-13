---
title: IntersectionObserver.disconnect 
header: develop
nav: api
sidebar:  query_IntersectionObserver-disconnect 
---
 
 
> 与页面显示区域的相交区域并不准确代表用户可见的区域，因为参与计算的区域是“布局区域”，布局区域可能会在绘制时被其他节点裁剪隐藏（如遇祖先节点中 overflow 样式为 hidden 的节点）或遮盖（如遇 fixed 定位的节点）。

**解释**：停止监听，回调函数将不再触发。

 
 ## 方法参数 

无
## 示例


<a href="swanide://fragment/0f2e97ad1bb513cc9b4a422a74a953e81574764698768" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a> 

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_disconnect.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/disconnect.gif">
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
    <scroll-view class="scroll-view" scroll-y>
        <view class="scroll-area" style="{{appear ? 'background: #ccc' : ''}}">
            <text class="notice">向下滚动让小球出现</text>
            <!-- 占位元素 -->
            <view class="filling"></view> 
            <!-- 小球 -->
            <view class="ball"></view>
        </view>
    </scroll-view>
    <view class="result-item border-bottom">
        <view class="result-keyword">top</view>
        <view class="result-value">{{data.top}}</view>
    </view>
    <view class="result-item border-bottom">
        <view class="result-keyword">right</view>
        <view class="result-value">{{data.right}}</view>
    </view>
    <view class="result-item border-bottom">
        <view class="result-keyword">bottom</view>
        <view class="result-value">{{data.bottom}}</view>
    </view>
    <view class="result-item">
        <view class="result-keyword">left</view>
        <view class="result-value">{{data.left}}</view>
    </view>
    <view class="result-item">
        <view class="result-keyword">width</view>
        <view class="result-value">{{data.width}}</view>
    </view>
    <view class="result-item">
        <view class="result-keyword">height</view>
        <view class="result-value">{{data.height}}</view>
    </view>
    <button type="primary" bindtap="disconnect">停止监听</button>
</view>
```

```javascript
Page({
    data: {
        data: ''
    },
    onReady() {
        const intersectionObserver = swan.createIntersectionObserver(this,{
            selectAll: true
        });
        intersectionObserver.relativeTo('.scroll-view').observe('.ball', res => {
            this.setData('data', res.intersectionRect);
            console.log(res.intersectionRect.left); // 相交区域的左边界坐标
            console.log(res.intersectionRect.top); // 相交区域的上边界坐标
            console.log(res.intersectionRect.width); // 相交区域的宽度
            console.log(res.intersectionRect.height); // 相交区域的高度
        });
        this.intersectionObserver = intersectionObserver;
    },
    disconnect() {
        this.intersectionObserver && this.intersectionObserver.disconnect();
    }
});
```