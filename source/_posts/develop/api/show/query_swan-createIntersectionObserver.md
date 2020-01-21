---
title: swan.createIntersectionObserver 
header: develop
nav: api
sidebar: query_swan-createIntersectionObserver 
---
 

**解释**： 创建并返回一个 IntersectionObserver 对象实例。在自定义组件中，可以使用 this.createIntersectionObserver([options]) 来代替。
 
## 方法参数 

Object object

###  `options`参数说明 

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |: ---- | :---- |: ----|:----|
|thresholds|Array|否|[0]|一个数值数组，包含所有阈值。|
|initialRatio|number|否|0|初始的相交比例，如果调用时检测到的相交比例与这个值不相等且达到阈值，则会触发一次监听器的回调函数。|
|selectAll|boolean|否|false|是否同时观测多个目标节点（而非一个），如果设为 true ，observe 的 targetSelector 将选中多个节点（注意：同时选中过多节点将影响渲染性能）|
## 示例

 
### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_intersectionObserver.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/createIntersectionObserver.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

###  代码示例1 ：

<a href="swanide://fragment/b82b0e3dd9bff9173965078c876d6bd01574304101063" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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
                <!-- 占位元素 -->
                <view class="filling"></view> 
                <!-- 小球 -->
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
        const intersectionObserver = swan.createIntersectionObserver();
        // 监测scroll-view可视区域 和 小球元素节点 的相交情况
        intersectionObserver.relativeTo('.scroll-view').observe('.ball', res => {
            console.log('observe', res)
            // boundingClientRect: 目标边界，这里指小球的位置情况，这个位置是相对于整个页面的，不是相对于参照元素的scroll-view的
            // dataset: 观察对象携带的数据。
            // id: 观察对象的id，它与上面的dataset多使用于一次观察多个对象的场景，用于区分不同的对象。
            // intersectionRatio: 相交比例，为0时说明两者不相交。
            // intersectionRect: 相交区域，height 为 0 时说明此时没有相交。
            // relativeRect: 参照区域的边界，作为参考物，它的值一般是不会变的。可以对比它于开始相交时一直没变，因为它就是一个scroll-view的组件在页面上呈现出的位置信息。
            // time: 监测到两者相交时的时间戳
            this.setData('appear', res.intersectionRatio > 0);
        });
        this.intersectionObserver = intersectionObserver;
    },
    onUnload() {
        this.intersectionObserver && this.intersectionObserver.disconnect();
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

###  代码示例2 - options为thresholds时 ：

<a href="swanide://fragment/b82b0e3dd9bff9173965078c876d6bd01574304101063" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    data: {
        appear: false
    },
    onReady() {
        const intersectionObserver = swan.createIntersectionObserver({
            // 阈值设置少，避免触发过于频繁导致性能问题
            thresholds: [1]
        });
        // 监测scroll-view可视区域 和 小球元素节点的相交情况
       //  我配置了 thresholds：[1]，那么当监听对象和参照物相交比例达到 1 时，会触发监听器的回调函数

        intersectionObserver.relativeTo('.scroll-view').observe('.ball', res => {
            console.log('observe', res)
            // intersectionRatio: 相交比例，为0时说明两者不相交。
            this.setData('appear', res.intersectionRatio > 0);
        });
        this.intersectionObserver = intersectionObserver;
    },
    onUnload() {
        this.intersectionObserver && this.intersectionObserver.disconnect();
    }
});
```


###  代码示例3 - options为initialRatio时 ：

<a href="swanide://fragment/2c3aea3f1bc1948d0ce69f56fa5acb571574931094969" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    data: {
        appear: false
    },
    onReady() {
        const intersectionObserver = swan.createIntersectionObserver({
            // 初始相交比例，默认 0，达到 initialRatio 或 thresholds 中的阈值时，回调被触发
            initialRatio: 1
        });
        // 监测scroll-view可视区域 和 小球元素节点的相交情况
       //  我配置了 thresholds：[1]，那么当监听对象和参照物相交比例达到 1 时，会触发监听器的回调函数

        intersectionObserver.relativeTo('.scroll-view').observe('.ball', res => {
            console.log('observe', res)
            // intersectionRatio: 相交比例，这里为 1 时说明两者不相交。
            this.setData('appear', res.intersectionRatio > 0);
        });
        this.intersectionObserver = intersectionObserver;
    },
    onUnload() {
        this.intersectionObserver && this.intersectionObserver.disconnect();
    }
});
```

###  代码示例4 - options为selectAll时 ：

<a href="swanide://fragment/cfae8c63d16efcf6a7b4d6b6b2f5d4f71574931774175" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    data: {
        appear: false
    },
    onReady() {
        const intersectionObserver = swan.createIntersectionObserver({
            selectAll: true
        });
        // 监听两个小球
        intersectionObserver.relativeTo('.scroll-view').observe('.ball .ball2', res => {
            console.log('observe', res);
            this.setData('appear', res.intersectionRatio > 0);
        });
        this.intersectionObserver = intersectionObserver;
    },
    onUnload() {
        this.intersectionObserver && this.intersectionObserver.disconnect();
    }
});
```