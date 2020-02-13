---
title:  clearTimeout
header: develop
nav: api
sidebar: timer_clearTimeout
---
 

**解释**：取消由 setTimeout 设置的定时器。

 
## 方法参数

Number timeoutID

 `timeoutID`参数说明 ：要取消的定时器的 ID。
## 示例

<a href="swanide://fragment/3b962a13eb39f09ce8e94f6e77ebef4d1574043590740" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_timer.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  


<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/clearTimeout.gif">
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
    <button type="primary" bindtap="setTimeoutTap">setTimeout</button>
    <button type="primary" bindtap="clearTimeoutTap">clearTimeout</button>
</view>
```

* 在 js 文件中

```js
Page({
    setTimeoutTap() {
        this.timeout && clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
            swan.showToast({
                title: 'timeout',
                icon: 'none'
            })
        }, 5000);
    },
    clearTimeoutTap() {
        this.timeout && clearTimeout(this.timeout);
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}

.wrap button {
    margin-bottom: 30rpx;
}
```
