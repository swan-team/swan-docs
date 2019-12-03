---
title: setTimeout
header: develop
nav: api
sidebar: timer_setTimeout
---

 

**解释**：设定一个定时器，在定时到期以后执行注册的回调函数。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_timer.png"  class="demo-qrcode-image" />

**方法参数**：Function callback, Number delay

**`callback`参数说明**：回调函数

**`delay`参数说明**： 延迟的时间，函数的调用会在该延迟之后发生，单位 ms。


**返回值**：

|名称|解释|
|--|--|
|number|定时器的编号。这个值可以传递给 <a href="http://smartprogram.baidu.com/docs/develop/api/open/timer_clearTimeout/">clearTimeout  </a>来取消该定时。|


**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/setTimeout.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：

<a href="swanide://fragment/3b962a13eb39f09ce8e94f6e77ebef4d1574043590740" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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
