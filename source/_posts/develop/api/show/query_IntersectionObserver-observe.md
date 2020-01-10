---
title: IntersectionObserver.observe 
header: develop
nav: api
sidebar: query_IntersectionObserver-observe 
---
 
 
**解释**：指定目标节点并开始监听相交状态变化情况

 百度APP中扫码体验： 

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_observe.png" class="demo-qrcode-image" />

 方法参数 ：String targetSelector, Function callback

 `targetSelector`参数说明 ：选择器

 `callback`参数说明 ：监听相交状态变化的回调函数

 回调结果说明 

|属性|  类型|  说明|
|---- | ---- | ---- |
|intersectionRatio  | number | 相交比例|
|intersectionRect   | Object | 相交区域的边界|
|boundingClientRect | Object |目标边界|
|relativeRect    |Object  |参照区域的边界|
|time  |  number | 相交检测时的时间戳|

 intersectionRect、boundingClientRect、relativeRect 结构说明 

|属性|  类型|  说明|
|---- | ---- | ---- |
|left |  number | 左边界|
|right  | number | 右边界|
|top| number | 上边界|
|bottom  |number | 下边界|

## 示例

 
### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_setBackgroundColor.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/observe.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### 代码示例 

<a href="swanide://fragment/9e13f19179f3ff25f0b2ffbbe17e978e1574307679898" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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
</view>
```

```javascript
Page({
    data: {
        data: ''
    },
    onReady() {
        swan.createIntersectionObserver(this, {
            selectAll: true
        })
        .relativeTo('.scroll-view')
        .observe('.ball', res => {
            this.setData('data', res.intersectionRect);
            console.log(res.intersectionRect.left); // 相交区域的左边界坐标
            console.log(res.intersectionRect.top); // 相交区域的上边界坐标
            console.log(res.intersectionRect.width); // 相交区域的宽度
            console.log(res.intersectionRect.height); // 相交区域的高度
        });
    }
});
```

