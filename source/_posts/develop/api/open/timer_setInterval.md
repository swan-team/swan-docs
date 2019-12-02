---
title: setInterval
header: develop
nav: api
sidebar: timer_setInterval
---
 

**解释**：设定一个定时器，按照指定的周期（以毫秒计）来执行注册的回调函数。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_timer.png"  class="demo-qrcode-image" />

**方法参数**：Function callback, Number delay

**`callback`参数说明**：回调函数

**`delay`参数说明**： 执行回调函数之间的时间间隔，单位 ms。 

**返回值**：

|名称|解释|
|--|--|
|number|定时器的编号。这个值可以传递给 <a href="http://smartprogram.baidu.com/docs/develop/api/open/timer_clearTimeout/">clearInterval </a>来取消该定时。|

**图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/setInterval.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**

<a href="swanide://fragment/3a72e862b7e3d92d06fc64432513d1001574042023470" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="setInterval">setInterval</button>
    <button type="primary" bindtap="clearInterval">clearInterval</button>
</view>
```

* 在 js 文件中

```js
Page({
    setInterval() {
        this.interval && clearInterval(this.interval);
        this.interval = setInterval(function () {
            swan.showToast({
                title: 'setInterval',
                icon: 'none'
            })
        }, 5000);
    },
    clearInterval() {
        this.interval && clearInterval(this.interval);
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
