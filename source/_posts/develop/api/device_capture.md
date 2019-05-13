---
title: 用户截屏事件
header: develop
nav: api
sidebar: device_capture
---


## swan.onUserCaptureScreen

**解释：**监听用户主动截屏事件，用户使用系统截屏按键截屏时触发此事件。

**方法参数：**Function callback

**`callback`参数说明：**无

**示例：**

<a href="swanide://fragment/6ae3289ac39db172706f00b22c7126d61557732528718" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    onUserCaptureScreen
</view>
```

* 在 js 文件中

```js
Page({
    onLoad() {
        swan.onUserCaptureScreen(function (res) {
            console.log('onUserCaptureScreen', res);
        });
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}
```
