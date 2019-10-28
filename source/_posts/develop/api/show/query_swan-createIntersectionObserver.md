---
title: swan.createIntersectionObserver 
header: develop
nav: api
sidebar: query_swan-createIntersectionObserver 
---
 

**解释**： 创建并返回一个 IntersectionObserver 对象实例。在自定义组件中，可以使用 this.createIntersectionObserver([options]) 来代替。

**方法参数**：Object options

**`options`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|thresholds|Array|否|[0]|一个数值数组，包含所有阈值。|
|initialRatio|number|否|0|初始的相交比例，如果调用时检测到的相交比例与这个值不相等且达到阈值，则会触发一次监听器的回调函数。|
|selectAll|boolean|否|false|是否同时观测多个目标节点（而非一个），如果设为 true ，observe 的 targetSelector 将选中多个节点（注意：同时选中过多节点将影响渲染性能）|

**示例**：

<a href="swanide://fragment/8ab0bafd72cae605089addc3f1bb66601569477488019" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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
    onUnload() {
        this.IntersectionObserver && this.IntersectionObserver.disconnect();
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding-top: 30rpx;
}

.scroll-view {
    height: 400rpx;
    background: #fff;
}
  
.scroll-area {
    height: 1300rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: .5s;
}
  
.notice {
    margin-top: 150rpx;
}
  
.ball {
    width: 200rpx;
    height: 200rpx;
    background: #38f;
    border-radius: 50%;
}
  
.filling {
    height: 400rpx;
}
  
.message {
    margin: 50rpx 0;
    width: 100%;
    display: flex;
    justify-content: center;
}
  
.message text {
    font-size: 40rpx;
    font-family: -apple-system-font, Helvetica Neue,Helvetica,sans-serif;
}
  
```

