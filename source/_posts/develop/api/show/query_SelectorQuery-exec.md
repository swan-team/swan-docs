---
title: SelectorQuery.exec 
header: develop
nav: api
sidebar: show_swan-query_SelectorQuery-exec
---
 
 

**解释**： 执行所有的请求，请求结果按请求次序构成数组，在 callback 的第一个参数中返回。

 
## 方法参数 

Function callback

## 示例

<a href="swanide://fragment/f0fc0bcb11a1d36e86fe224d6f2938be1574491317790" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>
 
### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_SelectorQueryExec.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/selectorQueryExec.gif">
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
    <view class="card-area">
        <movable-area>
            <movable-view class="target" x="{{x}}" y="{{y}}" direction="all" bindchange="queryNodeInfo">
                Drag
            </movable-view>
        </movable-area>
    </view>
    <button type="primary" bindtap="queryNodeInfo">获取Drag的exec的返回值</button>
</view>
```

* 在 js 文件中

```js
Page({
    queryNodeInfo: function(){
        swan.createSelectorQuery().select('.target').boundingClientRect().exec(function(rect){
            console.log(rect);
            swan.showModal({
                title: 'SelectorQuery.exec的返回值',
                content: JSON.stringify(rect)
            });
        })
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
