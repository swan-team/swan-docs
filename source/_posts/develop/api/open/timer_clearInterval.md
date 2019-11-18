---
title: clearInterval
header: develop
nav: api
sidebar: timer_clearInterval
---
 

**解释**：取消由 setInterval 设置的定时器。

**方法参数**：Number intervalID

**`intervalID`参数说明**：要取消的定时器的 ID。

**代码示例**：

<a href="swanide://fragment/06a5732dd6a5c4dfe18937335baadc071574042401827" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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


